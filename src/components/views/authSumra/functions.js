/**
 * Const adrees server and points for request
 */
export const END_POINTS = {
    SERVER: "https://api.sumra.net/",
    SEND_CODE: "auth/v1/send-code",
    VALIDATE: "auth/v1/validate",
    REGISTRATION: "auth/v1/registration",
    AUTHENTIFICATION: "auth/v1/chat/authenticate",
};

/* export const END_POINTS = {
    SERVER: "https://d4daab16bedc.ngrok.io/",
    SEND_CODE: "send-code",
    VALIDATE: "validate",
    REGISTRATION: "registration",
    AUTHENTIFICATION: "chat/authenticate",
}; */

/**
 * makeId.
 */

export function makeid(length) {
    var result = "";
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
}

/**
 * makeFetch.
 */
export async function makeFetch(action, data) {
    return fetch(END_POINTS.SERVER + action, {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
}

/**
 * makeFetch.
 */
export function fetchValidateName(name) {
    return fetch(END_POINTS.SERVER + END_POINTS.VALIDATE + "?username=" + name);
}

/**
 * fetchAuth
 */
export function fetchAuth(data) {
    return fetch(END_POINTS.SERVER + END_POINTS.AUTHENTIFICATION, {
        body: JSON.stringify(data),
        method: "POST",
        // mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
        },
    });
}
