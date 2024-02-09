"use client"

import Button from "@/components/button";
import Container from "@/components/container";
import Text from "@/components/text";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import anime from 'animejs'
import { useModal } from "@/hooks/modal";

const Navbar = () => {
    const [menuTrade, setMenuTrade] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false)
    const { setModal } = useModal()
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

    const handleClick = () => {
        anime({
            targets: '.background',
            translateY: [
                { value: -1000, duration: 0, easing: 'linear' },
                { value: 0, duration: 500, easing: 'linear' }
            ],
        })
        setShow(true)
    }

    return (
        <>
            <Container variant="navbar" className={`${isScrolled ? 'bg-dark-primary/80' : ''} top-0 w-full z-50 transition-all duration-500 fixed`}>
                <div className="flex flex-row w-full justify-between">
                    <div
                        onMouseEnter={() => setMenuTrade(false)}
                        className="flex flex-row w-full items-center gap-3">
                        <div className="w-[125px] xs:w-[150px] lg:w-[225px] relative h-[32px]">
                            <Image src={'/images/logo-mashida.svg'} alt="Mashida Logo - (Mashida)" fill className="object-contain object-left" />
                        </div>
                        <div className="rounded-full bg-purple-300 py-1 px-2">
                            <Text className="text-xs text-white font-Archivo">$MSHD</Text>
                        </div>
                    </div>

                    {/* Desktop */}
                    <div className={`flex-row gap-10 w-full lg:flex hidden items-center justify-end font-Archivo text-white`}>
                        <div className="flex flex-col">
                            <div
                                onMouseEnter={() => {
                                    setMenuTrade(true)
                                }}
                                className="flex flex-row gap-2 cursor-pointer items-center">
                                <Text className="text-base xxl:text-3xl">Trade</Text>
                                <IoIosArrowDown className={`${menuTrade ? 'rotate-180' : 'rotate-0'} transition-all xxl:text-3xl duration-300 w-4 h-4`} />
                            </div>
                            {
                                menuTrade ?
                                    <ul
                                        onMouseLeave={() => setMenuTrade(false)}
                                        className={`mt-8 text-base xxl:text-3xl xxl:mt-14 cursor-pointer font-Archivo bg-dark-primary gap-3 flex flex-col p-3 border-2 border-white absolute w-[8%] rounded-lg`}>
                                        <li>
                                            <Link target="_blank" href={'https://pancakeswap.finance/swap?outputCurrency=0x06CE168FF4Ca760768f42C440d4266BA705E2F21'}>
                                                Trade
                                            </Link>
                                        </li>
                                        <li onClick={() => {
                                            setModal({
                                                title: '',
                                                type: 'switch',
                                            })
                                        }}>
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
                        <Link
                            onMouseEnter={() => {
                                setMenuTrade(false)
                            }}
                            href="">
                            <Text className="text-base xxl:text-3xl">Play</Text>
                        </Link>
                        <div
                            onMouseEnter={() => {
                                setMenuTrade(false)
                            }}
                            className="flex flex-row items-center gap-2">
                            <Link href="">
                                <Text className="text-base xxl:text-3xl">Social</Text>
                            </Link>
                            <Text className="bg-orange-light rounded-full text-white text-xs xxl:text-base p-1" >Coming soon</Text>
                        </div>
                        <Button
                            onClick={() => {
                                setMenuTrade(false)
                                setModal({
                                    title: 'Connect a Wallet',
                                    type: 'normal',
                                    variant: 'wallet'
                                })
                            }}
                            type="button" variant="primary" className="flex text-base xxl:text-2xl flex-row gap-2 items-center">
                            Connect Wallet <FaWallet className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Mobile */}
                    <div className={`${show ? 'hidden' : 'flex'} lg:hidden flex`}>
                        <RxHamburgerMenu onClick={() => handleClick()} className="w-6 h-6 text-white" />
                    </div>

                </div>
            </Container>

            <div className={`${show ? 'flex' : 'hidden'} h-screen absolute background z-50 lg:hidden flex w-full`}>
                {
                    show ?
                        <div className="bg-purple-300/80 h-full p-6 w-full text-white z-50">
                            <div className="flex flex-col gap-10">
                                <div className="flex w-full justify-end">
                                    <RxCross2 onClick={() => setShow(false)} className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col gap-6 font-medium text-xl">
                                    <div className="flex flex-col">
                                        <div onClick={() => setMenuTrade(!menuTrade)} className="flex flex-row gap-2 items-center">
                                            <Text>Trade</Text>
                                            <IoIosArrowDown className={`${menuTrade ? 'rotate-180' : 'rotate-0'} transition-all duration-300 w-4 h-4`} />
                                        </div>
                                        <ul className={`${menuTrade ? 'translate-y-0 flex' : 'translate-y-10 hidden'} mt-2 duration-300 font-normal text-lg transition-all pl-5 flex-col gap-2`}>
                                            <li>
                                                Trade
                                            </li>
                                            <li onClick={() => {
                                                setModal({
                                                    title: '',
                                                    type: 'switch',
                                                })
                                            }}>
                                                Convert
                                            </li>
                                            <li>
                                                Buy
                                            </li>
                                        </ul>
                                    </div>

                                    <Link
                                        href="">
                                        <Text className="text-xl">Play</Text>
                                    </Link>

                                    <div
                                        className="flex flex-row gap-2">
                                        <Link href="">
                                            <Text className="text-xl">Social</Text>
                                        </Link>
                                        <Text className="bg-orange-light rounded-full text-white text-xs p-1" >Coming soon</Text>
                                    </div>

                                    <Button
                                        type="button"
                                        onClick={() => {
                                            setModal({
                                                title: 'Connect a Wallet',
                                                type: 'normal',
                                                variant: 'wallet'
                                            })
                                        }}
                                        className="flex justify-center bg-white text-purple-300 px-2 py-4 rounded-xl flex-row gap-2 items-center">
                                        Connect Wallet <FaWallet className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }
            </div>
        </>
    );
}

export default Navbar;