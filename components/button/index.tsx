const Button = ({
    type,
    variant,
    className,
    children,
    onClick
}: {
    type: "button" | "submit" | "reset" | undefined,
    variant?: string,
    className?: string,
    onClick?: () => void,
    children: React.ReactNode
}) => {
    switch (variant) {
        case 'border':
            return (
                <button
                    type={type}
                    onClick={onClick}
                    className={`${className} text-white text-sm lg:text-base font-Archivo border border-white rounded-xl py-4 px-6`}
                >
                    {children}
                </button>
            );
        case 'primary':
            return (
                <button
                    type={type}
                    onClick={onClick}
                    className={`${className} text-white border text-sm lg:text-base font-Archivo border-purple-200 bg-purple-300 rounded-xl py-4 px-6`}
                >
                    {children}
                </button>
            );
        case 'copy':
            return (
                <button
                    type={type}
                    onClick={onClick}
                    className={`${className} text-dark-secondary text-sm lg:text-base font-Archivo bg-white rounded-xl py-2 px-2`}
                >
                    {children}
                </button>
            );
        default:
            return (
                <button
                    type={type}
                    onClick={onClick}
                    className={`${className} text-sm lg:text-base font-Archivo border border-white`}
                >
                    {children}
                </button>
            );
    }
}

export default Button;