import Text from "@/components/text";
import Modal from "../modal";
import { RxCross2 } from "react-icons/rx";
import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import CardConnect from "@/components/card/connect-wallet";
import Image from "next/image";
import { useRouter } from "next/navigation";

export type Modal = {
    title?: string;
    subTitle?: string;
    type: 'switch' | 'normal' | '';
    variant: 'wallet' | '';
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
        >
            {
                modal.type === 'normal' ?
                    <>
                        <div className="flex flex-row items-center w-full justify-between">
                            <Text className="text-2xl font-semibold">{modal.title}</Text>
                            <RxCross2 onClick={() => setOpen(false)} className="w-6 cursor-pointer h-6" />
                        </div>
                        <div className="flex flex-col gap-4">
                            {
                                modal.variant === 'wallet' ?
                                    <>
                                        <CardConnect>
                                            <Text
                                                variant="paragraph">
                                                By Connecting a wallet, you agree to Mashida <Link href="/terms-of-service" className="underline">Terms of Service</Link> and acknowledge
                                                that you have read and understand Mashida <Link href="/policy" className="underline">Policy</Link>
                                            </Text>
                                        </CardConnect>
                                        <CardConnect className="flex flex-row mt-6 w-full justify-between items-center">
                                            <Text
                                                variant="paragraph">
                                                Metamask
                                            </Text>
                                            <Image src={'/images/logo/metamask.svg'} width={35} height={35} alt="Metamask Logo - (Mashida)" />
                                        </CardConnect>
                                        <CardConnect className="flex flex-row w-full justify-between items-center">
                                            <Text
                                                variant="paragraph">
                                                TrustWallet
                                            </Text>
                                            <Image src={'/images/logo/trust.svg'} width={35} height={35} alt="Metamask Logo - (Mashida)" />
                                        </CardConnect>
                                        <CardConnect className="flex flex-row w-full justify-between items-center">
                                            <Text
                                                variant="paragraph">
                                                Coinbase
                                            </Text>
                                            <Image src={'/images/logo/coinbase.svg'} width={35} height={35} alt="Metamask Logo - (Mashida)" />
                                        </CardConnect>
                                        <CardConnect className="flex flex-roww-full justify-between items-center">
                                            <Text
                                                variant="paragraph">
                                                WalletConnect
                                            </Text>
                                            <Image src={'/images/logo/walletconnect.svg'} width={35} height={35} alt="Metamask Logo - (Mashida)" />
                                        </CardConnect>
                                    </>
                                    :
                                    null
                            }
                        </div>
                    </>
                    :
                    modal.type === 'switch' ?
                        <>
                            <div className="flex flex-row items-center w-full justify-between">
                                <Text className="text-2xl font-semibold">{modal.title}</Text>
                                <RxCross2 onClick={() => setOpen(false)} className="w-6 cursor-pointer h-6" />
                            </div>
                            <div>
                                
                            </div>
                        </>
                        :
                        null
            }
        </Modal>
    );
}

export default ModalContainer;