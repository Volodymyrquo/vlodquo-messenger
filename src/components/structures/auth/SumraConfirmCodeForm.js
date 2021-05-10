import React, { Component, createRef } from "react";
import ReactCodeInput from "react-verification-code-input";
import logout from "../../../../res/vector-icons/icon-logout.svg";
import SumraUserCreateForm from "../../views/auth/SumraUserCreateForm";
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

        console.log(this.props);

        return (
            <>
                {this.state.verificationComplete ? (
                    <SumraUserCreateForm
                        verificationCode={this.state.verificationCode}
                    />
                ) : (
                    <div className="sumra-main verification-code-form authentification-form">
                        <h1 className="h1-title">Confirmation Access</h1>

                        <form>
                            <h2 className="h2-label">
                                Enter the six-digit verification code.
                            </h2>

                            <ReactCodeInput
                                className="sumra-react-code-input"
                                ref={this.input}
                                type={type}
                                fieldWidth={fieldWidth}
                                fieldHeight={fieldHeight}
                                onChange={this._handleChange}
                                onComplete={this._handleComplete}
                            />

                            <button
                                className="sumra-Button"
                                onClick={this._submitVerificationCode}
                            >
                                <img
                                    className="sumra-Button-icon-left"
                                    src={logout}
                                    width="18"
                                />

                                <span>Continue</span>
                            </button>
                        </form>
                    </div>
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
}
