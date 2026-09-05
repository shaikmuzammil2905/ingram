import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/shared/WhatsAppFloatingButton";
import QuoteModal from "@/components/shared/QuoteModal";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import { COMPANY_INFO } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} | Industrial Automation & Technology Solutions Tanzania`,
  description:
    "Ingram Enterprises Ltd delivers world-class industrial automation, process control, instrumentation and digital transformation solutions for industries in Tanzania.",
  keywords: [
    "Industrial Automation Tanzania",
    "Process Control Dar Es Salaam",
    "Yokogawa Instrumentation Tanzania",
    "SCADA PLC Systems Tanzania",
    "Digital Transformation East Africa",
    "Industrial IoT Tanzania",
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
    title: `${COMPANY_INFO.name} | Industrial Automation & Technology Solutions Tanzania`,
    description:
      "Empowering Tanzania's industries with world-class automation, process control, Yokogawa measurement and digital solutions.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Ingram Enterprises Industrial Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} | Industrial Automation Tanzania`,
    description:
      "World-class automation, measurement and digital transformation solutions for Tanzanian industries.",
    images: ["/images/hero-bg.jpg"],
  },
  icons: {
    icon: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased">
        <QuoteModalProvider>
          <TopBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
          <QuoteModal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
