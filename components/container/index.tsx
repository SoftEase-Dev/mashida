const Container = ({
    className,
    children,
    variant
}: {
    className?: string,
    children: React.ReactNode,
    variant?: string
}) => {
    switch (variant) {
        case 'navbar':
            return (
                <nav className={`${className} py-3 md:py-6 px-5 lg:px-lg`}>
                    {children}
                </nav>
            );
        case 'footer':
            return (
                <footer className={`${className} pt-5 xs:pt-10 md:pt-20 pb-5 md:pb-10 px-5 xs:px-10 md:px-lg`}>
                    {children}
                </footer>
            );
        default:
            return (
                <div className={`${className} p-5 lg:p-lg`}>
                    {children}
                </div>
            );
    }
}

export default Container;