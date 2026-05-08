import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO & Brand Metadata
export const metadata: Metadata = {
  title: "VESTA | Elite Relocation & Management",
  description: "Bespoke transition and logistics solutions for high-net-worth individuals. Engineered for discretion, precision, and excellence.",
  keywords: ["Relocation Nigeria", "Luxury Concierge Lagos", "Bespoke Logistics", "Elite Management"],
  authors: [{ name: "LogicTech", url: "https://logictech-umber.vercel.app" }],
  icons: {
    icon: "/logo.ico",
  },
};

// Ensures the mobile browser doesn't zoom in on input fields
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="bg-vesta-black min-h-full flex flex-col selection:bg-vesta-gold selection:text-vesta-black">
        {children}
      </body>
    </html>
  );
}