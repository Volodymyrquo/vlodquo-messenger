import React, { Component, Fragment } from "react";
import SumraFirstForm from "./components/SumraFirstForm";
import SumraConfirmCodeForm from "./components/SumraConfirmCodeForm";
import SumraUserCreateForm from "./components/SumraUserCreateForm";
import SumraLoginForm from "./components/SumraLoginForm";
import "./SumraAuthPage.css";

/**
 * Represents the authentification page.
 *
 * @extends Component
 */
export default class SumraAuthPage extends Component {
    static replaces = "AuthPage";

    static defaultProps = {
        className: "authentification-form",
    };

    constructor(props) {
        super(props);

        this.state = {
            currentStep: 1,
            verificationCode: "",
            room: "",
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
        const { className } = this.props;
        const { room } = this.state;
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
                        />
                    );
                case 3:
                    return (
                        <SumraUserCreateForm
                            className={className}
                            state={this.state}
                        />
                    );
                case 4:
                    return (
                        <SumraLoginForm
                            className={className}
                            onStep={this._goToStep}
                            room={room}
                        />
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
}
