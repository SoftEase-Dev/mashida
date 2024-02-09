import Text from "@/components/text";

const CardConnect = ({
    children,
    className,
    onClick
}: {
    children: React.ReactNode,
    className?: string,
    onClick?: () => void
}) => {
    return (
        <>
            <div onClick={onClick} className={`${className} border rounded-xl text-center text-base sm:text-lg bg-dark-100 px-3 py-4`}>
                {children}
            </div>
        </>
    );
}

export default CardConnect;