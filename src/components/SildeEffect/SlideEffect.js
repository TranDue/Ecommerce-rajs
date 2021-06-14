import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
const SlideEffect = () => {
    return (

        <Carousel
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
        >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn0.fahasa.com/media/wysiwyg/Thang-8-2019/Banner-T%E1%BB%95ng-PNS_1920x600.jpg"
                    alt="First slide"
                    style={{
                        zIndex: -10
                    }}
                />
                <Carousel.Caption>
                    <h3>Trải nghiệm thôi</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn0.fahasa.com/media/wysiwyg/Thang-3-2020/Banner-chinh_1920x620.jpg"
                    alt="Third slide"
                    style={{
                        zIndex: -10
                    }}
                />

                <Carousel.Caption>
                    <h3>Trải nghiệm thôi</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}
export default SlideEffect;