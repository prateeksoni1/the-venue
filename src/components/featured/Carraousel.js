import React from 'react';
import Slider from 'react-slick';
import pic1 from '../../resources/images/pic1.jpg';
import pic2 from '../../resources/images/pic2.jpg';
import pic3 from '../../resources/images/pic3.jpg';

const Carraousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500
    }

    return (
        <div
            className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: 'hidden',
            }}
        >

            <Slider {...settings}>

                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${pic1})`,
                            height: `${window.innerHeight}px`
                        }}
                    >

                    </div>

                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${pic2})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            background: `url(${pic3})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>
            </Slider>

        </div>
    );
}

export default Carraousel;