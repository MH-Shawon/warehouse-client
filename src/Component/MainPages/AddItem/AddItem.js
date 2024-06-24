import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://ware-house-server-liart.vercel.app/phones`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (data.insertedId) {
          toast("This item has been added successfully!");
        }
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please add a service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Item Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-2"
          placeholder="Item Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input
          className="mb-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-2"
          placeholder="Supplier Name"
          type="text"
          {...register("supplierName")}
        />
        <input type="submit" value="Add Service" />
      </form>
    </div>

    // <div className="my-5">
    //   <div className="shadow-lg w-75 mx-auto p-3">
    //     <h1 className="my-2 text-uppercase text-center text-primary fw-bold">
    //       Add New Item
    //     </h1>
    //     <div className="w-75 adding-form mx-auto mt-4 ">
    //       <Form onSubmit={handleItems}>
    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //           <Form.Control
    //             type="name"
    //             name="name"
    //             placeholder="Item Name"
    //             required
    //           />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //           <Form.Control
    //             type="number"
    //             name="price"
    //             placeholder="Item Price"
    //             required
    //           />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //           <Form.Control
    //             type="text"
    //             name="img"
    //             placeholder="Image URl"
    //             required
    //           />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //           <Form.Control
    //             as="textarea"
    //             name="description"
    //             row="4"
    //             placeholder="A short description of Item"
    //             required
    //           />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //           <Form.Control
    //             type="number"
    //             name="quantity"
    //             placeholder="Quantity"
    //             required
    //           />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //           <Form.Control
    //             type="text"
    //             name="supplierName"
    //             placeholder="Supplier Name"
    //             required
    //           />
    //         </Form.Group>
    //         <Button className="btn btn-primary mb-3" type="submit">
    //           Add This Item
    //         </Button>
    //       </Form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AddItem;
