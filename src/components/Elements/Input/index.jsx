import React from 'react';
import Label from './Label';
import Input from './Input';

const InputForm = (props) => {
    const { label, name, type, placeholder } = props;

    return (
        <>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} id={name} />
        </>
    );
};

export default InputForm;
