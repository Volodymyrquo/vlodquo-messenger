import React, { Component } from "react";
import { fetchAuth } from "../functions";
import jwt_decode from "jwt-decode";
import logout from "../../../../../res/images/sumra/icon-logout.svg";
import lock from "../../../../../res/images/sumra/icon-lock.svg";
import person from "../../../../../res/images/sumra/icon-person.svg";

/**
 * Sumra: Login form
 *
 * @extends Component
 */
export default class SumraLoginForm extends Component {
    static replaces = "LoginComponent";
    /**
     * constructor
     */
    constructor(props) {
        super(props);

        this.state = {
            username: "VOLODYMYRB",
            password: "vSi0PcykN5",
            error: false,
        };
    }

    /**
     * render
     */

    render() {
        const { error } = this.state;
        let { className } = this.props;

        className += " login-form";
        return (
            <div className={className}>
                <h1 className="h1-title">Login with Sumra ID</h1>

                <form onSubmit={this._onFormSubmit}>
                    <fieldset className="sumra-input-fieldset">
                        <legend>User name</legend>

                        <img
                            className="sumra-input-fieldset-icon"
                            src={person}
                        />

                        <input
                            type="text"
                            placeholder="Enter username"
                            value={this.state.username}
                            onChange={this._changeUserName}
                        />
                    </fieldset>

                    <fieldset className="sumra-input-fieldset">
                        <legend>Password</legend>

                        <img className="sumra-input-fieldset-icon" src={lock} />

                        <input
                            type="password"
                            placeholder="Enter password"
                            value={this.state.password}
                            onChange={this._changePassword}
                        />
                    </fieldset>

                    {error && (
                        <div className="sumra-input-message error">
                            Username or password does not match
                        </div>
                    )}

                    <button className="sumra-Button" type="submit">
                        <img
                            className="sumra-Button-icon-left"
                            src={logout}
                            width="18"
                        />
                        <span>Sign in</span>
                    </button>

                    <div className="sumra-link-forgotPassword">
                        Forgot password?
                    </div>
                    <div className="sumra-link-createUser">
                        New user?
                        <span onClick={this._goToRegistration}>
                            Create a Sumra ID
                        </span>
                    </div>
                </form>
            </div>
        );
    }

    /**
     * Handler input user name
     *
     * @param {Event} event - The HTML Event which details the form submission.
     * @private
     * @returns {void}
     */
    _changeUserName = (event) => {
        this.setState({ username: event.target.value });
    };

    /**
     * Handler input password
     *
     * @param {Event} event - The HTML Event which details the form submission.
     * @private
     * @returns {void}
     */
    _changePassword = (event) => {
        this.setState({ password: event.target.value });
    };

    /**
     * Prevents submission of the form and sign up user.
     *
     * @param {Event} event - The HTML Event which details the form submission.
     * @private
     * @returns {void}
     */
    _onFormSubmit = (event) => {
        event.preventDefault();

        if (this.state.username && this.state.password) {
            this._signIn();
        }
    };

    /**
     * Sign in
     * @private
     * @returns {void}
     */
    _signIn = () => {
        const { username, password } = this.state;
        const { room } = this.props;

        const loginData = {
            type: "m.login.password",
            identifier: {
                type: "m.id.user",
                user: "www111",
            },
            password: "vSi0PcykN5",
        };

        fetch("https://syn.sumra.net/_matrix/client/r0/login", {
            body: JSON.stringify(loginData),
            method: "POST",
            // mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                console.log("This is response from login: " + response);
                return response.json();
            })
            .then((result) => {
                const { access_token } = result;
                console.log("This is result from login: " + result);
                localStorage.setItem("access_token", access_token);
                location.href = `${location.origin}/#/home`;
            });

        /*   fetchAuth({ username, password })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    return response.json();
                }
                throw new Error();
            })
            .then((result) => {
                const {
                    access_token_sso,
                    meet_token,
                    expires_in,
                    refresh_token,
                    token_type,
                } = result;

                const { location, localStorage } = window; */

        /*  const decoded = jwt_decode(meet_token);

                if (
                    decoded &&
                    decoded.context &&
                    decoded.context.user &&
                    decoded.context.user.name
                ) {
                    localStorage.setItem(
                        "user_name",
                        decoded.context.user.name
                    );
                } */
        /* 
                localStorage.setItem("access_token", access_token_sso);
                const loginData = {
                    type: "m.login.token",
                    token: access_token_sso,
                }; */

        /*   fetch("https://syn.sumra.net/_matrix/client/r0/login", {
                    body: JSON.stringify(loginData),
                    method: "POST",
                    // mode: 'no-cors',
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => {
                        console.log("This is response from login: " + response);
                        return response.json();
                    })
                    .then((result) => {
                        const { access_token } = result;
                        console.log("This is result from login: " + result);
                        localStorage.setItem("access_token", access_token);
                        location.href = `${location.origin}/#/home`;
                    }); */
        /*   })
            .catch((err) => {
                console.error(err);
                this.setState({ error: true });
            }); */
    };

    /**
     * Back to the first step, registration
     * @private
     * @returns {void}
     */
    _goToRegistration = () => {
        this.props.onStep(1);
    };
}
