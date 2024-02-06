import Button from "@/components/button";
import Text from "@/components/text";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";

const CardWallet = () => {
    return ( 
        <>
            <div className="flex flex-col p-6 items-center xl:mt-0 mt-6 h-full w-[95%] md:w-[70%] xl:w-full bg-dark-secondary rounded-xl">
                <div className="flex flex-col items-start sm:flex-row w-full sm:items-center justify-between">
                    <Text variant="paragraph">{`Contract and Explorer(s)`}</Text>
                    <Button type="button" variant="copy" className="flex sm:mt-0 mt-3 text-sm flex-row gap-2 items-center">Copy address <MdOutlineContentCopy /></Button>
                </div>
                <div className="flex flex-row gap-4 text-white items-center w-full justify-between mt-4 bg-dark-primary p-4 rounded-2xl">
                    <Image src={'/images/coin-icon.svg'} alt="Icon Coin - (Mashida)" width={24} height={24} />
                    <Text variant="paragraph" className="line-clamp-1 text-xs sm:text-sm lg:text-base">0x06CE168FF4Ca760768f42C440d4266BA705E2F21</Text>
                    <FaExternalLinkAlt className="w-4 h-4" />
                </div>
            </div>
        </>
    );
}

export default CardWallet;