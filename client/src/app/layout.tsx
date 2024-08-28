import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100','200','300','400', '500', '600','700','800','900'],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MPlcae",
  description: "Sri Lankas No.1 Online Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>{children}
        <Footer></Footer>
      </body>
    </html>
  );
}
