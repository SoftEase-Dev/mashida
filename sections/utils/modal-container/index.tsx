import Text from "@/components/text";
import Modal from "../modal";
import { RxCross2 } from "react-icons/rx";
import { SetStateAction, useEffect, useState } from "react";

export type Modal = {
    title?: string;
    subTitle?: string;
    type: 'switch' | 'normal' | '';
};

const ModalContainer = ({
    modal
}: {
    modal: Modal
}) => {
    const [open, setOpen] = useState<boolean>(false)

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
                            <RxCross2 onClick={() => setOpen(false)} className="w-6 h-6" />
                        </div>
                    </>
                    :
                    <>

                    </>
            }
        </Modal>
    );
}

export default ModalContainer;