import React, { useEffect, useState } from 'react';
import CardProducts from '../Fragments/CardProducts';
import Button from '../Elements/Button';

const products = [
    {
        id: 1,
        image: '/images/shoes-1.jpg',
        name: 'Air Jordan Chicago',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora quam
                    facere vel nesciunt tenetur, deleniti sapiente, maiores consectetur, ullam
                    temporibus dolorem! Eos, et saepe.`,
        price: 1000000,
    },
    {
        id: 2,
        image: '/images/shoes-1.jpg',
        name: 'Nike Air Max 720',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora quam
                    facere vel nesciunt tenetur.`,
        price: 2765000,
    },
    {
        id: 3,
        image: '/images/shoes-1.jpg',
        name: 'Adidas NMD Triple Black',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora quam
                    facere.`,
        price: 3500000,
    },
];

const ProductsPage = () => {
    const email = localStorage.getItem('email');

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleAddCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }
    };

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    };

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);

            setTotalPrice(sum);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    return (
        <>
            <nav className='p-5 bg-blue-500 flex items-center justify-end gap-8'>
                <h1 className='text-white font-bold'>{email}</h1>
                <Button onClick={handleLogout} className='bg-slate-800'>
                    Logout
                </Button>
            </nav>
            <section className='flex justify-center py-5'>
                <div className='w-4/6 flex flex-wrap'>
                    {products.map((product) => {
                        return (
                            <CardProducts key={product.id}>
                                <CardProducts.Header image={product.image} />
                                <CardProducts.Body name={product.name}>
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
                                <th>Id</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id);
                                return (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>
                                            Rp.{' '}
                                            {product.price.toLocaleString('id-ID', {
                                                styles: 'currency',
                                                currency: 'IDR',
                                            })}
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>
                                            Rp.{' '}
                                            {(item.qty * product.price).toLocaleString('id-ID', {
                                                styles: 'currency',
                                                currency: 'IDR',
                                            })}
                                        </td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td colSpan={4} className='font-bold'>
                                    Total Price
                                </td>
                                <td className='font-bold'>
                                    Rp.{' '}
                                    {totalPrice.toLocaleString('id-ID', {
                                        styles: 'currency',
                                        currency: 'IDR',
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
