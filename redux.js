//reducer

import { legacy_createStore } from 'redux';

// tempat membuat initialisasi state dan function yang dimana untuk merubah suatu state
const cartReducer = (
    state = {
        cart: [{ id: 1, qty: 5 }],
    },
    action
) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default:
            return state;
    }
};

// store
// tempat untuk menyimpan state
const store = legacy_createStore(cartReducer);
console.log('onCreate store: ', store.getState());

// subscribe
// untuk memantau perubahan state pada store
store.subscribe(() => {
    console.log('onStore Change: ', store.getState());
});

// dispatch
// untuk melakukan action atau usaha dalam merubah bahkan menambahkan data pada state
const action1 = { type: 'ADD_TO_CART', payload: { id: 2, qty: 13 } };
store.dispatch(action1);

const action2 = { type: 'ADD_TO_CART', payload: { id: 3, qty: 15 } };
store.dispatch(action2);
