import Text from "@/components/text";
import Image from "next/image";

const CardTeam = ({
    name,
    img
}: {
    name: string,
    img: string
}) => {
    return (
        <div className="flex flex-col">
            <div className="w-[290px] h-[356px] relative">
                <Image src={img} alt="Team Image - (Mashida)" fill className="object-contain object-center" />
            </div>
            <div className="flex mt-4 flex-col w-full items-start gap-4">
                <Text variant="paragraph">{name}</Text>
            </div>
        </div>
    );
}

export default CardTeam;