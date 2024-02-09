import Text from "@/components/text";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const CardTeam = ({
    name,
    img,
    job,
    linkedin,
    x
}: {
    name: string,
    img: string,
    job: string,
    linkedin: string,
    x: string
}) => {
    return (
        <div className="flex flex-col w-full items-center md:items-start">
            <div className="w-[150px] xs:w-[200px] sm:w-[250px] lg:w-[290px] h-[200px] sm:h-[300px] lg:h-[356px] relative">
                <Image src={img} alt="Team Image - (Mashida)" fill className="object-contain object-center" />
            </div>
            <div className="flex mt-4 flex-col w-full items-center md:items-start gap-2">
                <Text className="text-base xs:text-lg sm:text-xl lg:text-2xl text-white font-medium">{name}</Text>
                <Text className="text-base xs:text-lg xs:text-left text-center sm:text-xl lg:text-2xl text-white/55 font-medium">{job}</Text>
                <div className="flex text-white flex-row gap-2">
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <FaXTwitter className="w-6 h-6" />
                    </a>
                    <a href={x} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardTeam;