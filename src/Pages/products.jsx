import React, { useContext, useEffect, useState } from 'react';
import CardProducts from '../components/Fragments/CardProducts';
import { getProducts } from '../services/products.services';
import { TableCart } from '../components/Fragments/TableCart';
import { MainLayouts } from '../components/Layouts/MainLayouts';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Elements/Button';
import { openCart } from '../redux/slices/cartSlice';
import { DarkMode } from '../context/darkMode';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const isOpen = useSelector((state) => state.cart.isOpen);
    const dispatch = useDispatch();
    const { isDarkMode } = useContext(DarkMode);

    const handleOpenCart = () => {
        dispatch(openCart());
    };

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <>
            <MainLayouts>
                <section
                    className={`flex justify-center py-5 ${
                        isDarkMode ? 'bg-slate-900' : 'bg-[#f8f8f8]'
                    }`}
                >
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
                        {isOpen && (
                            <>
                                <div className='w-full sm:w-1/2 lg:w-2/6 fixed top-0 right-0 px-1 py-4 bg-slate-100 min-h-screen'>
                                    <div className='flex justify-between items-center'>
                                        <h1 className='text-3xl text-blue-500 font-bold px-5'>
                                            Cart
                                        </h1>
                                        <Button onClick={handleOpenCart}>❌</Button>
                                    </div>
                                    <TableCart products={products} />
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </MainLayouts>
        </>
    );
};

export default ProductsPage;
