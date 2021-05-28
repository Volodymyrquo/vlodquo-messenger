import React, { Component } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { makeFetch, makeid } from "../functions";
import { isMobile } from "react-device-detect";
import socialLinks from "../socialLinks";
import send from "../../../../../res/images/sumra/send.svg";
import user from "../../../../../res/images/sumra/user.svg";
import benefits from "../../../../../res/images/sumra/Benefits_draft.svg";
import WelcomeAuthPage from "../WelcomeAuthPage";

/**
 * Sumra: First form
 *
 * @extends Component
 */
export default class SumraFirstForm extends Component {
    /**
     * Initializes a new {@code FirstForm} instance.
     *
     * @param {Props} props - The React {@code Component} props to initialize
     * the new {@code FirstForm} instance with.
     */
    constructor(props) {
        super(props);

        this.state = {
            phone: "",
        };
    }

    /**
     * Render
     *
     * @private
     * @returns {void}
     */
    render() {
        const {
            className,

            socialLinkWidth,
            targetBlank,
        } = this.props;

        const links = socialLinks.map((v, index) => {
            let href = "";
            if (isMobile) {
                href = v.hrefMobile;
            } else {
                href = v.href;
            }
            return (
                <li key={index} onClick={this._goToVeryfycationCodePage}>
                    <a href={href} target="_blank" rel="noreferrer">
                        <img src={v.image} width={46} alt="social links" />
                    </a>
                </li>
            );
        });

        return (
            <WelcomeAuthPage>
                <h1 className="h1-title">Wellcome to Sumra Chat</h1>
                <h2 className="h2-subtitle">Please Login or Sign Up</h2>
                <section>
                    <h3 className="h3-label">Sign up with:</h3>

                    <ul className="sumra-social-links">{links}</ul>
                </section>
                <div className="sumra-line"></div>
                <section>
                    <h3 className="h3-label">Sign up with:</h3>
                    <form>
                        <fieldset className="sumra-phone-fieldset">
                            <legend>Your mobile phone number</legend>

                            <PhoneInput
                                flags={flags}
                                placeholder="Enter phone number"
                                value={this.state.phone}
                                onChange={this._changePhoneNumber}
                            />

                            <div
                                className="sumra-phone-send"
                                onClick={this._submitPhoneNumber}
                            >
                                <img src={send} />
                            </div>
                        </fieldset>
                    </form>
                </section>
                <div className="sumra-line"></div>
                <div className="sumra-Button" onClick={this._goToLoginPage}>
                    <img src={user} width="14" height="17" />
                    <span>Login with Sumra ID</span>
                </div>

                {/* <section class = 'sumra-Benefits'>
                    <div className = 'sumra-Benefit-text'>
                        <b>Earn Unlimited</b> DIVITS for your time and activities on <b>Sumra Chat</b> 
                    </div>
                    <div className = 'sumra-Benefit-text'>
                        <b>Exchange & Redeem</b> DIVITS.
                    </div>
                </section> */}
                <img className="sumra-Benefits-draft" src={benefits} />
            </WelcomeAuthPage>
        );
    }

    /**
     * Set state after changed phone number.
     *
     * @param {String} phone - The HTML Event which details the form submission.
     * @private
     * @returns {void}
     */
    _changePhoneNumber = (phone) => {
        this.setState({ phone });
    };

    /**
     * _goToLoginPage
     */
    _goToLoginPage = () => {
        this.props.onStep(4);
    };

    /**
     * _goToVeryfycationCodePage
     */
    _goToVeryfycationCodePage = () => {
        this.props.onStep(2);
    };

    /**
     * Submit form value (phone number).
     *
     * @param {Event} event - The HTML Event which details the form submission.
     * @private
     * @returns {void}
     */
    _submitPhoneNumber = (event) => {
        event.preventDefault();

        let { phone } = this.state;

        if (!phone) {
            return;
        }

        phone = phone.replace("+", "");

        makeFetch(END_POINTS.SEND_CODE, {
            phone_number: phone,
            device_id: makeid(20),
        }).then(
            (response) => console.log,
            (error) => console.error
        );
        this.props.onStep(2);
    };
}
