import Text from "@/components/text";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const CardTeam = ({
    name,
    img,
    job
}: {
    name: string,
    img: string,
    job: string
}) => {
    return (
        <div className="flex flex-col">
            <div className="w-[290px] h-[356px] relative">
                <Image src={img} alt="Team Image - (Mashida)" fill className="object-contain object-center" />
            </div>
            <div className="flex mt-4 flex-col w-full items-start gap-2">
                <Text className="text-lg sm:text-xl lg:text-2xl text-white font-medium">{name}</Text>
                <Text className="text-lg sm:text-xl lg:text-2xl text-white/55 font-medium">{job}</Text>
                <div className="flex text-white flex-row gap-2">
                    <FaXTwitter className="w-6 h-6" />
                    <FaLinkedin className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
}

export default CardTeam;