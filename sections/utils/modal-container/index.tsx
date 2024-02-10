import Text from "@/components/text";
import Modal from "../modal";
import { RxCross2 } from "react-icons/rx";
import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import CardConnect from "@/components/card/connect-wallet";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CardConvert from "@/components/card/convert";
import CardWallet from "@/components/card/connect-wallet/card";

export type Modal = {
    title?: string;
    subTitle?: string;
    type: 'switch' | 'normal' | '';
    variant?: 'wallet' | 'buy' | '';
};

const ModalContainer = ({
    modal
}: {
    modal: Modal
}) => {
    const [open, setOpen] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
        if (modal.type != '') {
            setOpen(true)
        }
    }, [modal])
    return (
        <Modal
            open={open}
            variant={modal.variant}
            type={modal.type}
        >
            {
                modal.type === 'normal' ?
                    <>
                        <div className="flex flex-row items-center w-full justify-between">
                            <Text className="text-lg sm:text-2xl font-semibold">{modal.title}</Text>
                            <RxCross2 onClick={() => setOpen(false)} className="w-4 sm:w-6 cursor-pointer h-4 sm:h-6" />
                        </div>
                        <div className="flex flex-col gap-4">
                            {
                                modal.variant === 'wallet' ?
                                    <CardWallet />
                                    :
                                    modal.variant === 'buy' ?
                                        <>

                                        </>
                                        :
                                        null
                            }
                        </div>
                    </>
                    :
                    modal.type === 'switch' ?
                        <>
                            <div className="flex flex-row px-5 pt-5 items-center w-full justify-between">
                                <Text className="text-lg sm:text-2xl font-semibold">{modal.title}</Text>
                                <RxCross2 onClick={() => setOpen(false)} className="w-4 sm:w-6 cursor-pointer h-4 sm:h-6" />
                            </div>
                            <div className="mt-2">
                                <CardConvert />
                            </div>
                        </>
                        :
                        null
            }
        </Modal>
    );
}

export default ModalContainer;