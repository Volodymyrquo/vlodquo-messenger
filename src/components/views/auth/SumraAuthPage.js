/*
Copyright 2019, 2020 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";
import "./SumraAuthPage.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";
import Slide1 from "../../../../res/images/sumra/slide-1-min.png";
import Slide2 from "../../../../res/images/sumra/slide-2-min.png";

// install Swiper modules

SwiperCore.use([Pagination]);
export default class AuthPage extends React.PureComponent {
    static replaces = "AuthPage";

    // cache the url as a static to prevent it changing without refreshing
    render() {
        return (
            <>
                <div className="sumra-welcome-carousel">
                    <Swiper
                        pagination={true}
                        className="swiper-container"
                        grabCursor={true}
                    >
                        <SwiperSlide className="swiper-slide">
                            <div
                                className="sumra-wallet-slide"
                                style={{
                                    // eslint-disable-next-line max-len
                                    backgroundImage: `linear-gradient(rgba(28, 25, 57, 0.3),rgba(28, 25, 57, 0.3)),url(${Slide1})`,
                                }}
                            >
                                <div className="sutisfied-clients">
                                    what users are saying about us
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <div
                                className="sumra-wallet-slide"
                                style={{
                                    // eslint-disable-next-line max-len
                                    backgroundImage: `linear-gradient(rgba(28, 25, 57, 0.3),rgba(28, 25, 57, 0.3)),url(${Slide2})`,
                                }}
                            >
                                Slider Two
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <main className="sumra-welcome-main">
                    {this.props.children}
                </main>
            </>
        );
    }
}
