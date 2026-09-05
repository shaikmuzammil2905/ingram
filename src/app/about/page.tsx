"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle, ArrowRight, ShieldCheck, MapPin, Target, Eye } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CoreValuesSection from "@/components/home/CoreValuesSection";
import CtaBanner from "@/components/home/CtaBanner";
import { COMPANY_INFO, WHY_CHOOSE_US } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function AboutPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div>
      {/* Subpage Header Banner */}
      <div className="bg-brand-navy text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/hero-bg.jpg"
            alt="Ingram Plant"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-brand-purple-tint mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>7+ Years of Engineering Excellence</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              About Ingram Enterprises Ltd
            </h1>
            <p className="text-base sm:text-lg text-gray-200 mt-4 leading-relaxed">
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

            {/* Right Image Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/service-process-control.jpg"
                  alt="Industrial Engineering Operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-2xl font-black">7+ Years</div>
                  <div className="text-xs text-brand-purple-tint uppercase tracking-wider">
                    Industrial Automation & Measurement in Tanzania
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Feature Cards */}
      <section className="py-16 bg-brand-gray border-t border-b border-gray-100">
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
