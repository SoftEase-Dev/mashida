import Container from "@/components/container";
import Text from "@/components/text";
import CardWallet from "@/components/card/token-allocation";
import Image from "next/image";

const TokenAllocation = () => {
    return (
        <>
            <Container>
                <div className="flex items-center gap-x-10 xl:gap-x-20 flex-col xl:flex-row justify-between w-full">
                    <div className="w-full flex justify-center xl:justify-start">
                        <Text className="" variant="subtitle">
                            Token Allocation
                        </Text>
                    </div>
                    <CardWallet />
                </div>

                <div className="absolute h-[708px] flex justify-end ml-20 lg:ml-64 -mt-20 sm:h-screen w-[70%] xxl:w-[55%] -z-50">
                    <Image src="/images/grid.svg" alt="Background Hero" fill className="object-bottom object-cover" />
                </div>

                <div className="h-screen mt-5 md:mt-10 lg:mt-20 relative w-full">
                    <Image src={'/images/chart.svg'} alt="Chart Image - (mashida)" fill className="object-contain object-center" />
                </div>
            </Container>
        </>
    );
}

export default TokenAllocation;