import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import Footer from "@/sections/utils/footer";
import Navbar from "@/sections/utils/navbar";
import { ModalProvider } from "@/hooks/modal";

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
