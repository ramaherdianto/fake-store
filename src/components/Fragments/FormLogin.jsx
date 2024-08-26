import React from 'react';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button';

const FormLogin = () => {
    return (
        <form action=''>
            <InputForm type='email' label='Email' name='email' placeholder='example@mail.com' />
            <InputForm type='password' label='Password' name='password' placeholder='*****' />
            <Button className='bg-blue-500 w-full'>Login</Button>
        </form>
    );
};

export default FormLogin;
