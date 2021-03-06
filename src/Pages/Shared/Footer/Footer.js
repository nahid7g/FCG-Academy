import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='fixed-bottom'>
            <p className='bg-dark text-white py-2 my-0 text-center'>&copy;{year} || All rights reserved by FCG Academy</p>
        </div>
    );
};

export default Footer;