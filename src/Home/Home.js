import React from 'react';

import Banner from '../Component/MainPages/Banner/Banner'

import Animation from '../Component/MainPages/Animation/Animation'
import NextShipment from '../Component/MainPages/NextShipment/NextShipment'
import Items from '../Component/MainPages/Items/Items';
import { Spinner } from 'react-bootstrap';


const Home = () => {
    let loading;

    if (loading) {
        return <Spinner animation="grow" variant="dark" />;
    }
    return (
        <div>

            <Banner></Banner>
            <Items></Items>
            <Animation></Animation>
            <NextShipment></NextShipment>
        </div>
    );
};

export default Home;