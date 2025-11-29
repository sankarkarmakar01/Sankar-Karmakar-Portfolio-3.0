import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { socialLinks } from "@/data/socialLinksData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sankar Karmakar | Portfolio",
    template: "%s | Sankar Karmakar",
  },
  description:
    "A fully responsive portfolio website developed using Next.js, TypeScript, and Tailwind CSS, featuring optimized performance, reusable components, and smooth user interactions by Sankar Karmakar.",
  keywords: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Modern Portfolio",
    "Portfolio",
    "Sankar Karmakar Portfolio",
    "Sankar",
    "Sankar Karmakar",
    "Web Development",
  ],
  icons:{
    icon:"/images/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navbar socialLinks={socialLinks} />
        </header>
        {children}
      </body>
    </html>
  );
}
