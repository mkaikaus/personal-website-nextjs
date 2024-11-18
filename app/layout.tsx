import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Alegreya } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });
const alegreya = Alegreya({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Maleeha kaikaus",
  description: "Created with Next.js, TypeScript and Deployed on Github Pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="logo.png" sizes="any" />
      </head>
      <body className={alegreya.className}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider></body>
    </html>
  );
}
