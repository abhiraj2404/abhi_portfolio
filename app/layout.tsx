import Navigation from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhiraj Chauhan",
  description:
    "A passionate full-stack and Web3 developer with expertise in building scalable web applications and decentralized solutions. I thrive on innovation, bringing ideas to life with clean code and cutting-edge blockchain technologies.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
