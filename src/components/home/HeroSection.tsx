"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { COMPANY_INFO } from "@/data/company";

export default function HeroSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative min-h-[580px] md:min-h-[660px] flex items-center overflow-hidden">
      {/* Hero Background Image - Bright, Vibrant, Clearly Visible with subtle animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-sunset-refinery.jpg"
          alt="Industrial Automation & Engineering Sunset Refinery"
          fill
          priority
          className="object-cover object-center scale-100 animate-pulse"
          style={{ animationDuration: "14s" }}
        />
        {/* Very subtle edge tint only to ensure seamless header contrast without darkening the beautiful sunset & engineer */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero Text Box - Crystal Clear Letters with Glass Frosted Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl bg-brand-navy/60 backdrop-blur-md border border-white/20 p-6 sm:p-9 md:p-10 rounded-2xl shadow-2xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Industrial Automation & Digital Technology in Tanzania</span>
          </div>

          {/* Headline - High contrast, sharp, clear */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.2] drop-shadow-md">
            Empowering Tanzania Industries with World-Class Automation & Industrial Technologies
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-gray-100 leading-relaxed font-medium drop-shadow-sm">
            {COMPANY_INFO.heroDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-bold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-brand transition-all duration-200 group"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-purple-tint text-brand-purple text-sm font-bold px-6 py-3.5 rounded-lg shadow-md transition-all duration-200"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
