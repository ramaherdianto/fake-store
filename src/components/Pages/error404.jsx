import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className='min-h-screen bg-slate-900 w-full flex flex-col justify-center items-center'>
            <div className='max-w-xs w-full bg-slate-800 text-white rounded-md border border-slate-700 p-8 flex flex-col text-center gap-5'>
                <h1 className='text-3xl font-bold mb-4'>Oops!</h1>
                <p className='text-sm'>Sorry, an unexpected error has occured</p>
                <p className='text-sm'>{error.statusText || error.message}</p>
            </div>
        </div>
    );
};

export default ErrorPage;
