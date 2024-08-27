import React from 'react';
import AuthLayouts from '../Layouts/AuthLayouts';
import FormRegister from '../Fragments/FormRegister';

const RegisterPage = () => {
    return (
        <AuthLayouts title='Register' type='register'>
            <FormRegister />
        </AuthLayouts>
    );
};

export default RegisterPage;
