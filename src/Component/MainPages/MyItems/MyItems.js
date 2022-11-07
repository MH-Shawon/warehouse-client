import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyItems = () => {
    const [user, loading] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();






  if (loading) {
    return <Spinner animation="grow" variant="dark" />;
  }

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
  };
    return (
        <div className="container">
        <h1 className="text-center text-white bg-info w-50 mx-auto p-2 m-2 rounded">
          My Items : {items.length}
        </h1>
        <table className="table border border-dark border-3">
          <thead>
            <tr>
              {/* <th scope="col">Serial No.</th> */}
              <th scope="col">Brand Name</th>
              <th scope="col">Price($)</th>
              <th scope="col">Quantity</th>
              <th scope="col">Supplier Name</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          {items.map((item) => (
            <tbody>
              <tr key={item._id}>
                <th scope="row">{item.name}</th>
  
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.supplierName}</td>
  
                <td onClick={() => handleDelete(item?._id)}>
                  <button className="border-0 bg-primary rounded text-white fw-bold p-2">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  };
    


export default MyItems;