import Telegram from "../../../../res/images/sumra/messengers/Telegram.svg";
import Viber from "../../../../res/images/sumra/messengers/Viber.svg";
import Messanger from "../../../../res/images/sumra/messengers/Messanger.svg";
import WhatsApp from "../../../../res/images/sumra/messengers/WhatsApp.svg";
import Signal from "../../../../res/images/sumra/messengers/Signal.svg";
import Line from "../../../../res/images/sumra/messengers/Line.svg";

const socialLinks = [
    {
        image: Telegram,
        href: "https://t.me/sumrabot",
        hrefMobile: "tg://resolve?domain=SumraBot",
    },
    {
        image: Messanger,
        href: "https://m.me/SumraBot",
        hrefMobile: "https://m.me/SumraBot",
    },
    {
        image: WhatsApp,
        href: "https://wa.me/SumraBot",
        hrefMobile: "https://wa.me/SumraBot",
    },
    {
        image: Signal,
        href: "#",
        hrefMobile: "#",
    },
    {
        image: Viber,
        href: "viber://pa?ChatURI=SumraBot",
        hrefMobile: "viber://pa?ChatURI=SumraBot",
    },
    {
        image: Line,
        href: "#",
        hrefMobile: "#",
    },
];
export default socialLinks;
