import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { MainLayouts } from '../components/Layouts/MainLayouts';

export const ProfilePage = () => {
    const username = useLogin();

    return (
        <>
            <MainLayouts>
                <h1>Profile User</h1>
                <p>Username: {username} </p>
                <Link to='/products' className='text-blue-500'>
                    Back
                </Link>
            </MainLayouts>
        </>
    );
};
