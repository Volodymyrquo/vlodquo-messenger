const VERSION = 10;

const req = indexedDB.open("matrix-js-sdk:crypto", VERSION);
req.onupgradeneeded = (ev) => {
    const db = ev.target.result;
    const oldVersion = ev.oldVersion;
    upgradeDatabase(db, oldVersion);
    // Expand as needed.
};

req.onblocked = () => {
    console.log(
        `can't yet open LocalIndexedDBStoreBackend because it is open elsewhere`
    );
};

console.log(`LocalIndexedDBStoreBackend.connect: awaiting connection...`);

req.onsuccess = (r) => {
    const db = r.target.result;
    upgradeDatabase(db, 1);
    console.log(`connected to indexeddb ${this._dbName}`);
};

function createDatabase(db) {
    const outgoingRoomKeyRequestsStore = db.createObjectStore(
        "outgoingRoomKeyRequests",
        { keyPath: "requestId" }
    );

    // we assume that the RoomKeyRequestBody will have room_id and session_id
    // properties, to make the index efficient.
    outgoingRoomKeyRequestsStore.createIndex("session", [
        "requestBody.room_id",
        "requestBody.session_id",
    ]);

    outgoingRoomKeyRequestsStore.createIndex("state", "state");
}

function upgradeDatabase(db, oldVersion) {
    console.log(
        `Upgrading IndexedDBCryptoStore from version ${oldVersion}` +
            ` to ${VERSION}`
    );
    if (oldVersion < 1) {
        // The database did not previously exist.
        createDatabase(db);
    }
    if (oldVersion < 2) {
        db.createObjectStore("account");
    }
    if (oldVersion < 3) {
        const sessionsStore = db.createObjectStore("sessions", {
            keyPath: ["deviceKey", "sessionId"],
        });
        sessionsStore.createIndex("deviceKey", "deviceKey");
    }
    if (oldVersion < 4) {
        db.createObjectStore("inbound_group_sessions", {
            keyPath: ["senderCurve25519Key", "sessionId"],
        });
    }
    if (oldVersion < 5) {
        db.createObjectStore("device_data");
    }
    if (oldVersion < 6) {
        db.createObjectStore("rooms");
    }
    if (oldVersion < 7) {
        db.createObjectStore("sessions_needing_backup", {
            keyPath: ["senderCurve25519Key", "sessionId"],
        });
    }
    if (oldVersion < 8) {
        db.createObjectStore("inbound_group_sessions_withheld", {
            keyPath: ["senderCurve25519Key", "sessionId"],
        });
    }
    if (oldVersion < 9) {
        const problemsStore = db.createObjectStore("session_problems", {
            keyPath: ["deviceKey", "time"],
        });
        problemsStore.createIndex("deviceKey", "deviceKey");

        db.createObjectStore("notified_error_devices", {
            keyPath: ["userId", "deviceId"],
        });
    }
    if (oldVersion < 10) {
        db.createObjectStore("shared_history_inbound_group_sessions", {
            keyPath: ["roomId"],
        });
    }
}
