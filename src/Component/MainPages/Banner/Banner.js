import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Iphone from '../../../Images/Banner/Iphone.jpg'
import OnePlus from '../../../Images/Banner/oneplus.jpg'
import Gpixel from '../../../Images/Banner/g-pixel.jpg'
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
                <Carousel.Caption>
                    <h5 className="text-white bg-dark p-1 rounded">IPHONE</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={OnePlus} alt="Second slide" />
                <Carousel.Caption>
                    <h5 className="text-white bg-dark p-1 rounded">OnePLus</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Gpixel} alt="Third slide" />
                <Carousel.Caption>
                    <h5 className="text-white bg-dark p-1 rounded">Googel Pixel</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
        </div>
    );
};

export default Banner;