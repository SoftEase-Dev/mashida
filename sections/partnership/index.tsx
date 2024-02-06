import Container from "@/components/container";
import CardPartner from "@/components/partnership/card";
import Text from "@/components/text";
import { partner } from "@/models/dummy/dummyPartner";
import Image from "next/image";

const Partnership = () => {
    return (
        <>
            <Container>
                <div className="absolute h-[708px] flex justify-end ml-20 lg:ml-64 -mt-20 sm:h-screen w-[70%] xxl:w-[55%] -z-50">
                    <Image src="/images/grid.svg" alt="Background Hero" fill className="object-bottom object-cover" />
                </div>
                <div className="w-full flex justify-center">
                    <Text variant="subtitle">Partnership</Text>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 w-full">
                    {
                        partner.map((item, index) => {
                            return (
                                <CardPartner
                                    key={index}
                                    img={item.img}
                                    name={item.name}
                                />
                            )
                        })
                    }
                </div>
            </Container>
        </>
    );
}

export default Partnership;