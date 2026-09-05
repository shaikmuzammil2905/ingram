import React from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustIndicatorRow from "@/components/home/TrustIndicatorRow";
import CoreValuesSection from "@/components/home/CoreValuesSection";
import ServicesSection from "@/components/home/ServicesSection";
import PartnerSection from "@/components/home/PartnerSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section matching image.png & image copy.png */}
      <HeroSection />

      {/* 2. Trust Indicators & Mission/Vision Row (Replaces image copy 3 with interactive quote card) */}
      <TrustIndicatorRow />

      {/* 3. 8 Core Values Grid matching image.png */}
      <CoreValuesSection />

      {/* 4. Our Services (Industrial Automation, Process Control, Instrumentation, Digital Transformation) */}
      <ServicesSection />

      {/* 5. Technology Partner: Yokogawa */}
      <PartnerSection />

      {/* 6. Ready to Transform Your Operations Banner */}
      <CtaBanner />
    </>
  );
}
