const Button = ({ children, className, ...props }) => {
    return (
        <button
            {...props}
            className={`${className} text-white text-sm font-bold py-2 px-4 rounded hover:opacity-60 duration-300`}
        >
            {children}
        </button>
    );
};

export default Button;
