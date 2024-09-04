import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: JSON.parse(localStorage.getItem('cart')) || [],
        isOpen: false,
    },
    reducers: {
        addToCart(state, action) {
            const itemInCart = state.data.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.data.push(action.payload);
            }
        },
        openCart: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { addToCart, openCart } = cartSlice.actions;
export default cartSlice.reducer;
