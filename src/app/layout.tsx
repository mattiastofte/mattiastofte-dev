"use client";

import "./globals.css";
import { useRef, useEffect } from "react";
import Cursor from "@/components/cursor/Cursor";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Plaster } from "next/font/google";

import localFont from "next/font/local";

const circularStd = localFont({
  src: [
    {
      path: "./../../public/fonts/CircularStd/CircularStd-Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../public/fonts/CircularStd/CircularStd-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../public/fonts/CircularStd/CircularStd-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../../public/fonts/CircularStd/CircularStd-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-circular-std",
});

const plaster = Plaster({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plaster",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${circularStd.className} --font-circular-std ${plaster.variable} bg-white`}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
