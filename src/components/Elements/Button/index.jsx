const Button = ({ children, className }) => {
    return (
        <button
            className={`${className} text-white font-bold py-2 px-4 rounded hover:opacity-60 duration-300`}
        >
            {children}
        </button>
    );
};

export default Button;
