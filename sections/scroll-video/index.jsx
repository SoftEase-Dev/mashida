"use client"

import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';
import CardFeatures from "@/components/features/card";

const Features = () => {
    return (
        <div className={'scrolly-container w-full h-[450vh]'}>
            <ScrollyVideo src="/videos/timelapse.mp4" />
            {
                features.map((item, index) => {
                    return (
                        <CardFeatures
                            key={index}
                            title={item.title}
                            subTitle={item.subTitle}
                        />
                    )
                })
            }
        </div>
    );
}

export default Features;

export const features = [
    {
        id: 1,
        title: 'SocialFi',
        subTitle: 'SocialFi, a place for web3 users to interact with each other, monetize their posts, support rewards, use NFTs as digital identities and assets backed up by cryptocurrency.'
    },
    {
        id: 2,
        title: 'GameFi',
        subTitle: 'Game FI, combining Play To Earn and Free To Play, provides game users with an opportunity to earn money while still enjoying a fun and exciting gaming experience.'
    },
    {
        id: 3,
        title: 'NFTFi',
        subTitle: 'NFTFI Features of the Mashida Io Platform to support the ecosystem, enabling users to buy and sell various types of NFTs, as digital assets, social identities, and game NFTs.'
    },
]