import React from 'react';
import pixel2 from '../../../Images/Items/pixel2.jpg'
const NextShipment = () => {
    return (
        <div>
      <h1 className="mt-5 mb-0 p-2 text-center text-white bg-info fw-bold">
        Upcoming Items
      </h1>
      <div className="w-100 border-0">
        <div className="row g-0">
          <div className="col-md-4 p-3 shadow-lg">
            <img src={pixel2} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-center">Google Pixel 7Pro</h2>
              <h5 className="text-center">Quantity: <span className="text-danger">Not Available Now</span> </h5>
              <p className="card-text text-start w-75 mx-auto">
                The MacRumors guide to upcoming products is designed to provide
                an overview of everything that we're expecting to see from
                Apple, both in the near and more distant future. Dates listed
                are not always concrete, but are based on the most recent rumors
                and information that we have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default NextShipment;