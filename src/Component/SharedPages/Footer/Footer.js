import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-dark  text-white py-4'>
            <p  className='m-0 text-center'>Copywrite © {year} Warehouse by Mh Shawon
            </p>
        </footer>
    );
};

export default Footer;