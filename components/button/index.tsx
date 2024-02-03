const Button = ({
    type,
    variant,
    className,
    children,
    onClick
}: {
    type: "button" | "submit" | "reset" | undefined,
    variant: string,
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
                    className={`${className} text-white font-Archivo border border-white rounded-xl py-4 px-6`}
                >
                    {children}
                </button>
            );
        case 'primary':
            return (
                <button
                    type={type}
                    onClick={onClick}
                    className={`${className} text-white border font-Archivo border-purple-200 bg-purple-300 rounded-xl py-4 px-6`}
                >
                    {children}
                </button>
            );
        case 'copy':
            return (
                <button
                    type={type}
                    onClick={onClick}
                    className={`${className} text-dark-secondary font-Archivo bg-white rounded-xl py-2 px-2`}
                >
                    {children}
                </button>
            );
    }
}

export default Button;