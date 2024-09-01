import { useLogin } from '../hooks/useLogin';

export const ProfilePage = () => {
    const username = useLogin();

    return (
        <>
            <h1>Profile User</h1>
            <p>Username: {username} </p>
        </>
    );
};
