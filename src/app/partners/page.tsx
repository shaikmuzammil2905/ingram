"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Gauge,
  SlidersHorizontal,
  Network,
  Cpu,
  ArrowRight,
  Sparkles,
  Award,
  Globe,
  Zap,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/ScrollReveal";
import { PARTNERS_LIST, PartnerBrand, COMPANY_INFO } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function PartnersPage() {
  const { openQuoteModal } = useQuoteModal();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Brands & Tech (12)" },
    { id: "computing", label: "Enterprise Computing (HP, Dell, Lenovo)" },
    { id: "software-security", label: "Software & Cyber Security" },
    { id: "printing-power", label: "Office Printing & Power (APC, Canon, etc.)" },
    { id: "automation", label: "Industrial Automation (Yokogawa)" },
  ];

  const filteredPartners = PARTNERS_LIST.filter((p) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "computing") return ["hp", "dell", "lenovo"].includes(p.id);
    if (selectedFilter === "software-security") return ["microsoft", "autocad", "firewall", "sophos"].includes(p.id);
    if (selectedFilter === "printing-power") return ["epson", "apc", "canon", "kyocera"].includes(p.id);
    if (selectedFilter === "automation") return ["yokogawa"].includes(p.id);
    return true;
  });

  const yokogawaCategories = [
    {
      title: "Field Instrumentation & Measurement",
      desc: "Pressure transmitters (DPharp), magnetic and Coriolis flowmeters, radar level sensors, and temperature sensors known worldwide for precision and zero drift.",
      icon: Gauge,
    },
    {
      title: "Distributed Control & Safety Systems (DCS & SIS)",
      desc: "CENTUM VP distributed control systems and ProSafe-RS safety instrumented systems providing 99.99999% availability for critical industrial infrastructure.",
      icon: SlidersHorizontal,
    },
    {
      title: "Industrial IoT & Remote Telemetry",
      desc: "Sushi Sensor wireless IIoT vibration and temperature monitors, LoRaWAN gateways, and plant asset monitoring for predictive maintenance.",
      icon: Network,
    },
    {
      title: "Plant Information Management (Exaquantum)",
      desc: "Real-time plant historians, alarm management (Exaquantum/ARA), and energy management software bridging operational equipment with corporate enterprise systems.",
      icon: Cpu,
    },
  ];

  return (
    <div>
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-brand-purple via-[#351E6B] to-brand-navy text-white py-14 md:py-20 border-b border-brand-purple-light/40 relative overflow-hidden">
        {/* Subtle geometric polygon decorative motif from logo */}
        <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-20 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-white">
            <polygon points="100,10 170,50 170,140 100,190 30,140 30,50" fill="none" stroke="currentColor" strokeWidth="2" />
            <polygon points="100,30 150,60 150,130 100,170 50,130 50,60" fill="currentColor" fillOpacity="0.15" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Partners" }]} theme="dark" />
          <div className="max-w-3xl mt-4 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-brand-purple-tint text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>World-Class Technology Vendors & Alliances</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Brands & Technologies We Work With
            </h1>
            <p className="text-base sm:text-lg text-purple-100 leading-relaxed font-normal">
              We collaborate with premier enterprise IT vendors, software publishers, document solutions manufacturers, and industrial automation pioneers to deliver authentic, warranted technology solutions in Tanzania.
            </p>
          </div>
        </div>
      </div>

      {/* Trust Highlights Row */}
      <div className="bg-brand-gray/60 border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-white rounded-xl border border-gray-200/80 shadow-2xs">
              <div className="text-xl sm:text-2xl font-extrabold text-brand-purple">12+</div>
              <div className="text-xs text-gray-600 font-medium">Official Brands & Tech Domains</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-gray-200/80 shadow-2xs">
              <div className="text-xl sm:text-2xl font-extrabold text-brand-purple">100%</div>
              <div className="text-xs text-gray-600 font-medium">Genuine Products & Licenses</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-gray-200/80 shadow-2xs">
              <div className="text-xl sm:text-2xl font-extrabold text-brand-purple">7+ Yrs</div>
              <div className="text-xs text-gray-600 font-medium">Deployment Track Record</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-gray-200/80 shadow-2xs">
              <div className="text-xl sm:text-2xl font-extrabold text-brand-purple">24/7</div>
              <div className="text-xs text-gray-600 font-medium">Tanzania SLA & Engineering Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. All 12 Brands & Technologies Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy uppercase tracking-tight">
              Technology Ecosystem & Vendor Directory
            </h2>
            <div className="w-14 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />
            <p className="text-sm text-gray-600 mt-2.5">
              Explore the 12 world-class brands and cybersecurity technologies supporting our four official business portfolios.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
                  selectedFilter === tab.id
                    ? "bg-brand-purple text-white shadow-xs"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <ScrollStagger staggerDelay={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPartners.map((partner: PartnerBrand) => (
              <ScrollStaggerItem key={partner.id} direction="up" distance={20} className="flex">
                <div className="w-full bg-white rounded-2xl p-6 border border-gray-200/90 shadow-2xs hover:shadow-brand hover:-translate-y-1 hover:border-brand-purple/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between gap-1 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">
                        {partner.badge || partner.category}
                      </span>
                      {partner.isCategory ? (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                          Tech Category
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-purple-50 text-brand-purple">
                          Authorized
                        </span>
                      )}
                    </div>

                    {/* Logo Area */}
                    <div className="relative h-16 w-full flex items-center justify-center p-3 bg-gray-50/80 rounded-xl group-hover:bg-brand-purple-tint/30 transition-colors">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Details */}
                    <div className="mt-4 space-y-1.5">
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-brand-purple transition-colors">
                        {partner.name}
                      </h3>
                      <div className="text-[11px] font-semibold text-brand-purple">
                        {partner.category}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed pt-1">
                        {partner.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center justify-between text-xs">
                    <button
                      onClick={() => openQuoteModal(partner.name)}
                      className="text-xs font-bold text-brand-purple hover:underline"
                    >
                      Enquire Products
                    </button>

                    {partner.website ? (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-purple flex items-center gap-1"
                        aria-label={`Visit ${partner.name} official site`}
                      >
                        <span>Official Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href="/ict-hardware/security-surveillance"
                        className="text-gray-400 hover:text-brand-purple flex items-center gap-1"
                      >
                        <span>View Security</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </div>
      </section>

      {/* 2. Featured Strategic Industrial Automation Partner: Yokogawa */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal direction="up" distance={25}>
            <div className="bg-gradient-to-br from-[#F5F8FE] to-white rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Details */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Clean Yokogawa SVG Logo */}
                  <div className="relative h-12 w-64">
                    <Image
                      src="/images/partners/yokogawa.svg"
                      alt="Yokogawa Partner Logo"
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                    Yokogawa Industrial Automation & Instrumentation
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Ingram Enterprises Ltd is proud to deliver state-of-the-art Yokogawa process measurement, distributed control systems (CENTUM VP), and safety instrumentation to industrial plants across Tanzania.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Yokogawa is recognized globally as a pioneer in measurement, control, and information technologies. Together with our Tanzanian engineering presence, we provide local plants with seamless access to world-class precision instruments, rapid calibration, and technical consultation.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href="https://www.yokogawa.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-xs transition-colors"
                    >
                      <span>Explore Yokogawa Global</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => openQuoteModal("Yokogawa Instrumentation & Solutions")}
                      className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-brand-purple text-gray-800 text-sm font-semibold px-5 py-3 rounded-xl transition-colors shadow-2xs"
                    >
                      <span>Enquire on Yokogawa Products</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Visual Badge */}
                <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs space-y-4">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                    Yokogawa Technology Pillars
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                      <span>DPharp Digital Resonant Sensor Technology</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                      <span>CENTUM Distributed Control Architectures</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                      <span>Rotamass Total Insight Coriolis Flowmeters</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                      <span>Exaquantum Plant Information Historian</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                      <span>Full Local Calibration & Sizing Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Yokogawa 4 Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {yokogawaCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs hover:shadow-brand hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-purple-tint flex items-center justify-center text-brand-purple">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <button
                      onClick={() => openQuoteModal(`Yokogawa - ${cat.title}`)}
                      className="text-xs font-bold text-brand-purple hover:underline"
                    >
                      Request Specs
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Platform Contact / CTA */}
      <CtaBanner />
    </div>
  );
}
