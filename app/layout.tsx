import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/header/Navbar";
import Footer from "@/components/layouts/footer/Footer";
import StarsCanvas from "@/components/particles/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio de Bruno Estevan",
  description: "Portfolio de Bruno Estevan ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      > 
          <StarsCanvas /> 
         <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
