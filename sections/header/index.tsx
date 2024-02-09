import Button from "@/components/button";
import Container from "@/components/container";
import Text from "@/components/text";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const Header = () => {
    return (
        <header className="relative">

            <div className="absolute h-[708px] top-0 sm:h-screen w-full -z-50">
                <Image src="/images/grid.svg" alt="Grid Image - (Mashida)" fill className="object-bottom object-cover" />
            </div>

            <div className="flex justify-end absolute w-full -z-0">
                <div className="w-[250px] h-[250px] blur-[150px] mr-56 mt-20 rounded-full bg-blue-50" />
            </div>

            <Container className="h-screen flex w-full justify-center items-center max-w-screen-2xl m-auto">
                <div className="flex flex-col z-30 items-center w-full xl:w-[90%] relative text-center">
                    <Text variant="title" className="">Play and <span className="text-pink-light">Earn</span></Text>
                    <div className="flex s:hidden xs:flex xs:my-2 lg:my-3 md:ml-10 lg:ml-20 xl:ml-32 xxl:ml-0 w-[95%] md:w-[85%] justify-center xs:justify-end">
                        <div className="w-[200px] md:w-[300px] lg:w-[350px] xl:w-[450px] h-[40px] lg:h-[70px] mt-16 xs:-mt-8 lg:-mt-14 absolute">
                            <Image src={'/images/line.svg'} alt="Line - (Mashida)" fill className="object-contain object-center" />
                        </div>
                    </div>
                    <Text variant="title" className="mt-2">in WEB3 World</Text>
                    <Text variant="subtitle-paragraph" className="font-light w-[80%] mt-4">Mashida is comprised of GameFi, SocialFi and NFTFi elements containing a Virtual, Social World and Game application features that are interconnected.</Text>

                    <div className="flex flex-col md:flex-row gap-5 mt-10">
                        <Button type="button" variant="border" className="flex flex-row items-center gap-2">
                            Learn more about Mashida <FaExternalLinkAlt />
                        </Button>
                        <Link href={'https://mashida.gitbook.io/mashida-whitepaper/'} target="_blank">
                            <Button type="button" variant="primary">
                                Whitepaper
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
            <div className="relative h-[708px] bottom-0 sm:h-screen -mt-[650px] md:-mt-[800px] lg:-mt-[550px] xl:-mt-[650px] w-full -z-50">
                <Image src="/images/mashida-hero.svg" alt="Background Hero" fill className="object-bottom object-contain xxl:object-cover" />
            </div>
        </header>
    );
}

export default Header;