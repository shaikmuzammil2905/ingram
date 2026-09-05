"use client";

import React from "react";
import Image from "next/image";
import { Target, Compass, Eye, ArrowRight, ShieldCheck, Award, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function TrustIndicatorRow() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: REPLACING image copy 3.png with interactive Company / 7+ Years / Get a Quote Card */}
          <div className="bg-gradient-to-br from-brand-purple-tint/80 to-white rounded-xl p-6 border border-brand-purple/20 shadow-brand-card hover:shadow-brand transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="relative h-9 w-40">
                  <Image
                    src="/images/logo.png"
                    alt="Ingram Enterprises Ltd"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="flex items-center gap-1 bg-brand-purple text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                  <Award className="w-3.5 h-3.5" />
                  <span>7+ Yrs Exp</span>
                </div>
              </div>

              <div className="text-sm font-semibold text-brand-purple uppercase tracking-wider mb-1">
                Local Expertise. Global Technology.
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Tanzania&apos;s trusted engineering partner for industrial automation, Yokogawa instrumentation, and plant digital transformation.
              </p>
            </div>

            {/* Interactive "Get a Quote" Trigger -> Submits directly to WhatsApp */}
            <div className="pt-5 border-t border-brand-purple/15 mt-4">
              <button
                onClick={() => openQuoteModal()}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all duration-200 group-hover:shadow-brand"
              >
                <MessageCircle className="w-4 h-4 text-brand-purple-tint" />
                <span>Get a Quote via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
              <div className="flex items-center justify-between text-[11px] text-gray-500 mt-2 px-1">
                <span>Dar Es Salaam, Tanzania</span>
                <span className="font-medium text-brand-purple">{COMPANY_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Mission (Exact design & text from image.png) */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-brand-card hover:shadow-brand transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border border-brand-purple/30 bg-brand-purple-tint flex items-center justify-center text-brand-purple">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 mt-4 text-xs font-semibold text-brand-purple flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Dedicated to Industrial Reliability & Safety</span>
            </div>
          </div>

          {/* Card 3: Vision (Exact design & text from image.png) */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-brand-card hover:shadow-brand transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border border-brand-purple/30 bg-brand-purple-tint flex items-center justify-center text-brand-purple">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 mt-4 text-xs font-semibold text-brand-purple flex items-center gap-1">
              <Compass className="w-4 h-4" />
              <span>Advancing Tanzania&apos;s Industrial Future</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
