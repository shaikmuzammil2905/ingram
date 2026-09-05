"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle, ArrowRight, ShieldCheck, Target, Eye, Maximize2, X } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CoreValuesSection from "@/components/home/CoreValuesSection";
import CtaBanner from "@/components/home/CtaBanner";
import { COMPANY_INFO, WHY_CHOOSE_US } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function AboutPage() {
  const { openQuoteModal } = useQuoteModal();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div>
      {/* Light Blue Grand & Decent Header Banner matching image copy 13 */}
      <div className="bg-gradient-to-r from-[#EBF3FC] via-[#F2F7FF] to-[#E4EFFC] text-brand-navy py-14 md:py-20 border-b border-[#D5E5F7] relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-3 shadow-sm border border-brand-purple/20">
              <Award className="w-3.5 h-3.5" />
              <span>7+ Years of Engineering Excellence</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy">
              About Ingram Enterprises Ltd
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mt-3 leading-relaxed font-medium">
              {COMPANY_INFO.tagline} We combine local knowledge and customer understanding with world-class industrial technologies and solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Main About Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                Who We Are
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight">
                Empowering Tanzanian Industries with Proven Automation & Digital Measurement
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Established with a vision to modernize East Africa&apos;s industrial landscape, <strong>Ingram Enterprises Ltd</strong> has built an unwavering reputation over 7 years for delivering rigorous, world-class industrial automation, process control, and Yokogawa instrumentation.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                We bridge the critical gap between international technology manufacturers and Tanzanian manufacturing plants, refineries, mines, and utilities. Our engineers understand the operational realities of local industry—delivering systems designed for resilience, maximum uptime, and operator safety.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Headquartered in Dar Es Salaam, Tanzania",
                  "Over 7 Years of Field Engineering Track Record",
                  "Certified Yokogawa Technology Integration",
                  "Turnkey DCS, PLC & SCADA Implementations",
                  "Rapid Emergency On-Site Engineering Dispatch",
                  "Future-Ready IIoT & AI Digital Transformation",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openQuoteModal()}
                  className="bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-200"
                >
                  Request a Consultation
                </button>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:underline"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Box with image copy 12 (Engineer with laptop) + Popup Modal */}
            <div className="lg:col-span-5 relative">
              <div
                onClick={() => setLightboxOpen(true)}
                className="relative h-72 sm:h-80 md:h-[400px] lg:h-[440px] rounded-2xl overflow-hidden shadow-xl border-4 border-white cursor-pointer group transition-all duration-300 hover:shadow-brand"
              >
                <Image
                  src="/images/about-engineer-laptop.jpg"
                  alt="Ingram Plant Engineer with Laptop & Robotics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-black/20 group-hover:from-brand-navy/90 transition-colors" />

                {/* Click to Enlarge Badge */}
                <div className="absolute top-4 right-4 bg-white/80 hover:bg-white text-brand-navy p-2 rounded-full shadow-md backdrop-blur-sm transition-transform group-hover:scale-110">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-3xl font-black">7+ Years</div>
                  <div className="text-xs font-semibold text-brand-purple-tint uppercase tracking-wider mt-1">
                    Industrial Automation & Measurement in Tanzania
                  </div>
                  <div className="text-[11px] text-white/80 mt-1 flex items-center gap-1">
                    <span>Click to expand image preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Popup Modal for the Image */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-[60vh] sm:h-[70vh]">
              <Image
                src="/images/about-engineer-laptop.jpg"
                alt="Ingram Automation Engineer Preview"
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 bg-gray-50 text-center">
              <h4 className="text-base font-bold text-gray-900">
                Ingram Enterprises Ltd - On-Site Industrial Engineering & Digital Telemetry
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                Robotics, Distributed Automation and IoT Telemetry deployment across Tanzanian plants.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mission & Vision Feature Cards */}
      <section className="py-16 bg-gradient-to-b from-[#F0F6FF] to-white border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                &ldquo;{COMPANY_INFO.mission}&rdquo;
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                &ldquo;{COMPANY_INFO.vision}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <CoreValuesSection />

      {/* Why Choose Ingram */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight uppercase">
              Why Choose Ingram Enterprises?
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-3 rounded-full" />
            <p className="text-sm text-gray-600 mt-3">
              Six foundational pillars that make Ingram Enterprises the trusted partner for top-tier industrial organizations in Tanzania.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-purple/40 hover:shadow-brand transition-all duration-200 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-purple text-white flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
