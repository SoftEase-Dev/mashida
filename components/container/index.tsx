const Container = ({
    className,
    children
}: {
    className?: string,
    children: React.ReactNode
}) => {
    return ( 
        <div className={`${className} p-5 xs:p-10 md:p-lg max-w-screen-2xl`}>
            {children}
        </div>
    );
}

export default Container;