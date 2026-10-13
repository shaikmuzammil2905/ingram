import React from "react";
import HeroSection from "@/components/home/HeroSection";
import FourPortfoliosSection from "@/components/home/FourPortfoliosSection";
import TrustIndicatorRow from "@/components/home/TrustIndicatorRow";
import CoreValuesSection from "@/components/home/CoreValuesSection";
import ServicesSection from "@/components/home/ServicesSection";
import PartnerSection from "@/components/home/PartnerSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section representing all four portfolios */}
      <HeroSection />

      {/* 2. Four Official Portfolios Section (Industrial Automation, Computer HW & SW, Electronics, Office Equipment) */}
      <FourPortfoliosSection />

      {/* 3. Trust Indicators & Mission/Vision Row */}
      <TrustIndicatorRow />

      {/* 4. 8 Core Values Grid */}
      <CoreValuesSection />

      {/* 5. Turnkey Engineering & Automation Capabilities */}
      <ServicesSection />

      {/* 6. Technology Alliances & 12 Brands We Work With */}
      <PartnerSection />

      {/* 7. Ready to Transform Your Operations Banner */}
      <CtaBanner />
    </>
  );
}
