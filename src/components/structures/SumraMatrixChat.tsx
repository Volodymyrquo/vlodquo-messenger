/*
Copyright 2016 OpenMarket Ltd
Copyright 2017 Vector Creations Ltd
Copyright 2019 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* import MatrixChat from "matrix-react-sdk/src/components/structures/MatrixChat";
import SdkConfig from "matrix-react-sdk/src/SdkConfig";

export default class SumraMatrixChat extends MatrixChat {
    static replaces = "MatrixChat";
    getServerProperties() {
        let props = this.state.serverConfig;
        if (!props) props = this.props.serverConfig; // for unit tests
        if (!props) props = SdkConfig.get()["validated_server_config"];
        return {serverConfig: props};
    }

    // we're overriding the base component here, for Element-specific tweaks
}  */
