import Container from "@/components/container";
import CardTeam from "@/components/team/card";
import Text from "@/components/text";
import { team } from "@/models/dummy/dummyTeam";
import Image from "next/image";

const Team = () => {
    return (
        <Container>
            <div className="absolute h-[708px] flex justify-end ml-64 -mt-20 sm:h-screen w-[75%] xxl:w-[55%] -z-50">
                <Image src="/images/grid.svg" alt="Background Hero" fill className="object-bottom object-cover" />
            </div>
            <div className="w-full flex justify-center">
                <Text variant="subtitle">Team</Text>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 mt-12 w-full">
                {
                    team.map((item, index) => {
                        return (
                            <CardTeam
                                job={item.job}
                                key={index}
                                name={item.name}
                                img={item.img}
                            />
                        )
                    })
                }
            </div>
        </Container>
    );
}

export default Team;