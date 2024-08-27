import React from 'react';
import Button from '../Elements/Button';

const CardProducts = (props) => {
    const { children } = props;

    return (
        <article className='w-full max-w-sm bg-slate-800 border border-slate-700 rounded-lg shadow p-8 mx-2 flex flex-col justify-between'>
            {children}
        </article>
    );
};

const Header = (props) => {
    const { image } = props;

    return (
        <a className=''>
            <img src={image} alt='Product' className='rounded-lg' />
        </a>
    );
};

const Body = (props) => {
    const { name, children } = props;

    return (
        <div className='py-5 h-full'>
            <a href=''>
                <h2 className='text-xl font-semibold tracking-tight text-white'>{name}</h2>
                <p className='text-sm text-white mt-2'>{children}</p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const { price } = props;

    return (
        <div className='flex justify-between items-center'>
            <span className='text-xl font-bold text-white'>{price}</span>
            <Button className='bg-blue-500'>Add to Cart</Button>
        </div>
    );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
