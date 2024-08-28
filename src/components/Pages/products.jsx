import React from 'react';
import CardProducts from '../Fragments/CardProducts';
import Button from '../Elements/Button';

const products = [
    {
        id: Math.floor(Math.random() * new Date()),
        image: '/images/shoes-1.jpg',
        name: 'Air Jordan Chicago',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora quam
                    facere vel nesciunt tenetur, deleniti sapiente, maiores consectetur, ullam
                    temporibus dolorem! Eos, et saepe.`,
        price: 'Rp 1.000.000',
    },
    {
        id: Math.floor(Math.random() * new Date()),
        image: '/images/shoes-1.jpg',
        name: 'Nike Air Max 720',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora quam
                    facere vel nesciunt tenetur.`,
        price: 'Rp 2.765.000',
    },
    {
        id: Math.floor(Math.random() * new Date()),
        image: '/images/shoes-1.jpg',
        name: 'Adidas NMD Triple Black',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora quam
                    facere.`,
        price: 'Rp 3.500.000',
    },
];

const ProductsPage = () => {
    const email = localStorage.getItem('email');

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href = '/login';
    };

    return (
        <>
            <nav className='p-5 bg-blue-500 flex items-center justify-end gap-8'>
                <h1 className='text-white font-bold'>{email}</h1>
                <Button onClick={handleLogout} className='bg-slate-800'>
                    Logout
                </Button>
            </nav>
            <section className='flex justify-center py-5'>
                {products.map((product) => {
                    return (
                        <CardProducts key={product.id}>
                            <CardProducts.Header image={product.image} />
                            <CardProducts.Body name={product.name}>
                                {product.description}
                            </CardProducts.Body>
                            <CardProducts.Footer price={product.price} />
                        </CardProducts>
                    );
                })}
            </section>
        </>
    );
};

export default ProductsPage;
