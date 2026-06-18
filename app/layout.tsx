import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BottomNavBar from "@/components/BottomNavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechStore - Premium Products",
  description: "Discover and shop premium tech products with amazing animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-black overflow-x-hidden pb-20 md:pb-0">
        {children}
        <BottomNavBar />
      </body>
    </html>
  );
}
