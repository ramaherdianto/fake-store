import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayouts = (props) => {
    const { title, children, type } = props;

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='w-full max-w-xs'>
                <h1 className='text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
                <p className='font-medium text-slate-500 mb-8'>
                    Welcome, Please enter your details
                </p>
                <div className='mb-10 bg-slate-200 p-5'>
                    <h1 className='text-red-500'>Still under development !</h1>
                    <h1 className='font-bold mt-4'>Account for Login</h1>
                    <p>username: johnd</p>
                    <p>password: m38rmF$</p>
                </div>
                {children}
                <p className='mt-5 text-sm text-center'>
                    {type === 'login' ? `Don't have an account?` : 'Have an account?'}{' '}
                    <Link
                        to={type === 'login' ? '/register' : '/login'}
                        className='text-blue-500 font-bold'
                    >
                        {type === 'login' ? 'Sign Up' : 'Sign In'}
                    </Link>{' '}
                </p>
            </div>
        </div>
    );
};

export default AuthLayouts;
