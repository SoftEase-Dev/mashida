import Image from "next/image";

const CardPartner = ({
    name,
    img
}: {
    name: string,
    img: string
}) => {
    return ( 
        <>
            <div className="border border-dark-100 w-full flex items-center rounded-xl px-4 py-14 bg-dark-200">
                <div className="w-[258px] h-[94px] relative">
                    <Image src={img} alt="Partner Image - (Mashida)" fill className="object-contain object-center" />
                </div>
            </div>
        </>
    );
}

export default CardPartner;