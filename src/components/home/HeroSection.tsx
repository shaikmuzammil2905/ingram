"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { COMPANY_INFO } from "@/data/company";

export default function HeroSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative min-h-[560px] md:min-h-[640px] flex items-center bg-brand-navy-dark overflow-hidden">
      {/* Background Image with Dark Purple/Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Industrial Automation and Plant Infrastructure"
          fill
          priority
          className="object-cover object-center opacity-45 scale-105 transform transition-transform duration-1000"
        />
        {/* Dark Navy and Deep Purple Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy-dark/90 to-brand-purple/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-purple/40 via-transparent to-brand-navy-dark/70" />
      </div>

      {/* Floating Geometric Polygon Accent (Faceted Diamond Motif from Logo) */}
      <div className="absolute right-[-4%] top-1/2 -translate-y-1/2 w-[340px] md:w-[500px] h-[340px] md:h-[500px] pointer-events-none opacity-25 md:opacity-40 z-0 select-none">
        <svg viewBox="0 0 200 200" className="w-full h-full text-brand-purple-tint filter drop-shadow-2xl animate-pulse" style={{ animationDuration: '8s' }}>
          <polygon points="100,10 170,50 170,140 100,190 30,140 30,50" fill="none" stroke="currentColor" strokeWidth="2" />
          <polygon points="100,30 150,60 150,130 100,170 50,130 50,60" fill="currentColor" fillOpacity="0.12" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="30" y1="50" x2="170" y2="140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="30" y1="140" x2="170" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-brand-purple-tint shadow-inner">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
            <span>Industrial Automation & Digital Technology in Tanzania</span>
          </div>

          {/* Headline - Exact text from image.png */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.15]">
            Empowering Tanzania Industries with World-Class Automation & Industrial Technologies
          </h1>

          {/* Supporting Text - Exact text from image.png */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal max-w-2xl">
            {COMPANY_INFO.heroDescription}
          </p>

          {/* Action Buttons - Exact layout from image.png */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-base font-semibold px-7 py-3.5 rounded-lg shadow-lg hover:shadow-brand transition-all duration-200 group"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/80 hover:border-white text-base font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 group"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
