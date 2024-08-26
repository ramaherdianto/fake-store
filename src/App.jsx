import Button from './components/Elements/Button';
import LoginPage from './components/Pages/LoginPage';
import RegisterPage from './components/Pages/RegisterPage';

function App() {
    return (
        <>
            <div className='flex items-center justify-center min-h-screen'>
                {/* <LoginPage /> */}
                <RegisterPage />
            </div>
        </>
    );
}

export default App;
