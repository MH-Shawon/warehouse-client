import axios from 'axios';
import React from 'react';

import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import auth from '../../firebase.init';
import useOrderDetail from '../Hooks/useOrder';



const PlaceOrder = () => {
    const { phoneId } = useParams();
    const [phones] = useOrderDetail(phoneId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault()
        const order = {
            email: user.email,
            phones: phones.name,
            phoneId: phoneId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        
        axios.post('https://ware-house-server-smoky.vercel.app/order', order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast.success("Successfully added to the cart !");
                event.target.reset();
            }
        })
    }


        return (
            <div>
                <h2>Place Order Here</h2>
                <Form className='w-50 mx-auto' onSubmit={handlePlaceOrder}>
                    <Form.Group className="mb-2" controlId="formGroupNamw">
                        <Form.Control type="name" value={user?.displayName} placeholder="Name" required readOnly disabled />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formGroupEmail">
                        <Form.Control type="email" name="email" value={user?.email} placeholder="Enter email" required readOnly disabled />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formGroupService" >
                        <Form.Control type="service" value={phones.name} placeholder="Service" required readOnly disabled />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formGroupAddress" >
                        <Form.Control type="address" name="address" placeholder="Address" required autoComplete= "off" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formGroupPhone" >
                        <Form.Control type="phone" name="phone" placeholder="Phone" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add to cart
                    </Button>
                </Form>
            </div>
        );
    };

    export default PlaceOrder;