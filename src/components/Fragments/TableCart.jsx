import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export const TableCart = (props) => {
    const { products } = props;
    const cart = useSelector((state) => state.cart.data);
    const [totalPrice, setTotalPrice] = useState(0);

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

    return (
        <table className='w-full text-left table-auto border-separate border-spacing-x-4 sm:border-spacing-x-5 mt-5'>
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
                        const product = products.find((product) => product.id === item.id);
                        return (
                            <tr key={product.id}>
                                <td>
                                    {product.title.length >= 18
                                        ? `${product.title.substring(0, 18)}...`
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
                                    {(item.qty * product.price).toLocaleString('en-EN', {
                                        styles: 'currency',
                                        currency: 'USD',
                                    })}
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
    );
};
