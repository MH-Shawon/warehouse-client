import React from 'react';

import Banner from '../Component/MainPages/Banner/Banner'

import Animation from '../Component/MainPages/Animation/Animation'
import NextShipment from '../Component/MainPages/NextShipment/NextShipment'
import Items from '../Component/MainPages/Items/Items';
const Home = () => {
    return (
        <div>
            <h3>Welcodme to my WareHouse</h3>
            <Banner></Banner>
            <Items></Items>
            <Animation></Animation>
            <NextShipment></NextShipment>
        </div>
    );
};

export default Home;