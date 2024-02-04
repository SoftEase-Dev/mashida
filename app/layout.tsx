import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import Footer from "@/sections/utils/footer";
import Navbar from "@/sections/utils/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mashida",
  description: "",
  keywords: 'Mashida',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='max-w-screen-2xl m-auto overflow-x-hidden'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
