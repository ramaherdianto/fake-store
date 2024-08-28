import React from 'react';
import AuthLayouts from '../Layouts/AuthLayouts';
import FormLogin from '../Fragments/FormLogin';

const LoginPage = () => {
    return (
        <AuthLayouts title='Login' type='login'>
            <FormLogin />
        </AuthLayouts>
    );
};

export default LoginPage;
