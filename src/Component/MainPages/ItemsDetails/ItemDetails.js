import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {

    const { id } = useParams();
  const [inventory, setInventory] = useState({});
  const { _id, name, img, price, description, supplierName } = inventory;

  let { quantity } = inventory;



  const handleDelivered = (id) => {
    if (quantity > 1) {
      quantity = quantity - 1;
      const updatedQuantity = { quantity };
      inventory.quantity = quantity;







    };

  };

    const handleAdd = (event) => {
        event.preventDefault();
        console.log(event.target.number)








    };



    return (
        <div className="m-3 p-3 text-start">
      <div className="d-flex p-2">
        <div className="card w-50 shadow-lg border-0 p-3">
          <h1 className="text-center text-danger mb-5">Item Details</h1>
          <div className="d-flex">
            <div>
              <img
                src={img}
                height={200}
                className="card-img-top w-100 mx-auto"
                alt="..."
              />
            </div>
            <div className="p-3">
              <h4 className="card-title">Brand: {name}</h4>
              <h4>Price: ${price}</h4>
              <h6 className="card-title">Supplier: {supplierName}</h6>
              <h4 className="fw-bold text-primary">Quantity: {quantity}</h4>
            </div>
          </div>
          <div className="card-body text-center">
            <p className="card-text">{description}</p>
            <button
              onClick={() => handleDelivered(_id)}
              className="btn btn-primary mt-3"
            >
              Delivered{" "}
            </button>
          </div>
        </div>
        <div className="w-50 mx-auto ms-2 border-0">
          <h1 className="text-center text-info">Re-Stock Item</h1>
          <Form onSubmit={handleAdd} className="row g-3">
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