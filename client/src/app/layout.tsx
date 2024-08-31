"use client";

import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/navbar";
import { Toaster } from "react-hot-toast";
import { Providers } from "./Provider";
import Heading from "@/components/ui/Heading";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        <Providers>
          <Heading
            title="MPlace"
            description="Sri Lanka's Number 01 Online market place."
            keywords="Marketplace, Sri Lanaka"
          />
          <Navbar title="Mplace" />
          {children}
          <Footer />
          <Toaster position="top-center" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  );
}
