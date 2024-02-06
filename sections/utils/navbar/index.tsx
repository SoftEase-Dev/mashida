"use client"

import Button from "@/components/button";
import Container from "@/components/container";
import Text from "@/components/text";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const [menuTrade, setMenuTrade] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100;
            setIsScrolled(!isTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container variant="navbar" className={`${isScrolled ? 'bg-dark-primary/80' : ''} top-0 w-full z-50 transition-all duration-500 fixed`}>
            <div className="flex flex-row w-full justify-between">
                <div className="flex flex-row w-full items-center gap-3">
                    <div className="w-[225px] relative h-[32px]">
                        <Image src={'/images/logo-mashida.svg'} alt="Mashida Logo - (Mashida)" fill className="object-contain object-left" />
                    </div>
                    <div className="rounded-full bg-purple-300 py-1 px-2">
                        <Text className="text-xs text-white font-Archivo">$MSHD</Text>
                    </div>
                </div>

                {/* Desktop */}
                <div className="flex-row gap-10 w-full lg:flex hidden items-center justify-end font-Archivo text-white">
                    <div
                        onMouseEnter={() => {
                            setMenuTrade(true)
                        }}
                        className="flex flex-col">
                        <div className="flex flex-row gap-2 cursor-pointer items-center">
                            <Text className="text-base">Trade</Text>
                            <IoIosArrowDown className="w-4 h-4" />
                        </div>
                        {
                            menuTrade ?
                                <ul
                                    onMouseLeave={() => setMenuTrade(false)} 
                                    className={`mt-8 text-base font-Archivo bg-dark-primary gap-3 flex flex-col p-3 border-2 border-white absolute w-[8%] rounded-lg`}>
                                        <li>
                                            Trade
                                        </li>
                                        <li>
                                            Convert
                                        </li>
                                        <li>
                                            Buy
                                        </li>
                                </ul>
                                :
                                null
                        }
                    </div>
                    <Link href="">
                        <Text className="text-base">Play</Text>
                    </Link>
                    <div className="flex flex-row gap-2">
                        <Link href="">
                            <Text className="text-base">Social</Text>
                        </Link>
                        <Text className="bg-orange-light rounded-full text-white text-xs p-1" >Coming soon</Text>
                    </div>
                    <Button type="button" variant="primary" className="flex flex-row gap-2 items-center">
                        Connect Wallet <FaWallet className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </Container >
    );
}

export default Navbar;