import React, { useEffect, useRef } from 'react';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button';

const FormLogin = () => {
    const emailRef = useRef(null);

    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);
        window.location.href = '/products';
    };

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                ref={emailRef}
                type='email'
                label='Email'
                name='email'
                placeholder='example@mail.com'
            />
            <InputForm type='password' label='Password' name='password' placeholder='*****' />
            <Button type='submit' className='bg-blue-500 w-full'>
                Login
            </Button>
        </form>
    );
};

export default FormLogin;
