import React, { useState } from 'react';
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {

    const { phoneId } = useParams();
  const [phones, setphones] = useState({});

  useEffect(()=>{
    const url = `http://localhost:5000/phones/${phoneId}`;
    fetch(url)
    .then(res=>res.json())
    .then(data => setphones(data))
  },[])
  



    return (
        <div className="m-3 p-3 text-start">
      <div className="d-flex p-2">
        <div className="card w-50 shadow-lg border-0 p-3">
          <h1 className="text-center text-danger mb-5">Item Details</h1>
          <div className="d-flex">
            <div>
              <img
                src={phones.img}
                height={200}
                className="card-img-top w-100 mx-auto"
                alt="..."
              />
            </div>
            <div className="p-3">
              <h4 className="card-title">Brand: {phones.name}</h4>
              <h4>Price: ${phones.price}</h4>
              <h6 className="card-title">Supplier: {phones.supplierName}</h6>
              <h4 className="fw-bold text-primary">Quantity: {phones.quantity}</h4>
            </div>
          </div>
          <div className="card-body text-center">
            <p className="card-text">{phones.description}</p>
            <button
              // onClick={() => handleDelivered(_id)}
              className="btn btn-primary mt-3"
            >
              Delivered{" "}
            </button>
          </div>
        </div>
        <div className="w-50 mx-auto ms-2 border-0">
          <h1 className="text-center text-info">Re-Stock Item</h1>
          <Form  className="row g-3">
            <div className=" w-50 mx-auto">
              <input
                type="number"
                className="form-control"
                name="number"
                placeholder="Input Number of Quantity"
              />
              <button type="submit" className="btn btn-primary mt-3">
                Add Quantity
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;