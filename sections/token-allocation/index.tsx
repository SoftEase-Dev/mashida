import Container from "@/components/container";
import Text from "@/components/text";
import CardWallet from "@/components/token-allocation/card";
import Image from "next/image";

const TokenAllocation = () => {
    return (
        <>
            <Container>
                <div className="flex items-center gap-20 flex-row justify-between w-full">
                    <div className="w-full">
                        <Text className="" variant="subtitle">
                            Token Allocation
                        </Text>
                    </div>
                    <CardWallet />
                </div>

                <div className="absolute h-[708px] flex justify-end ml-64 -mt-20 sm:h-screen w-full -z-50">
                    <Image src="/images/grid.svg" alt="Background Hero" fill className="object-bottom object-cover" />
                </div>

                <div className="h-screen mt-20 relative w-full">
                    <Image src={'/images/chart.svg'} alt="Chart Image - (mashida)" fill className="object-cover object-center" />
                </div>
            </Container>
        </>
    );
}

export default TokenAllocation;