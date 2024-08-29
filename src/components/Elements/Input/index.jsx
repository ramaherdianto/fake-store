import React, { forwardRef } from 'react';
import Label from './Label';
import Input from './Input';

const InputForm = forwardRef((props, ref) => {
    const { label, name, type, placeholder } = props;

    return (
        <>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} id={name} ref={ref} />
        </>
    );
});

export default InputForm;
