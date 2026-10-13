import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/shared/WhatsAppFloatingButton";
import QuoteModal from "@/components/shared/QuoteModal";
import MobileEngagementPopup from "@/components/shared/MobileEngagementPopup";
import SplashScreen from "@/components/shared/SplashScreen";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import { COMPANY_INFO } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} | IT Infrastructure, Electronics, Office Equipment & Industrial Automation Tanzania`,
  description:
    "Ingram Enterprises Ltd delivers comprehensive technology solutions in Tanzania across four core portfolios: Industrial Automation, Computer Hardware & Software, Electronics Items, and Commercial Office Equipment.",
  keywords: [
    "IT Infrastructure Tanzania",
    "Computer Hardware and Software Dar Es Salaam",
    "Commercial Electronics Tanzania",
    "Office Equipment & Printers Tanzania",
    "Industrial Automation Tanzania",
    "Yokogawa Instrumentation Tanzania",
    "Next-Gen Firewall Security Tanzania",
    "APC Smart-UPS Tanzania",
    "HP Dell Lenovo Tanzania",
    "Ingram Enterprises Ltd",
  ],
  authors: [{ name: "Ingram Enterprises Ltd" }],
  creator: "Ingram Enterprises Ltd",
  metadataBase: new URL("https://ingram.co.tz"),
  openGraph: {
    type: "website",
    locale: "en_TZ",
    url: "https://ingram.co.tz",
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} | IT Infrastructure, Electronics, Office Equipment & Industrial Automation`,
    description:
      "Your trusted technology partner in Tanzania across four core portfolios: Industrial Automation, Computer Hardware & Software, Electronics, and Office Equipment.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Ingram Enterprises Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} | Technology Solutions Tanzania`,
    description:
      "Enterprise IT Infrastructure, Computer Hardware & Software, Electronics, Office Equipment & Industrial Automation.",
    images: ["/images/hero-bg.jpg"],
  },
  icons: {
    icon: "/images/logo-icon.svg",
    apple: "/images/logo-icon.svg",
  },
};

import AppShell from "@/components/layout/AppShell";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

