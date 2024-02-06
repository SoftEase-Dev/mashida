import Text from "@/components/text";
import { FaCheck } from "react-icons/fa6";

const CardRoadmap = ({
    name,
    list
}: {
    name: string,
    list: {
        name: string,
        check: boolean
    }[]
}) => {
    return (
        <>
            <div className={`${name === 'Q1 2023' ? 'border-gradient' : ''} bg-dark-200 h-[410px] flex flex-col w-full p-6 rounded-xl text-white gap-2`}>
                <div className="bg-purple-300 rounded-lg w-[60%] sm:w-[50%] md:w-[40%]">
                    <Text className="text-base p-2">{name}</Text>
                </div>
                <div className="gap-y-2 flex flex-col mt-4">
                    {
                        list.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-row items-center justify-between">
                                    <Text className="text-sm lg:text-base line-clamp-1 font-medium">{item.name}</Text>
                                    {
                                        item.check === true ?
                                        <div className="bg-green-light p-1 text-black rounded-full">
                                            <FaCheck className="w-3 h-3" />
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default CardRoadmap;