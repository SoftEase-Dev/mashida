"use client"
import Text from "@/components/text"
import anime from "animejs"
import { useEffect } from "react"
import { RxCross2 } from "react-icons/rx"

const Modal = ({
    open,
    className,
    children,
}: {
    open: boolean,
    children: React.ReactNode
    className?: string
}) => {
    useEffect(() => {
        if (open === true) {
            anime({
                targets: '.modal',
                translateY: [
                    { value: -300, duration: 0, easing: 'linear' },
                    { value: 0, duration: 500, easing: 'linear' }
                ],
                opacity: [
                    { value: 0.5, duration: 0, easing: 'linear' },
                    { value: 1, duration: 500, easing: 'linear' }
                ]
            })
        }
    }, [open])
    return (
        <>
            {
                open ?
                    <div className='fixed inset-0 overflow-y-auto z-[1000]'>
                        <div className="flex items-center justify-center h-full w-full">
                            <div className='fixed inset-0 bg-black bg-opacity-50' />
                            <div className="bg-dark-primary modal w-[300px] sm:w-[400px] rounded-xl z-50 h-[550px]">
                                <div className="p-5 text-white flex gap-4 flex-col">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }
        </>
    );
}

export default Modal;