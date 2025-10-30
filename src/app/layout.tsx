import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

import "./globals.css";



export const metadata: Metadata = {
  title: "UWASE UTUJE Sandrine - Frontend Developer Portfolio",
  description: "Professional portfolio of UWASE UTUJE Sandrine, a passionate Frontend Developer specializing in modern web development, React, and user experience design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jost.className} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
