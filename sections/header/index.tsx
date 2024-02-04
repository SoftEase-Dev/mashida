import Button from "@/components/button";
import Container from "@/components/container";
import Text from "@/components/text";
import Image from "next/image";
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

            <Container className="h-screen flex w-full justify-center items-center">
                <div className="flex flex-col z-30 items-center w-[80%] relative text-center">
                    <Text variant="title" className="">Play and <span className="text-pink-light">Earn</span></Text>
                    <div className="flex w-full h-full justify-end -mt-10 ml-16">
                        <Image src={'/images/line.svg'} alt="" width={400} height={20} />
                    </div>
                    <Text variant="title" className="mt-2">in WEB3 World</Text>
                    <Text variant="subtitle-paragraph" className="font-light mt-4">Mashida is comprised of GameFi, SocialFi and NFTFi elements containing a Virtual, Social World and Game application features that are interconnected.</Text>

                    <div className="flex flex-row gap-5 mt-10">
                        <Button type="button" variant="border" className="flex flex-row items-center gap-2">
                            Learn more about Mashida <FaExternalLinkAlt />
                        </Button>
                        <Button type="button" variant="primary">
                            Whitepaper
                        </Button>
                    </div>
                </div>
            </Container>
            <div className="relative h-[708px] bottom-0 sm:h-screen -mt-[650px] w-full -z-50">
                <Image src="/images/mashida-hero.svg" alt="Background Hero" fill className="object-bottom object-contain" />
            </div>
        </header>
    );
}

export default Header;