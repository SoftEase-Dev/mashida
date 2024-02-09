import Button from "@/components/button";
import Text from "@/components/text";
import { useState } from "react";
import { MdCurrencyExchange } from "react-icons/md";

const CardConvert = () => {
    const [convert, setConvert] = useState<boolean>(true)

    return (
        <>
            <div className="flex flex-row w-full items-center text-center justify-between">
                <div onClick={() => setConvert(true)} className={`${convert ? 'bg-dark-100 rounded-lg text-pink-light' : ''} cursor-pointer hover:bg-dark-100 hover:rounded-lg hover:text-pink-light w-full py-2`}>
                    <Text className="text-xl sm:text-2xl font-bold">Convert</Text>
                </div>
                <div onClick={() => setConvert(false)} className={`${!convert ? 'bg-dark-100 rounded-lg text-pink-light' : ''} cursor-pointer w-full py-2 hover:bg-dark-100 hover:rounded-lg hover:text-pink-light`}>
                    <Text className="text-xl sm:text-2xl font-bold">Re-Convert</Text>
                </div>
            </div>
            <div className="px-5 mt-5">
                {
                    convert ?
                        <>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="w-full justify-center flex-col flex items-center">
                                    <Text className="text-lg sm:text-xl">Convert</Text>
                                    <Text className="text-base mt-1 text-pink-light">Convert Token in an instant</Text>
                                </div>
                                <hr className="w-full my-3" />
                                <div className="w-full font-Archivo">
                                    <Text className="text-lg font-medium">MSHD</Text>
                                    <input className="w-full rounded-lg mt-2 p-4 bg-dark-100 px-4 outline-none placeholder:text-xs" placeholder="Minimum Convert 100 MSHD" />
                                </div>
                                <div className="my-2 w-full flex justify-center">
                                    <MdCurrencyExchange className="w-8 h-8" />
                                </div>
                                <div className="w-full font-Archivo">
                                    <Text className="text-lg font-medium">XMSHD</Text>
                                    <input disabled className="w-full rounded-lg mt-2 p-4 bg-dark-100 px-4 outline-none placeholder:text-xs" placeholder="0" />
                                </div>
                                <div className="flex flex-row w-full mt-2 justify-between">
                                    <Text className="text-green-light text-lg font-medium">Convert Fee</Text>
                                    <Text className="text-blue-50 text-lg font-medium">2.5%</Text>
                                </div>
                                <Button variant="primary" type="button">
                                    Connect Wallet
                                </Button>
                            </div>
                        </>
                        :
                        <>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="w-full justify-center flex-col flex items-center">
                                    <Text className="text-lg sm:text-xl">Re-Convert</Text>
                                    <Text className="text-base mt-1 text-pink-light">Re-Convert Token in an instant</Text>
                                </div>
                                <hr className="w-full my-3" />
                                <div className="w-full font-Archivo">
                                    <Text className="text-lg font-medium">XMSHD</Text>
                                    <input className="w-full rounded-lg mt-2 p-4 bg-dark-100 px-4 outline-none placeholder:text-xs" placeholder="Re-Convert Amount 50 MSHD - 100 MSHD" />
                                </div>
                                <div className="my-2 w-full flex justify-center">
                                    <MdCurrencyExchange className="w-8 h-8" />
                                </div>
                                <div className="w-full font-Archivo">
                                    <Text className="text-lg font-medium">MSHD</Text>
                                    <input disabled className="w-full rounded-lg mt-2 p-4 bg-dark-100 px-4 outline-none placeholder:text-xs" placeholder="0" />
                                </div>
                                <div className="flex flex-row w-full mt-2 justify-between">
                                    <Text className="text-green-light text-lg font-medium">Re-Convert Fee</Text>
                                    <Text className="text-blue-50 text-lg font-medium">2.5%</Text>
                                </div>
                                <Button variant="primary" type="button">
                                    Connect Wallet
                                </Button>
                            </div>
                        </>
                }
            </div>
        </>
    );
}

export default CardConvert;