import React, { useEffect, useRef, useState } from 'react';
import CardProducts from '../components/Fragments/CardProducts';
import Button from '../components/Elements/Button';
import { getProducts } from '../services/products.services';
import { getUsername } from '../services/auth.services';

const ProductsPage = () => {
    const email = localStorage.getItem('email');

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [username, setUsername] = useState('');

    const handleAddCart = (id) => {
        if (products.length > 0 && cart.find((item) => item.id === id)) {
            setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }
    };

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUsername(getUsername(token));
        } else {
            window.location.href = 'login';
        }
    }, []);

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);

            setTotalPrice(sum);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, products]);

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = 'table-row';
        } else {
            totalPriceRef.current.style.display = 'none';
        }
    }, [cart]);

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <>
            <nav className='p-5 bg-blue-500 flex items-center justify-end gap-8'>
                <h1 className='text-white font-bold'>{username}</h1>
                <Button onClick={handleLogout} className='bg-slate-800'>
                    Logout
                </Button>
            </nav>
            <section className='flex justify-center py-5'>
                <div className='w-4/6 flex flex-wrap'>
                    {products.length > 0 &&
                        products.map((product) => {
                            return (
                                <CardProducts key={product.id}>
                                    <CardProducts.Header image={product.image} />
                                    <CardProducts.Body name={product.title}>
                                        {product.description}
                                    </CardProducts.Body>
                                    <CardProducts.Footer
                                        price={product.price}
                                        handleAddCart={handleAddCart}
                                        id={product.id}
                                    />
                                </CardProducts>
                            );
                        })}
                </div>
                <div className='w-2/6'>
                    <h1 className='text-3xl text-blue-500 font-bold px-5'>Cart</h1>
                    <table className='text-left table-auto border-separate border-spacing-x-5 mt-5'>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 &&
                                cart.map((item) => {
                                    const product = products.find(
                                        (product) => product.id === item.id
                                    );
                                    return (
                                        <tr key={product.id}>
                                            <td>
                                                {product.title.length >= 30
                                                    ? `${product.title.substring(0, 30)}...`
                                                    : product.title}
                                            </td>
                                            <td>
                                                $.{' '}
                                                {product.price.toLocaleString('en-EN', {
                                                    styles: 'currency',
                                                    currency: 'USD',
                                                })}
                                            </td>
                                            <td>{item.qty}</td>
                                            <td>
                                                $.{' '}
                                                {(item.qty * product.price).toLocaleString(
                                                    'en-EN',
                                                    {
                                                        styles: 'currency',
                                                        currency: 'USD',
                                                    }
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3} className='font-bold'>
                                    Total Price
                                </td>
                                <td className='font-bold'>
                                    $.{' '}
                                    {totalPrice.toLocaleString('en-EN', {
                                        styles: 'currency',
                                        currency: 'USD',
                                    })}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default ProductsPage;
