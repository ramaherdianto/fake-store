const Button = ({ children, className, ...props }) => {
    return (
        <button
            {...props}
            className={`${className} text-white font-bold py-2 px-5 rounded hover:opacity-60 duration-300`}
        >
            {children}
        </button>
    );
};

export default Button;
