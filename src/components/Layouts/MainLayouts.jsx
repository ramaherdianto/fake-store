import { Navbar } from './Navbar';

export const MainLayouts = (props) => {
    const { children } = props;

    return (
        <>
            <Navbar />
            {children}
        </>
    );
};
