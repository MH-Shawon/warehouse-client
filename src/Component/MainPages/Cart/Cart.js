import axios from "axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Swal from "sweetalert2";

const Cart = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `https://ware-house-server-liart.vercel.app/orders?email=${email}`;
      console.log(localStorage.getItem("accessToken"));
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user, navigate]);

  const handleOrderDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const url = `https://ware-house-server-liart.vercel.app/order/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const reamaining = orders.filter((order) => order._id !== id);
            setOrders(reamaining);
          });
      }
    });
  };

  return (
    <div className="container">
      <h1 className="text-center text-white bg-info w-50 mx-auto p-2 m-2 rounded">
        Your orders:{orders.length}
      </h1>
      <table className="mx-auto">
        {orders.map((order) => (
          <tbody>
            <tr key={order._id}>
              <th scope="row">{order.phones}</th>

              <td>{order.price}</td>

              <td onClick={() => handleOrderDelete(order?._id)}>
                <button className="p-2">X</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Cart;
