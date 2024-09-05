import React, { useContext } from 'react';
import Button from '../Elements/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { DarkMode } from '../../context/darkMode';

const CardProducts = (props) => {
    const { isDarkMode } = useContext(DarkMode);
    const { children } = props;

    return (
        <article
            className={`w-[250px] ${
                isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-300'
            } max-w-xs border rounded-lg shadow p-4 m-2 flex flex-col justify-between`}
        >
            {children}
        </article>
    );
};

const Header = (props) => {
    const { image, id } = props;

    return (
        <Link to={`/product/${id}`}>
            <img
                src={image}
                alt='Product'
                className='rounded-lg h-40 w-full object-cover object-center aspect-square'
            />
        </Link>
    );
};

const Body = (props) => {
    const { name, children } = props;
    const { isDarkMode } = useContext(DarkMode);

    return (
        <div className='py-5 h-full'>
            <a href=''>
                <h2
                    className={`text-sm font-semibold tracking-tight ${
                        isDarkMode ? 'text-white' : 'text-slate-800'
                    }`}
                >
                    {name.length >= 20 ? `${name.substring(0, 20)}...` : name}
                </h2>
                <p className={`text-xs mt-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {children.length >= 45 ? `${children.substring(0, 45)}...` : children}
                </p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const { price, id } = props;
    const dispatch = useDispatch();

    return (
        <div className='flex justify-between items-center'>
            <span className='text-sm font-bold text-slate-800'>
                $. {price.toLocaleString('en-EN', { styles: 'currency', currency: 'USD' })}
            </span>
            <Button
                className='bg-blue-500'
                type='button'
                onClick={() => dispatch(addToCart({ id, qty: 1 }))}
            >
                Add to Cart
            </Button>
        </div>
    );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
