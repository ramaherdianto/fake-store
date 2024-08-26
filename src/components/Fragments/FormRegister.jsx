import React from 'react';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button';

const FormRegister = () => {
    return (
        <form action=''>
            <InputForm
                type='text'
                label='Fullname'
                name='fullname'
                placeholder='insert your name here...'
            />
            <InputForm type='email' label='Email' name='email' placeholder='example@mail.com' />
            <InputForm type='password' label='Password' name='password' placeholder='*****' />
            <InputForm
                type='password'
                label='Confirm Password'
                name='password'
                placeholder='*****'
            />
            <Button className='bg-blue-500 w-full'>Register</Button>
        </form>
    );
};

export default FormRegister;
