import type { Metadata } from "next";
import { League_Spartan, Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const spartan = League_Spartan({subsets: ['latin'], weight: '400', variable: '--font-sans'});
const jakarta = Plus_Jakarta_Sans({subsets: ['latin'], variable: '--font-serif'});

export const metadata: Metadata = {
  title: "Harshadeep Kambhampati",
  description: "Welcome to my personal website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={twMerge(jakarta.variable, "bg-background text-text antialiased font-serif")}> {children}</body>
    </html>
  );
}
