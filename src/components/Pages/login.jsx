import React from 'react';
import AuthLayouts from '../Layouts/AuthLayouts';
import FormLogin from '../Fragments/FormLogin';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <AuthLayouts title='Login'>
            <FormLogin />
            <p className='mt-5 text-sm text-center'>
                Don't have an account?{' '}
                <Link to='/register' className='text-blue-500 font-bold'>
                    Sign Up
                </Link>{' '}
            </p>
        </AuthLayouts>
    );
};

export default LoginPage;
