import type { ReactNode } from "react";
import type { Viewport } from "next";
import localFont from "next/font/local";
import { siteMetadata } from "@/lib/seo/metadata";
import "./globals.css";
const manrope = localFont({
  src: [
    {
      path: "./fonts/manrope-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/manrope-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/manrope-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});
export const metadata = siteMetadata;
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#07152f",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={manrope.variable}>
      <body>
        <a className="skip-link" href="#top">
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
