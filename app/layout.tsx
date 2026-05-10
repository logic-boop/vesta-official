import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"; 
import { SpeedInsights } from "@vercel/speed-insights/next"; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO & Brand Metadata - Engineered by LogicTech
export const metadata: Metadata = {
  title: "VESTA | Elite Transition & Bespoke Logistics",
  description: "Bespoke logistics and transition management for high-net-worth individuals. Engineered for discretion, precision, and excellence.",
  keywords: [
    "Luxury Logistics Nigeria",
    "Bespoke Relocation", 
    "High-Ticket Concierge Lagos",
    "Elite Asset Management",
    "VESTA Official"
  ],
  authors: [{ name: "LogicTech", url: "https://logictech-umber.vercel.app" }],
  metadataBase: new URL("https://vesta-official.vercel.app"),
  
  // High-Resolution Branding
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" }, 
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }, 
    ],
    shortcut: "/favicon.ico",
    apple: "/icon-512.png", 
  },

  openGraph: {
    title: "VESTA | Elite Transition Management",
    description: "Secure and discreet logistics for the global elite.",
    url: "https://vesta-official.vercel.app",
    siteName: "VESTA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VESTA | Elite Transition Management",
    description: "Engineered for discretion, precision, and excellence.",
  },
};

// Optimal Viewport Settings for Luxury UI
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}