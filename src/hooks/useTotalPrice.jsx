import { useContext } from 'react';
import { TotalPriceContext, TotalPriceDispatch } from '../context/totalPriceContext';

export const useTotalPrice = () => {
    return useContext(TotalPriceContext);
};

export const useTotalPriceDispatch = () => {
    return useContext(TotalPriceDispatch);
};
