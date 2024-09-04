import { configureStore, createSlice } from '@reduxjs/toolkit';

// create initial state and action
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },
    },
});

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        status: false,
    },
    reducers: {
        login(state, action) {
            state.status = action.payload;
        },
    },
});

// place for saving the state and action
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        login: loginSlice.reducer,
    },
});

// for call the data that in the state
console.log('onCreate Store: ', store.getState());

// for call the data that has change before
store.subscribe(() => {
    console.log('onChange Store: ', store.getState());
});

// for added or changed the data in the state
store.dispatch(
    cartSlice.actions.addToCart({ id: Math.floor(Math.random() * new Date()), qty: 15 })
);

store.dispatch(cartSlice.actions.addToCart({ id: Math.floor(Math.random() * new Date()), qty: 5 }));

store.dispatch(loginSlice.actions.login(true));
