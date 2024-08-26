const Button = ({ children, className }) => {
    return (
        <button className={`${className} text-white font-bold py-2 px-4 rounded`}>
            {children}
        </button>
    );
};

export default Button;
