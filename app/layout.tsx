//project wrapper for all pages
import type { Metadata } from "next";
import { Geist, Geist_Mono, Rethink_Sans } from "next/font/google";
import "./globals.css";

const font = Rethink_Sans({
  weight:['400','500','600','700','800'],
  subsets:['latin']
})
 
export const metadata: Metadata = {
  title: "Chloe's Website",
  description: "Chloe's Webiste using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
