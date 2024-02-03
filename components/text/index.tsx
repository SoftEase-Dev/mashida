const Text = ({
    variant,
    className,
    children
}: {
    variant?: string,
    className?: string,
    children: React.ReactNode
}) => {
    switch (variant) {
        case 'title':
            return (
                <h1 className={`${className} font-Oi text-4xl sm:text-6xl lg:text-title text-white`}>
                    {children}
                </h1>
            )
        case 'subtitle':
            return (
                <h1 className={`${className} font-Oi text-2xl sm:text-4xl lg:text-6xl text-white`}>
                    {children}
                </h1>
            )
        case 'subtitle-paragraph':
            return (
                <p className={`${className} font-Archivo text-lg text-white sm:text-xl lg:text-2xl`}>
                    {children}
                </p>
            )
        case 'paragraph':
            return (
                <p className={`${className} font-Archivo text-white text-sm lg:text-base`}>
                    {children}
                </p>
            )
        default:
            return (
                <h3 className={`${className} font-Archivo`}>
                    {children}
                </h3>
            )
    }
}

export default Text;