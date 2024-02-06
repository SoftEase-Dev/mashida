import Container from "@/components/container";
import Text from "@/components/text";
import Image from "next/image";
import Link from "next/link";
import { FaDribbble, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaRegHandPeace } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className="bg-purple-300 flex flex-col">
                <Container variant="footer" className="flex flex-col w-full">
                        <div className="w-full flex flex-col sm:flex-row sm:justify-between">
                            <div className="gap-6 flex  sm:items-start w-full flex-col">
                                <div className="w-full relative h-[32px]">
                                    <Image src={'/images/logo-mashida.svg'} alt="Mashida Logo - (Mashida)" fill className="object-contain object-left" />
                                </div>
                                <Text variant="paragraph" className="w-full flex sm:w-[70%] lg:w-[50%]">
                                    CHR Office, Grand Slipi Tower, Lantai 9 Unit O Jl. Jend. S. Parman Kav. 22-24 Palmerah, West Jakarta, Province DKI Jakarta Postal Code 11480 Indonesia
                                </Text>
                                <div className="flex flex-row gap-x-6 text-white">
                                    <Link href='' className="hover:text-black hover:animate-pulse transition-all duration-300">
                                        <FaTwitter className="h-6 w-6" />
                                    </Link>
                                    <Link href='' className="hover:text-black hover:animate-pulse transition-all duration-300">
                                        <FaLinkedin className="h-6 w-6" />
                                    </Link>
                                    <Link href='' className="hover:text-black hover:animate-pulse transition-all duration-300">
                                        <FaFacebook className="h-6 w-6" />
                                    </Link>
                                    <Link href='' className="hover:text-black hover:animate-pulse transition-all duration-300">
                                        <FaGithub className="h-6 w-6" />
                                    </Link>
                                    <Link href='' className="hover:text-black hover:animate-pulse transition-all duration-300">
                                        <FaRegHandPeace className="h-6 w-6" />
                                    </Link>
                                    <Link href='' className="hover:text-black hover:animate-pulse transition-all duration-300">
                                        <FaDribbble className="h-6 w-6" />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-row sm:mt-0 mt-10 gap-12 sm:w-[40%] text-white">
                                <div className="flex flex-col gap-3">
                                    <Text className="font-semibold text-sm lg:text-base">Features</Text>
                                    <ul className="font-Archivo gap-2 flex flex-col text-sm lg:text-base">
                                        <li className="hover:text-black hover:ml-2 duration-500 hover:animate-pulse transition-all">
                                            <Link href="">
                                                GameFi
                                            </Link>
                                        </li>
                                        <li className="flex flex-row gap-1 xl:gap-2 items-center hover:text-black hover:ml-2 duration-500 hover:animate-pulse transition-all">
                                            <Link href="">
                                                SocialFi
                                            </Link>
                                            <Text className="bg-orange-light line-clamp-1 rounded-full text-white text-xs p-1" >Coming soon</Text>
                                        </li>
                                        <li className="hover:text-black hover:ml-2 duration-500 hover:animate-pulse transition-all">
                                            <Link href="">
                                                NFTFi
                                            </Link>
                                        </li>
                                        <li className="hover:text-black hover:ml-2 duration-500 hover:animate-pulse transition-all">
                                            <Link href="">
                                                Trade
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Text className="font-semibold text-sm lg:text-base">Features</Text>
                                    <ul className="font-Archivo gap-2 flex flex-col text-sm lg:text-base">
                                        <li className="hover:text-black hover:ml-2 duration-500 hover:animate-pulse transition-all">
                                            <Link href="">
                                                Whitepaper
                                            </Link>
                                        </li>
                                        <li className="hover:text-black hover:ml-2 duration-500 hover:animate-pulse transition-all">
                                            <Link href="">
                                                Company
                                            </Link>
                                        </li>
                                        <li className="hover:text-black hover:ml-2 duration-500 hover:animate-pulse transition-all">
                                            <Link href="">
                                                Team
                                            </Link>
                                        </li>
                                        <li className="hover:text-black hover:ml-2 duration-500 hover:animate-pulse transition-all">
                                            <Link href="">
                                                Support
                                            </Link>
                                        </li>
                                        <li className="hover:text-black hover:ml-2 duration-500 hover:animate-pulse transition-all">
                                            <Link href="">
                                                Blog
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-20">
                            <hr className="w-full" />
                            <div className="flex flex-col sm:flex-row text-white mt-8 w-full justify-between">
                                <Text className="text-sm lg:text-base">© 2077 Mashida. All rights reserved.</Text>
                                <ul className="flex flex-row sm:mt-0 mt-5 gap-3">
                                    <li>
                                        <Link href="">
                                            Terms
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            Privacy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="">
                                            Cookies
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </Container>
                <div className="w-full relative h-[150px]">
                    <Image src={"/images/mashida-text-footer.svg"} alt="Mashida Text Footer - (Mashida)" fill className="object-contain object-right" />
                </div>
            </div >
        </>
    );
}

export default Footer;