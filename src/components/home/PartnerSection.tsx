"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function PartnerSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-2">
          <span>Global Engineering Alliances</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight uppercase">
          Our Technology Partner
        </h2>
        <div className="w-14 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />

        {/* Clean, perfectly spaced Yokogawa Presentation - No unwanted spaces or fragments */}
        <div className="mt-8 max-w-xl mx-auto flex flex-col items-center justify-center p-8 sm:p-10 bg-gradient-to-b from-[#F0F6FF] to-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-brand transition-all duration-300">
          {/* Clean Yokogawa SVG Logo */}
          <div className="relative h-12 w-64 mb-4 flex items-center justify-center">
            <Image
              src="/images/yokogawa-clean.svg"
              alt="Yokogawa Partner Logo"
              width={260}
              height={45}
              className="object-contain"
            />
          </div>

          <p className="text-base font-semibold text-brand-navy mb-1.5">
            {COMPANY_INFO.yokogawaTagline}
          </p>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md text-center leading-relaxed">
            Ingram Enterprises deploys high-precision Yokogawa measurement, control systems, and field instruments to ensure plant uptime and industrial safety across Tanzania.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/partners"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-brand-purple hover:bg-brand-purple-hover px-5 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              <span>Explore Yokogawa Technologies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://www.yokogawa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:text-brand-purple bg-white border border-gray-200 px-4 py-2.5 rounded-lg transition-colors"
            >
              <span>Yokogawa Global</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
