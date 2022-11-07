import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleItems = (event) => {
        event.preventDefault();
    
    const name = event.target.name.value;
    const price = event.target.price.value;
    const img = event.target.img.value;
    const description = event.target.description.value;
    const quantity = event.target.quantity.value;
    const supplierName = event.target.supplierName.value;
    const email = user?.email;

    const item = {
        name: name,
        price: price,
        img: img,
        description,
        quantity,
        supplierName: supplierName,
        email,
      };

         //
        //  post method   // 


      event.target.reset();
    }
    

    return (
         <div className="my-5">
      <div className="shadow-lg w-75 mx-auto p-3">
        <h1 className="my-2 text-uppercase text-center text-primary fw-bold">
          Add New Item
        </h1>
        <div className="w-75 adding-form mx-auto mt-4 ">
          <Form onSubmit={handleItems}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="name"
                name="name"
                placeholder="Item Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="number"
                name="price"
                placeholder="Item Price"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                name="img"
                placeholder="Image URl"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                as="textarea"
                name="description"
                row="4"
                placeholder="A short description of Item"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="number"
                name="quantity"
                placeholder="Quantity"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                name="supplierName"
                placeholder="Supplier Name"
                required
              />
            </Form.Group>
            <Button className="btn btn-primary mb-3" type="submit">
              Add This Item
            </Button>
          </Form>
        </div>
      </div>
    </div>
    );
};

export default AddItem;