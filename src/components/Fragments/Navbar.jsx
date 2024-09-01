import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import Button from '../Elements/Button';

export const Navbar = () => {
    const username = useLogin();

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <nav className='p-5 w-full bg-blue-500'>
            <div className='flex max-w-7xl w-full items-center justify-between mx-auto gap-8'>
                <div className='flex items-center gap-4'>
                    <Link to='/profile' className='text-white'>
                        Profile
                    </Link>
                    <Link to='/products' className='text-white'>
                        Products
                    </Link>
                </div>
                <div className='flex items-center gap-8'>
                    <h1 className='text-white font-bold'>{username}</h1>
                    <Button onClick={handleLogout} className='bg-slate-800'>
                        Logout
                    </Button>
                </div>
            </div>
        </nav>
    );
};
