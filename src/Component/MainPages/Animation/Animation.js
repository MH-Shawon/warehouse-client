import React from 'react';
import './Animation.css'
import pixel from '../../../Images/Items/pixel2.jpg'
import samsung from '../../../Images/Items/samsung.jpg'
import asus from '../../../Images/Items/asus2.jpg'
import Iphone from '../../../Images/Items/Iphone2.jpg'
const Animation = () => {
    return (
        <div className='mt-3'>
        <h1 className="text-center fw-bold text-white bg-info p-2"> &#9830; Most Stocked Product &#9830; </h1>
      
      <div  className="buttom-img" >
        <img src={pixel} alt="" />
        <img src={samsung} alt="" />
        <img src={asus} alt="" />
        <img src={Iphone} alt="" />
      
      </div>
          </div>
    );
};

export default Animation;