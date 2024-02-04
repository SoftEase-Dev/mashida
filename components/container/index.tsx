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
                <nav className={`${className} py-3 xs:py-6 md:py-12 px-5 xs:px-10 md:px-lg`}>
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
                <div className={`${className} p-5 xs:p-10 md:p-lg`}>
                    {children}
                </div>
            );
    }
}

export default Container;