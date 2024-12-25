import { Providers } from "./providers";
import Navigation from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navigation />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
