import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import Slide1 from "../../../../res/images/sumra/slide-1-min.png";
import Slide2 from "../../../../res/images/sumra/slide-2-min.png";
import CombinedShape from "../../../../res/images/sumra/Combined Shape.svg";

// install Swiper modules

SwiperCore.use([Pagination, Autoplay]);

const WelcomeCarousel = () => {
    return (
        <Swiper
            className="swiper-container"
            grabCursor={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 30000 }}
        >
            <SwiperSlide className="swiper-slide">
                <div
                    className="sumra-wallet-slide"
                    style={{
                        // eslint-disable-next-line max-len
                        backgroundImage: `linear-gradient(180deg, rgba(29, 29, 29, 0.24) 0%, rgba(29, 29, 29, 0.33) 30.21%, rgba(10, 10, 10, 0.675) 89.58%),url(${Slide2})`,
                    }}
                >
                    <div className="sutisfied-clients">
                        <img src={CombinedShape} alt="quotes" />
                        <span>what users are saying about us</span>
                    </div>
                    <div className="sumra-welcome-testimonials ">
                        "Excellent application! It helps to stay in touch with
                        your siblings if you are abroad.
                        <br />
                        Looking forward to many more innovative features and
                        functions."
                    </div>
                    <div className="sumra-testimonials-author ">
                        Harriet Andersson
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
                <div
                    className="sumra-wallet-slide"
                    style={{
                        // eslint-disable-next-line max-len
                        backgroundImage: `linear-gradient(180deg, rgba(23, 19, 63, 0) 32.29%, rgba(20, 20, 20, 0.9) 100%),url(${Slide1})`,
                    }}
                >
                    <div className="sutisfied-clients">
                        <img src={CombinedShape} alt="quotes" />
                        <span>what users are saying about us</span>
                    </div>
                    <div className="sumra-welcome-testimonials ">
                        "The aplication is very simple, even my mom can use it
                        alone. <br /> Easy to communicate with friends all over
                        the world."
                    </div>
                    <div className="sumra-testimonials-author ">
                        Alfred Bianco
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default WelcomeCarousel;
