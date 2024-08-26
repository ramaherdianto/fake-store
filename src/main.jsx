import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterPage from './components/Pages/register.jsx';
import LoginPage from './components/Pages/login.jsx';
import ErrorPage from './components/Pages/error404.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello Error</div>,
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
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
