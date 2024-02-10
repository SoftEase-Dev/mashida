import Text from "@/components/text";
import CardConnect from "..";
import Link from "next/link";
import Image from "next/image";

const CardWallet = () => {
    return (
        <>
            <>
                <CardConnect>
                    <Text
                        variant="paragraph">
                        By Connecting a wallet, you agree to Mashida <Link href="/terms-of-service" className="underline">Terms of Service</Link> and acknowledge
                        that you have read and understand Mashida <Link href="/policy" className="underline">Policy</Link>
                    </Text>
                </CardConnect>
                <CardConnect className="flex flex-row mt-6 w-full justify-between items-center">
                    <Text
                        variant="paragraph">
                        Metamask
                    </Text>
                    <Image src={'/images/logo/metamask.svg'} width={35} height={35} alt="Metamask Logo - (Mashida)" />
                </CardConnect>
                <CardConnect className="flex flex-row w-full justify-between items-center">
                    <Text
                        variant="paragraph">
                        TrustWallet
                    </Text>
                    <Image src={'/images/logo/trust.svg'} width={35} height={35} alt="Metamask Logo - (Mashida)" />
                </CardConnect>
                <CardConnect className="flex flex-row w-full justify-between items-center">
                    <Text
                        variant="paragraph">
                        Coinbase
                    </Text>
                    <Image src={'/images/logo/coinbase.svg'} width={35} height={35} alt="Metamask Logo - (Mashida)" />
                </CardConnect>
                <CardConnect className="flex flex-roww-full justify-between items-center">
                    <Text
                        variant="paragraph">
                        WalletConnect
                    </Text>
                    <Image src={'/images/logo/walletconnect.svg'} width={35} height={35} alt="Metamask Logo - (Mashida)" />
                </CardConnect>
            </>
        </>
    );
}

export default CardWallet;