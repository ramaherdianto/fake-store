import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterPage from './Pages/register.jsx';
import LoginPage from './Pages/login.jsx';
import ErrorPage from './Pages/error404.jsx';
import ProductsPage from './Pages/products.jsx';
import { ProfilePage } from './Pages/profile.jsx';
import DetailsProductPage from './Pages/detailsProduct.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import DarkModeContextProvider from './context/darkMode.jsx';
import { TotalPriceContextProvider, TotalPriceDispatch } from './context/totalPriceContext.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/products',
        element: <ProductsPage />,
    },
    {
        path: '/profile',
        element: <ProfilePage />,
    },
    {
        path: '/product/:id',
        element: <DetailsProductPage />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <DarkModeContextProvider>
                <TotalPriceContextProvider>
                    <RouterProvider router={router} />
                </TotalPriceContextProvider>
            </DarkModeContextProvider>
        </Provider>
    </StrictMode>
);
