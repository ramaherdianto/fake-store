import React, { useEffect, useState } from 'react';
import CardProducts from '../components/Fragments/CardProducts';
import { getProducts } from '../services/products.services';
import { TableCart } from '../components/Fragments/TableCart';
import { MainLayouts } from '../components/Layouts/MainLayouts';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <>
            <MainLayouts>
                <section className='flex justify-center py-5'>
                    <div className='max-w-7xl w-full flex justify-center'>
                        <div className='w-4/6 flex flex-wrap'>
                            {products.length > 0 &&
                                products.map((product) => {
                                    return (
                                        <CardProducts key={product.id}>
                                            <CardProducts.Header
                                                image={product.image}
                                                id={product.id}
                                            />
                                            <CardProducts.Body name={product.title}>
                                                {product.description}
                                            </CardProducts.Body>
                                            <CardProducts.Footer
                                                price={product.price}
                                                id={product.id}
                                            />
                                        </CardProducts>
                                    );
                                })}
                        </div>
                        <div className='w-2/6'>
                            <h1 className='text-3xl text-blue-500 font-bold px-5'>Cart</h1>
                            <TableCart products={products} />
                        </div>
                    </div>
                </section>
            </MainLayouts>
        </>
    );
};

export default ProductsPage;
