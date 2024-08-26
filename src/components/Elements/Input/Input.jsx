import React from 'react';

const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <input
            type={type}
            className='text-sm border rounded w-full mb-4 py-2 px-3 text-slate-700 placeholder:opacity-50 focus:ring focus:ring-blue-400 focus:outline-none duration-300'
            placeholder={placeholder}
            name={name}
            id={name}
        />
    );
};

export default Input;
