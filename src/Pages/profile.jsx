import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { Navbar } from '../components/Fragments/Navbar';

export const ProfilePage = () => {
    const username = useLogin();

    return (
        <>
            <Navbar />
            <h1>Profile User</h1>
            <p>Username: {username} </p>
            <Link to='/products' className='text-blue-500'>
                Back
            </Link>
        </>
    );
};
