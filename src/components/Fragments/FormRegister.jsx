import React, { useEffect, useRef } from 'react';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button';

const FormRegister = () => {
    const fullnameRef = useRef(null);

    useEffect(() => {
        fullnameRef.current.focus();
    }, []);

    return (
        <form action=''>
            <InputForm
                ref={fullnameRef}
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
                name='confirmPassword'
                placeholder='*****'
            />
            <Button className='bg-blue-500 w-full'>Register</Button>
        </form>
    );
};

export default FormRegister;
