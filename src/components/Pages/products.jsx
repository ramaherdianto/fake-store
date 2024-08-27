import React from 'react';
import CardProducts from '../Fragments/CardProducts';

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
    return (
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
    );
};

export default ProductsPage;
