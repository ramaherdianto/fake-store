import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

store.getState();

store.subscribe(() => {
    store.getState();
});

export default store;
