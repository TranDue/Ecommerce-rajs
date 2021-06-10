import React, { Component } from 'react';

import { Carousel } from 'react-bootstrap'

class SlideEffect extends Component {
    render() {
        return (

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn0.fahasa.com/media/wysiwyg/Thang-8-2019/Banner-T%E1%BB%95ng-PNS_1920x600.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Trải nghiệm thôi</h3>
                        <p>Sách sẽ đưa các bạn đến những kiến thức tuyệt vời</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn0.fahasa.com/media/wysiwyg/Thang-3-2020/Banner-chinh_1920x620.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Trải nghiệm thôi</h3>
                        <p>Sách sẽ đưa các bạn đến những kiến thức tuyệt vời</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        );
    }
}
export default SlideEffect;