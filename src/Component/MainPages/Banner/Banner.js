import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Iphone from '../../../Images/Banner/banner-products.png'

import Gpixel from '../../../Images/Banner/banner.jpg'
const Banner = () => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Iphone} alt="First slide" />

                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Gpixel} alt="Third slide" />

                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;