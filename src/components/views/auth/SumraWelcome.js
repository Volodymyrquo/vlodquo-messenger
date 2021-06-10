/*
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

import React from "react";
import * as sdk from "matrix-react-sdk/src/index";
import { _td } from "matrix-react-sdk/src/languageHandler";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { makeFetch, makeid } from "./functions";
import { isMobile } from "react-device-detect";
import socialLinks from "./socialLinks";
import send from "../../../../res/vector-icons/send.svg";
import logo from "../../../../res/images/sumra/logo.svg";
import WelcomeCarousel from "./WelcomeCarousel.jsx";
import { ContextConsumer } from "../../../context/Context.jsx";
import Welcome from "./Welcome.jsx";

// translatable strings for Welcome pages
_td("Sign in with SSO");

export default class SumraWelcome extends React.PureComponent {
    static replaces = "Welcome";

    render() {
        const AuthPage = sdk.getComponent("views.auth.AuthPage");
        const AuthBody = sdk.getComponent("auth.AuthBody");

        return (
            <AuthPage>
                <AuthBody>
                    <div className="sumra-welcome-carousel">
                        <WelcomeCarousel />
                    </div>
                    <ContextConsumer>
                        {(props) => {
                            return <Welcome context={props} />;
                        }}
                    </ContextConsumer>
                </AuthBody>
            </AuthPage>
        );
    }
}
