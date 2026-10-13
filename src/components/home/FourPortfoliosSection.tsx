"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Cog,
  Laptop,
  Tv,
  Printer,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { FOUR_PORTFOLIOS } from "@/data/company";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/ScrollReveal";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function FourPortfoliosSection() {
  const { openQuoteModal } = useQuoteModal();

  const getPortfolioIcon = (id: string) => {
    switch (id) {
      case "industrial-automation":
        return <Cog className="w-5 h-5 text-brand-purple" />;
      case "computer-hardware-software":
        return <Laptop className="w-5 h-5 text-brand-purple" />;
      case "electronics":
        return <Tv className="w-5 h-5 text-brand-purple" />;
      case "office-equipment":
        return <Printer className="w-5 h-5 text-brand-purple" />;
      default:
        return <Cog className="w-5 h-5 text-brand-purple" />;
    }
  };

  return (
    <section id="portfolios" className="py-16 md:py-24 bg-white border-t border-b border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <ScrollReveal direction="up" distance={20} className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Core Portfolios</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight uppercase">
            Four Official Business Portfolios
          </h2>
          <div className="w-16 h-1 bg-brand-purple mx-auto mt-3 rounded-full" />
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Ingram Enterprises Ltd delivers comprehensive enterprise technology and industrial engineering solutions across four dedicated portfolios tailored for modern Tanzanian organizations.
          </p>
        </ScrollReveal>

        {/* 4 Cards Grid - 2x2 on tablet/desktop with balanced visual weight */}
        <ScrollStagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {FOUR_PORTFOLIOS.map((item) => (
            <ScrollStaggerItem key={item.id} direction="up" distance={30} className="flex">
              <div className="w-full bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-brand hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
                {/* Top Image Container */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top Left Number & Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-brand-navy/85 backdrop-blur-md text-white text-xs font-extrabold tracking-wider">
                      {item.number}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-brand-purple/85 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  {/* Bottom Image Headline */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight [text-shadow:_0_1px_4px_rgba(0,0,0,0.8)]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-100 font-medium line-clamp-1 [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Offerings List */}
                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        Key Capabilities:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                        {item.keyItems.map((k, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{k}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-xs transition-colors group/btn"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>

                    <div className="flex items-center gap-2">
                      <Link
                        href={item.solutionsHref}
                        className="text-xs font-semibold text-brand-purple hover:text-brand-navy hover:underline transition-colors flex items-center gap-1"
                      >
                        <span>Solutions Detail</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>

                      <button
                        onClick={() => openQuoteModal(item.title)}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-300 hover:border-brand-purple text-gray-700 hover:text-brand-purple bg-gray-50 hover:bg-white transition-colors"
                      >
                        Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>

        {/* Bottom Banner Linking to Solutions Overview */}
        <ScrollReveal direction="up" distance={20}>
          <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-purple-tint via-[#EBF3FF] to-white border border-brand-purple/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-brand-purple text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-brand-navy">
                  Looking for integrated cross-portfolio solutions?
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Explore how we combine enterprise IT infrastructure, smart electronics, and plant automation into a unified architecture.
                </p>
              </div>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 bg-white hover:bg-brand-navy text-brand-navy hover:text-white border border-brand-navy/20 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-xs transition-all shrink-0"
            >
              <span>Explore All 4 Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
