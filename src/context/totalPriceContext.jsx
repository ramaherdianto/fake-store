import { createContext, useReducer } from 'react';

export const TotalPriceContext = createContext();
export const TotalPriceDispatch = createContext();

export const totalPriceReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE': {
            return {
                total: action.payload.total,
            };
        }
        default: {
            throw Erro('Unknown action: ', action.type);
        }
    }
};

export const TotalPriceContextProvider = ({ children }) => {
    const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });

    return (
        <TotalPriceContext.Provider value={totalPrice}>
            <TotalPriceDispatch.Provider value={dispatch}>{children}</TotalPriceDispatch.Provider>
        </TotalPriceContext.Provider>
    );
};
