"use client";

import React from "react";
import { usePathname } from "next/navigation";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/shared/WhatsAppFloatingButton";
import QuoteModal from "@/components/shared/QuoteModal";
import MobileEngagementPopup from "@/components/shared/MobileEngagementPopup";
import SplashScreen from "@/components/shared/SplashScreen";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import { AdminAuthProvider } from "@/context/AdminAuthContext";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <AdminAuthProvider>
      <QuoteModalProvider>
        {isAdminRoute ? (
          <div className="min-h-screen bg-gray-50">{children}</div>
        ) : (
          <>
            <SplashScreen />
            <TopBar />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloatingButton />
            <MobileEngagementPopup />
            <QuoteModal />
          </>
        )}
      </QuoteModalProvider>
    </AdminAuthProvider>
  );
}
