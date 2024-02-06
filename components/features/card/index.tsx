import Text from "@/components/text";

const CardFeatures = ({
    title,
    subTitle
}: {
    title: string,
    subTitle: string
}) => {
    return (
        <>
            <div className="card-wrap w-[90%]">
                <div className="card bg-[#090909]/75 w-[500px] xs:w-[600px] md:w-[700px] border-4 border-dark-primary p-11">
                    <Text className="text-4xl lg:text-5xl font-Oi">
                        {title}
                    </Text>
                    <Text variant="paragraph" className="mt-3">
                        {subTitle}
                    </Text>
                </div>
            </div>
        </>
    );
}

export default CardFeatures;