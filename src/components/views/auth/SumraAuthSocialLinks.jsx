import React from "react";

const SumraAuthSocialLinks = () => {
    return (
        <div>
            <h1 class="h1-title">Welcome to Sumra Chat</h1>
            <h2 class="h2-subtitle">Please Login or Sign Up</h2>
            <section>
                <h3 class="h3-label">Sign up with:</h3>

                <ul class="sumra-social-links">
                    <li>
                        {" "}
                        <li onClick={this._goToVeryfycationCodePage}>
                            <a
                                href="tg://resolve?domain=SumraBot"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="./vector-icons/Telegram.svg"
                                    width="46"
                                    alt="Telegram"
                                />
                            </a>
                        </li>
                    </li>
                    <li onClick={this._goToVeryfycationCodePage}>
                        <a
                            href="viber://pa?ChatURI=SumraBot"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="./vector-icons/Viber.svg"
                                width="46"
                                alt="Viber"
                            />
                        </a>
                    </li>
                    <li onClick={this._goToVeryfycationCodePage}>
                        <a
                            href="https://m.me/SumraBot"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="./vector-icons/Messanger.svg"
                                width="46"
                                alt="Messanger"
                            />
                        </a>
                    </li>
                    <li onClick={this._goToVeryfycationCodePage}>
                        <a
                            href="https://wa.me/SumraBot"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="./vector-icons/WhatsApp.svg"
                                width="46"
                                alt="WhatsApp"
                            />
                        </a>
                    </li>
                    <li onClick={this._goToVeryfycationCodePage}>
                        <a href="#" target="_blank" rel="noreferrer">
                            <img
                                src="./vector-icons/Signal.svg"
                                width="46"
                                alt="Signal"
                            />
                        </a>
                    </li>
                </ul>
            </section>
            <div class="sumra-line"></div>
            <section>
                <h3 class="h3-label">Sign up with:</h3>
                <form>
                    <fieldset class="sumra-phone-fieldset">
                        <legend>Your mobile phone number</legend>

                        <PhoneInput
                            flags="{flags}"
                            placeholder="Enter phone number"
                            value="{this.state.phone}"
                            onChange="{this._changePhoneNumber}"
                        />

                        <div
                            class="sumra-phone-send"
                            onClick="{this._submitPhoneNumber}"
                        >
                            <img src="./vector-icons/send.svg" />
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default SumraAuthSocialLinks;
