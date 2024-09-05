import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import Button from '../Elements/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
import { openCart } from '../../redux/slices/cartSlice';
import { DarkMode } from '../../context/darkMode';
import { useTotalPrice } from '../../hooks/useTotalPrice';

export const Navbar = () => {
    const username = useLogin();
    const cart = useSelector((state) => state.cart.data);
    const [totalCart, setTotalCart] = useState(0);
    const dispatch = useDispatch();
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

    const handleDarkMode = () => {
        setIsDarkMode((isDarkMode) => !isDarkMode);
    };

    const handleOpenCart = () => {
        dispatch(openCart());
    };

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <nav className='p-5 w-full bg-blue-500'>
            <div className='flex flex-col sm:flex-row max-w-7xl w-full items-center justify-between mx-auto gap-8'>
                <div className='flex items-center gap-4'>
                    <Link to='/profile' className='text-white'>
                        Profile
                    </Link>
                    <Link to='/products' className='text-white'>
                        Products
                    </Link>
                </div>
                <div className='flex items-center gap-4'>
                    <div
                        onClick={handleOpenCart}
                        className='flex items-center p-2 cursor-pointer relative'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            className='fill-white'
                        >
                            <path d='M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z'></path>
                        </svg>
                        <div className='text-[10px] text-white bg-red-500 flex items-center justify-center w-[18px] h-[18px] rounded-full absolute top-0 right-0'>
                            {totalCart}
                        </div>
                    </div>
                    <Button onClick={handleDarkMode} className='px-0 py-0'>
                        {isDarkMode ? (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                className='fill-blue-900'
                            >
                                <path d='M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z'></path>
                            </svg>
                        ) : (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                className='fill-yellow-400'
                            >
                                <path d='M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z'></path>
                            </svg>
                        )}
                    </Button>
                    <h1 className='text-white font-bold'>{username}</h1>
                    <Button onClick={handleLogout} className='bg-slate-800'>
                        Logout
                    </Button>
                </div>
            </div>
        </nav>
    );
};
