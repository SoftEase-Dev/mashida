const Modal = ({
    variant,
    className,
    children
}: {
    variant?: string,
    children: React.ReactNode
    className?: string
}) => {
    return (
        <div className='fixed inset-0 overflow-y-auto z-[1000]'>
            <div className="flex items-center justify-center h-full w-full">
                <div className="bg-dark-primary w-[400px] rounded-xl h-[500px]">
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;