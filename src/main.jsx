import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import RegisterPage from './components/Pages/register.jsx';
import LoginPage from './components/Pages/login.jsx';
import ErrorPage from './components/Pages/error404.jsx';
import ProductsPage from './components/Pages/products.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Link to='/register'>Hello React</Link>,
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
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
