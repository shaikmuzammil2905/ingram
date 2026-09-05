"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { COMPANY_INFO } from "@/data/company";

export default function HeroSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative min-h-[580px] md:min-h-[660px] flex items-center overflow-hidden">
      {/* Hero Background Image - Sunset Refinery with Engineer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-sunset-refinery.jpg"
          alt="Industrial Automation & Engineering Sunset Refinery"
          fill
          priority
          className="object-cover object-[70%_center] md:object-center scale-100"
        />
        {/* Soft directional left vignette for crisp text contrast without any dark box */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content - Strictly Left Aligned, Fluid Motion Reveal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-xl lg:max-w-2xl text-left space-y-5 sm:space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold uppercase tracking-wider text-white shadow-md [text-shadow:_0_1px_2px_rgba(0,0,0,0.8)]"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shrink-0" />
            <span className="truncate">Industrial Automation & Digital Technology</span>
          </motion.div>

          {/* Headline - Crystal Clear, Left-Aligned, High Visibility */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.2] [text-shadow:_0_2px_12px_rgba(0,0,0,0.9),_0_1px_3px_rgba(0,0,0,0.95)]"
          >
            Empowering Tanzania Industries with World-Class Automation & Industrial Technologies
          </motion.h1>

          {/* Supporting Text - Crisp and highly legible */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed font-medium max-w-xl [text-shadow:_0_1px_6px_rgba(0,0,0,0.95)]"
          >
            {COMPANY_INFO.heroDescription}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 sm:pt-4"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-lg shadow-xl hover:shadow-brand transition-all duration-200 group"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-purple-tint text-brand-purple text-sm sm:text-base font-bold px-7 py-3.5 rounded-lg shadow-xl transition-all duration-200 active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
