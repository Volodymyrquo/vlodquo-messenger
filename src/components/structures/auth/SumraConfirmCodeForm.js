import React, { Component, createRef } from "react";
import ReactCodeInput from "react-verification-code-input";
import logout from "../../../../res/vector-icons/icon-logout.svg";
import SumraUserCreateForm from "../../views/auth/SumraUserCreateForm";
import logo from "../../../../res/images/sumra/logo.svg";
import * as sdk from "matrix-react-sdk/src/index";
import { makeFetch } from "../../views/auth/functions";

/**
 * Sumra: Confirm code
 *
 * @extends Component
 */
export default class SumraConfirmCodeForm extends Component {
    static replaces = "Registration";

    static defaultProps = {
        autoFocus: true,
        fieldWidth: 38,
        fieldHeight: 44,
        type: "text",
        fields: 6,
    };

    /**
     * Initializes a new {@code ConfirmForm} instance.
     *
     * @param {Props} props - The React {@code Component} props to initialize
     * the new {@code ConfirmForm} instance with.
     */
    constructor(props) {
        super(props);

        this.state = {
            verificationCode: "",
            verificationComplete: false,
        };

        this.input = createRef();
    }

    /**
     * Render
     *
     * @private
     * @returns {void}
     */
    render() {
        const { type, fieldWidth, fieldHeight, fields } = this.props;
        const AuthBody = sdk.getComponent("auth.AuthBody");
        const AuthPage = sdk.getComponent("views.auth.AuthPage");
        debugger;
        const href = localStorage.getItem("href");
        const messenger = localStorage.getItem("messenger");
        const isPhoneNumber = href[0] === "+" ? true : false;
        return (
            <>
                {this.state.verificationComplete ? (
                    <SumraUserCreateForm
                        verificationCode={this.state.verificationCode}
                    />
                ) : (
                    <AuthPage>
                        <AuthBody>
                            <div className="sumra-auth-logo">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="sumra-verify-box">
                                <h1 className="sumra-verify-title ">
                                    Verify Account!
                                </h1>
                                <form>
                                    <div className="sumra-verify-text ">
                                        Enter 6 digit verification code we have
                                        sent to
                                        {isPhoneNumber ? (
                                            <a
                                                href="#"
                                                onClick={
                                                    this._resendCodeOnPhone
                                                }
                                            >
                                                {messenger}
                                            </a>
                                        ) : (
                                            <a href={href}>{messenger}</a>
                                        )}
                                    </div>

                                    <ReactCodeInput
                                        className="sumra-react-code-input"
                                        ref={this.input}
                                        type={type}
                                        fieldWidth={fieldWidth}
                                        fieldHeight={fieldHeight}
                                        onChange={this._handleChange}
                                        onComplete={this._handleComplete}
                                    />
                                    <div>
                                        <span className="sumra-verify-didntreceive">
                                            Didn't receive our code?
                                        </span>
                                        {}
                                        <a href={localStorage.getItem("href")}>
                                            <span className="sumra-verify-resend">
                                                Resend Code
                                            </span>
                                        </a>
                                    </div>

                                    <button
                                        className="sumra-Button"
                                        onClick={this._submitVerificationCode}
                                    >
                                        <span>Continue</span>
                                    </button>
                                </form>
                            </div>
                            <div className="sumra-terms-privacy">
                                By using either Sign Up or Login you agree to
                                our <br />
                                <a href="#">Terms & Privacy Policy.</a>
                            </div>
                        </AuthBody>
                    </AuthPage>
                )}
            </>
        );
    }

    /**
     * Submit verification code.
     *
     * @param {Event} event - The HTML Event which details the form submission.
     * @protected
     * @returns {void}
     */
    _submitVerificationCode = (event) => {
        event.preventDefault();

        const { verificationCode } = this.state;
        const { fields } = this.props;
        const isComplete = verificationCode.length === fields;

        if (isComplete) {
            this.setState({ verificationComplete: true });
        }
    };

    /**
     * _handleChange
     */
    _handleChange = (vals) => {
        console.log("handleChange: " + vals);
    };

    /**
     * _handleComplete
     */
    _handleComplete = (verificationCode) => {
        this.setState({ verificationCode });
    };

    _resendCodeOnPhone = (event) => {
        event.preventDefault();

        const phone = localStorage.getItem("href").replace("+", "");

        makeFetch("auth/v1/send-code", {
            phone_number: phone,
            app_uid: "chat.sumra.web",
        }).then(
            (response) => console.log,
            (error) => console.error
        );
    };
}
