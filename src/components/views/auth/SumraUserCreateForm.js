import React, { Component } from "react";
import { END_POINTS, fetchValidateName, makeFetch } from "./functions";
import iconEnter from "../../../../res/vector-icons/icon-enter.svg";
import personIcon from "../../../../res/vector-icons/icon-person.svg";
import personOrange from "../../../../res/vector-icons/icon-person-orange.svg";
import iconBlock from "../../../../res/vector-icons/icon-block.svg";
import checkGreen from "../../../../res/vector-icons/icon-check-green.svg";
/**
 * Sumra: Create user
 *
 * @extends Component
 */
export default class SumraUserCreateForm extends Component {
    /**
     * Initializes a new {@code ConfirmForm} instance.
     *
     * @param {Props} props - The React {@code Component} props to initialize
     * the new {@code ConfirmForm} instance with.
     */
    constructor(props) {
        super(props);

        const { state } = this.props;

        this.state = {
            ...state,

            username: "",
            invalidUserName: false,
            password: "",
        };

        this.timerID = null;
    }

    /**
     * Render
     *
     * @private
     * @returns {void}
     */
    render() {
        const { invalidUserName, username } = this.state;

        let message, personIconSrc, validIconSrc, filedsetClassName;

        if (!username) {
            filedsetClassName = "sumra-input-fieldset";
            personIconSrc = personIcon;
            validIconSrc = null;
            message = null;
        } else {
            filedsetClassName = "sumra-input-fieldset available";
            personIconSrc = personOrange;

            if (invalidUserName) {
                validIconSrc = iconBlock;
                message = (
                    <div className="sumra-input-message error">
                        This username is already taken.
                    </div>
                );
            } else {
                validIconSrc = checkGreen;

                message = (
                    <div className="sumra-input-message success">
                        This username is available.
                    </div>
                );
            }
        }

        return (
            <div className="sumra-main user-signup-form authentification-form">
                <h1 className="h1-title">Enter username</h1>

                <form>
                    <fieldset className={filedsetClassName}>
                        <legend>User name</legend>

                        <img
                            className="sumra-input-fieldset-icon"
                            src={personIconSrc}
                            width="22"
                        />

                        <input
                            type="text"
                            placeholder="Enter username"
                            onChange={this._changeInput}
                        />

                        <img
                            className="sumra-input-fieldset-icon-right"
                            src={validIconSrc}
                            width="22"
                        />
                    </fieldset>

                    {message}

                    <button
                        className="sumra-Button"
                        onClick={this._submitUserForm}
                    >
                        <img
                            className="sumra-Button-icon-left"
                            src={iconEnter}
                            width="18"
                        />

                        <span>Submit</span>
                    </button>
                </form>
            </div>
        );
    }

    /**
     * Set state after changed verification code.
     *
     * @param {Event} event - The HTML Event which details the form submission.
     * @private
     * @returns {void}
     */
    _changeInput = (event) => {
        const value = event.target.value;

        this.setState({ username: value });

        /*  if (this.timerID) {
            clearTimeout(this.timerID);
        }

        this.timerID = setTimeout(() => {
            fetchValidateName(value)
                .then((response) => {
                    if (response.status == 200) {
                        this.setState({ invalidUserName: false });
                    } else {
                        this.setState({ invalidUserName: true });
                    }
                })
                .catch(console.error);
        }, 300); */
    };

    /**
     * Submit verification code.
     *
     * @param {Event} event - The HTML Event which details the form submission.
     * @protected
     * @returns {void}
     */
    _submitUserForm = async (event) => {
        if (this.state.invalidUserName) {
            return;
        }

        const response = await makeFetch(END_POINTS.REGISTRATION, {
            code: this.props.verificationCode,
            username: this.state.username,
            device_id: "SumraChatWebsiteDevice",
            app_uid: "SumraCharWebsite",
        });

        if (response.ok) {
            console.log(response);
            const json = await response.json();
            console.log("###Data### " + json.data);

            localStorage.setItem("mx_hs_url", "https://syn.sumra.net/");
            localStorage.setItem("mx_is_url", "https://syn.sumra.net/");
            localStorage.setItem("mx_device_id", "SumraChatWebsiteDevice");
            localStorage.setItem("mx_user_id", json.data.user_id);
            localStorage.setItem("mx_access_token", json.data.access_token);
            localStorage.setItem("mx_crypto_initialised", true);

            location.href = location.origin + "/#/home";
        }
    };

    /*     _redirectLogin = (username = "", password = "") => {
        this.props.setStateLogin(username, password);
        this.props.onStep(4);
    }; */
}
