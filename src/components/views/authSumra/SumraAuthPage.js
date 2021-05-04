import React, { Component, Fragment } from "react";
import SumraFirstForm from "./components/SumraFirstForm";
import SumraConfirmCodeForm from "./components/SumraConfirmCodeForm";
import SumraUserCreateForm from "./components/SumraUserCreateForm";
import SumraLoginForm from "./components/SumraLoginForm";
import * as sdk from "matrix-react-sdk/src/index";

import "./SumraAuthPage.css";

/**
 * Represents the authentification page.
 *
 * @extends Component
 */
export default class SumraWelcomePage extends Component {
    static defaultProps = {
        className: "authentification-form",
    };

    constructor(props) {
        super(props);

        this.state = {
            currentStep: 1,
            verificationCode: "",
            room: "",
            username: "",
            password: "",
        };
    }

    componentDidMount() {
        const paramStr = window.location.search;
        if (!paramStr) {
            this.setState({ room: "defaultRoom" });
        } else {
            this.setState({ room: paramStr.replace("?", "") });
        }
    }

    /**
     * Render
     */
    render() {
        const LoginComponent = sdk.getComponent("auth.PasswordLogin");

        const { className } = this.props;
        const loginForm = className + " login-form";
        const { room } = this.state;
        const children = this.props.children;
        const getForm = () => {
            switch (this.state.currentStep) {
                case 1:
                    return (
                        <SumraFirstForm
                            className={className}
                            onStep={this._goToStep}
                        />
                    );
                case 2:
                    return (
                        <SumraConfirmCodeForm
                            className={className}
                            onStep={this._goToStep}
                            onSetCode={this._onSetVerificationCode}
                            setStateLogin={this._setStateLoginPage}
                        />
                    );
                case 3:
                    return (
                        <SumraUserCreateForm
                            className={className}
                            state={this.state}
                            onStep={this._goToStep}
                        />
                    );
                case 4:
                    return (
                        <div>{this.props.children}</div>

                        /*  <SumraLoginForm
                            className={className}
                            onStep={this._goToStep}
                            room={room}
                           
                        /> */
                    );
                default:
                    console.error("[Sumra Auth Page] Something wrong!");
            }
        };
        const form = getForm();

        return (
            <Fragment>
                <header className="sumra-header">
                    <div className="logotype"></div>
                </header>
                <main className="sumra-main color">{form}</main>
                <footer className="sumra-footer"></footer>
            </Fragment>
        );
    }

    /**
     *
     * @param {number} value
     */
    _goToStep = (value) => {
        this.setState({ currentStep: value });
    };

    /**
     *
     * @param {string} code
     */
    _onSetVerificationCode = (code) => {
        this.setState({ verificationCode: code.toUpperCase() });
    };

    _setStateLoginPage = (username, password) => {
        this.setState({ username, password });
    };
}
