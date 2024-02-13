"use client"

import Button from "@/components/button";
import Text from "@/components/text";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";

const CardWallet = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [check, setCheck] = useState<boolean>(false)
    const address = '0x06CE168FF4Ca760768f42C440d4266BA705E2F21'
    const copyText = async (SN: string) => {
        setLoading(false)
        setTimeout(() => {
            navigator.clipboard.writeText(SN)
            setCheck(true)
        }, 2000)

        setTimeout(() => {
            setCheck(false)
            setLoading(true)
        }, 3000)
    }

    return ( 
        <>
            <div className="flex flex-col p-6 items-center xl:mt-0 mt-6 h-full w-[95%] md:w-[70%] xl:w-full bg-dark-secondary rounded-xl">
                <div className="flex flex-col items-start sm:flex-row w-full sm:items-center justify-between">
                    <Text variant="paragraph">{`Contract and Explorer(s)`}</Text>
                    <Button 
                        onClick={() => copyText(`${address}`)} 
                        type="button" 
                        variant="copy" 
                        className="flex sm:mt-0 mt-3 text-sm w-[30%] justify-center flex-row gap-2 items-center">
                            {
                                loading ?
                                <>
                                    Copy address <MdOutlineContentCopy />
                                </>
                                :
                                <div className="w-full flex justify-center">
                                    {
                                        check ?
                                        <FaCheck className="w-6 h-6 text-green-light" />
                                        :
                                        <AiOutlineLoading className="w-5 h-5 text-black animate-spin" />
                                    }
                                </div>
                            }
                    </Button>
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