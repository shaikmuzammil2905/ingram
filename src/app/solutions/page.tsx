"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Network,
  CheckCircle2,
  Cpu,
  ArrowRight,
  TrendingUp,
  Activity,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import { SOLUTIONS_LIST } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function SolutionsPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div>
      {/* Light Blue Grand & Decent Header Banner */}
      <div className="bg-gradient-to-r from-[#EBF3FC] via-[#F2F7FF] to-[#E4EFFC] text-brand-navy py-14 md:py-20 border-b border-[#D5E5F7] relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Solutions" }]} />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-3 shadow-sm border border-brand-purple/20">
              <Cpu className="w-3.5 h-3.5" />
              <span>Intelligent Industrial Architectures</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy">
              Industrial Technology Solutions
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mt-3 leading-relaxed font-medium">
              Bridging operational technology (OT) with enterprise digital systems to optimize plant performance, mitigate risks, and empower data-driven decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Detailed Directory with Auto-Generated High-Tech Images & Light Blue Card BG */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SOLUTIONS_LIST.map((sol, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={sol.id}
                id={sol.id}
                className="p-6 sm:p-8 md:p-10 rounded-2xl border border-[#D5E6F7] shadow-sm hover:shadow-brand transition-all duration-300 bg-gradient-to-br from-[#F5F9FF] to-white"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-blue-100">
                  {/* Solution Image (5 cols) */}
                  <div
                    className={`lg:col-span-5 relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-md bg-gray-100 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Solution Text (7 cols) */}
                  <div
                    className={`lg:col-span-7 space-y-3 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                      Solution Domain
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {sol.title}
                    </h2>
                    <p className="text-sm font-semibold text-brand-purple">
                      {sol.tagline}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-1">
                      {sol.description}
                    </p>

                    <div className="pt-3">
                      <button
                        onClick={() => openQuoteModal(sol.title)}
                        className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors"
                      >
                        <span>Request Proposal</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Benefits & Use Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  {/* Benefits */}
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-brand-purple" />
                      <span>Operational Benefits</span>
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

                  {/* Practical Use Cases */}
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-brand-purple" />
                      <span>Tanzania Field Use Cases</span>
                    </h3>
                    <div className="space-y-2">
                      {sol.useCases.map((u, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0 mt-2" />
                          <span>{u}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
