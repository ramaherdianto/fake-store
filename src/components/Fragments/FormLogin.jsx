import React, { useEffect, useRef, useState } from 'react';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button';
import { login } from '../../services/auth.services';

const FormLogin = () => {
    const usernameRef = useRef(null);
    const [isLoginFailed, setIsLoginFailed] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        login(data, (status, res) => {
            if (status) {
                localStorage.setItem('token', res);
                window.location.href = '/products';
            } else {
                setIsLoginFailed(res);
            }
        });
    };

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                ref={usernameRef}
                type='text'
                label='Username'
                name='username'
                placeholder='john doe'
            />
            <InputForm type='password' label='Password' name='password' placeholder='*****' />
            {isLoginFailed && <p className='text-center text-red-500 mb-4'>{isLoginFailed}</p>}
            <Button type='submit' className='bg-blue-500 w-full'>
                Login
            </Button>
        </form>
    );
};

export default FormLogin;
