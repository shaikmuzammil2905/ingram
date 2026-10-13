"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Network,
  CheckCircle2,
  Cpu,
  ArrowRight,
  TrendingUp,
  Activity,
  Laptop,
  Tv,
  Printer,
  Cog,
  Sparkles,
  ShieldCheck,
  Zap,
  ExternalLink,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/ScrollReveal";
import { PORTFOLIO_SOLUTIONS, SOLUTIONS_LIST } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function SolutionsPage() {
  const { openQuoteModal } = useQuoteModal();
  const [activeTab, setActiveTab] = useState<string>("all");

  const solutionPills = [
    { id: "all", label: "All Solutions (4 Portfolios)" },
    { id: "industrial-automation", label: "Industrial Automation" },
    { id: "computer-hardware-software", label: "Computer HW & Software" },
    { id: "electronics", label: "Electronics Solutions" },
    { id: "office-equipment", label: "Office Equipment" },
    { id: "specialized-iiot", label: "Advanced Plant IoT (6)" },
  ];

  const getSolutionIcon = (id: string) => {
    switch (id) {
      case "industrial-automation":
        return <Cog className="w-6 h-6 text-brand-purple" />;
      case "computer-hardware-software":
        return <Laptop className="w-6 h-6 text-brand-purple" />;
      case "electronics":
        return <Tv className="w-6 h-6 text-brand-purple" />;
      case "office-equipment":
        return <Printer className="w-6 h-6 text-brand-purple" />;
      default:
        return <Cpu className="w-6 h-6 text-brand-purple" />;
    }
  };

  const displayedSolutions = PORTFOLIO_SOLUTIONS.filter((sol) => {
    if (activeTab === "all" || activeTab === "specialized-iiot") return true;
    return sol.id === activeTab;
  });

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
          <Breadcrumbs items={[{ label: "Solutions" }]} theme="dark" />
          <div className="max-w-3xl mt-4 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-brand-purple-tint text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Business Offerings</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Integrated Enterprise & Industrial Solutions
            </h1>
            <p className="text-base sm:text-lg text-purple-100 leading-relaxed font-normal">
              Empowering organizations across Tanzania with end-to-end architectures spanning industrial automation, enterprise computer hardware & software, commercial electronics, and workplace office equipment.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Quick Anchor Navigation */}
      <div className="sticky top-[60px] sm:top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {solutionPills.map((pill) => (
              <button
                key={pill.id}
                onClick={() => {
                  setActiveTab(pill.id);
                  if (pill.id !== "all") {
                    const el = document.getElementById(pill.id);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all ${
                  activeTab === pill.id
                    ? "bg-brand-purple text-white shadow-xs"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 1. FOUR OFFICIAL PORTFOLIO SOLUTIONS (MAIN DIRECTORY) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy uppercase tracking-tight">
              The Four Official Solutions Pillars
            </h2>
            <div className="w-14 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />
            <p className="text-sm text-gray-600 mt-2.5">
              Structured engineering and technology architectures engineered for reliability, security, and long-term performance.
            </p>
          </div>

          {displayedSolutions.map((sol, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <ScrollReveal key={sol.id} direction="up" distance={30}>
                <div
                  id={sol.id}
                  className="p-6 sm:p-8 md:p-10 rounded-3xl border border-[#D5E6F7] shadow-sm hover:shadow-brand transition-all duration-300 bg-gradient-to-br from-[#F5F9FF] via-white to-white scroll-mt-28"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-blue-100">
                    {/* Solution Image (5 cols) */}
                    <div
                      className={`lg:col-span-5 relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md bg-gray-100 ${
                        isReversed ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <Image
                        src={sol.image}
                        alt={sol.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
                        {sol.badge}
                      </div>
                    </div>

                    {/* Solution Text (7 cols) */}
                    <div
                      className={`lg:col-span-7 space-y-4 ${
                        isReversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-brand-purple-tint flex items-center justify-center shrink-0">
                          {getSolutionIcon(sol.id)}
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                            {sol.category}
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                            {sol.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm font-semibold text-brand-purple">
                        {sol.tagline}
                      </p>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {sol.description}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Link
                          href={sol.href}
                          className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl shadow-xs transition-colors"
                        >
                          <span>Explore Domain Catalog</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <button
                          onClick={() => openQuoteModal(sol.quoteService)}
                          className="inline-flex items-center gap-2 bg-white hover:bg-brand-purple-tint text-brand-purple border border-brand-purple/30 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-2xs"
                        >
                          <span>Request Proposal</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Operational Benefits & Technical Scope Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    {/* Operational Benefits */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs space-y-3">
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-brand-purple" />
                        <span>Key Operational Benefits</span>
                      </h3>
                      <div className="space-y-2">
                        {sol.benefits.map((b, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Scope & Capabilities */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs space-y-3">
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-brand-purple" />
                        <span>Core Capabilities & Scope</span>
                      </h3>
                      <div className="space-y-2">
                        {sol.keyCapabilities.map((u, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0 mt-2" />
                            <span>{u}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* 2. SPECIALIZED INDUSTRIAL IOT & PLANT DIGITALIZATION (RETAINED FOR DEPTH) */}
      <section id="specialized-iiot" className="py-16 md:py-20 bg-gray-50 border-t border-gray-200 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-purple text-xs font-bold uppercase tracking-wider mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>Plant Floor Digitalization</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight uppercase">
              Specialized Industrial IoT & Data Architectures
            </h2>
            <div className="w-14 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />
            <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
              For processing plants, mines, utilities, and factories requiring advanced OT-to-IT connectivity, condition monitoring, and plant historians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS_LIST.map((subSol) => (
              <div
                key={subSol.id}
                className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-2xs hover:shadow-brand hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="relative h-40 w-full rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={subSol.image}
                      alt={subSol.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    {subSol.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-purple">
                    {subSol.tagline}
                  </p>
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {subSol.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => openQuoteModal(subSol.title)}
                    className="text-xs font-bold text-brand-purple hover:underline"
                  >
                    Request Specs
                  </button>
                  <Link
                    href="/services/digital-transformation"
                    className="text-xs font-semibold text-gray-500 hover:text-brand-purple flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Portfolio Project Quotation Banner */}
      <CtaBanner />
    </div>
  );
}
