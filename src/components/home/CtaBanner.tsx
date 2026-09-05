"use client";

import React from "react";
import Link from "next/link";
import { Headphones, ArrowRight, PhoneCall } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export default function CtaBanner() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="bg-brand-purple text-white py-12 md:py-14 border-t border-brand-purple-light/50 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-purple-light/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-brand-navy/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Title & Icon */}
            <div className="flex items-center gap-5 text-center md:text-left">
              <div className="w-14 h-14 shrink-0 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white shadow-inner hidden sm:flex">
                <Headphones className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
                  Ready to Transform Your Operations?
                </h3>
                <p className="text-xs sm:text-sm text-purple-100 mt-1 max-w-xl">
                  Let&apos;s build a smarter, safer and more efficient future for your industry.
                </p>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-purple-tint text-brand-purple text-sm font-bold px-7 py-3 rounded-lg shadow-md transition-all duration-200 group active:scale-95"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-200"
              >
                <span>Office Details</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
