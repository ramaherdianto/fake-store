import React from 'react';
import AuthLayouts from '../Layouts/AuthLayouts';
import FormRegister from '../Fragments/FormRegister';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <AuthLayouts title='Register'>
            <FormRegister />
            <p className='mt-5 text-sm text-center'>
                Have an account?{' '}
                <Link to='/login' className='text-blue-500 font-bold'>
                    Sign In
                </Link>{' '}
            </p>
        </AuthLayouts>
    );
};

export default RegisterPage;
