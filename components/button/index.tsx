const Button = ({
    type,
    variant,
    className,
    children,
    onClick
}: {
    type: "button" | "submit" | "reset" | undefined,
    variant: string,
    className: string,
    onClick: () => void,
    children: React.ReactNode
}) => {
    return ( 
        <button
            type={type}
            onClick={onClick}
            className={`${className} px-4 py-2`}
        >
            {children}
        </button>
    );
}

export default Button;