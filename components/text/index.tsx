const Text = ({
    variant,
    className,
    children
}: {
    variant: string,
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
                    <p className={`${className} font-Archivo text-lg text-white sm:text-xl lg:text-2xl`}>
                        {children}
                    </p>
                )
        }
}

export default Text;