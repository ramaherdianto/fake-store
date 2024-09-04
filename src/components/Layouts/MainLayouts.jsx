import { Navbar } from './Navbar';

export const MainLayouts = (props) => {
    const { children } = props;

    return (
        <main className='relative'>
            <Navbar />
            {children}
        </main>
    );
};
