import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import Footer from "@/sections/utils/footer";
import Navbar from "@/sections/utils/navbar";
import { ModalProvider } from "@/hooks/modal";

export const metadata: Metadata = {
  title: "Mashida",
  description: "The Mashida is comprised of GameFi, SocialFi and NFTFi elements and built on blockchain technology. Mashida is a BEP20 Token and a Web3 Platform that contains a Virtual world and Social and Game application features that are interconnected, and people can interact virtually, work, play, and meet based on activity and interaction.",
  keywords: 'Mashida',
  metadataBase: new URL('http://178.16.141.66:3004/'),
  authors: [{ name: 'Mashida Team', url: 'http://178.16.141.66:3004/' }],
  openGraph: {
    title: 'Mashida',
    description:
      'The Mashida is comprised of GameFi, SocialFi and NFTFi elements and built on blockchain technology. Mashida is a BEP20 Token and a Web3 Platform that contains a Virtual world and Social and Game application features that are interconnected, and people can interact virtually, work, play, and meet based on activity and interaction.',
    url: 'http://178.16.141.66:3004/',
    siteName: 'Mashida',
    images: [
      {
        url: 'http://178.16.141.66:3004/' + '/images/logo-mashida.png',
        width: 512,
        height: 512,
      },
    ],
    locale: 'en_ID',
    type: 'website',
    countryName: 'Indonesia',
  },
  robots: 'index,follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden'>
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
