"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function PartnerSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50/60 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight uppercase">
          Our Technology Partner
        </h2>
        <div className="w-14 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />

        {/* Yokogawa Presentation matching image.png */}
        <div className="mt-8 max-w-xl mx-auto flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-brand transition-all duration-300">
          <div className="relative h-14 w-64 mb-4">
            <Image
              src="/images/yokogawa.png"
              alt="Yokogawa Partner Logo"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-base font-medium text-gray-700 mb-1">
            {COMPANY_INFO.yokogawaTagline}
          </p>
          <p className="text-xs text-gray-500 max-w-md">
            Ingram Enterprises deploys high-precision Yokogawa measurement, control systems, and field instruments to ensure plant uptime and industrial safety.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/partners"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-purple hover:text-brand-purple-hover bg-brand-purple-tint px-4 py-2 rounded-lg transition-colors"
            >
              <span>Explore Yokogawa Technologies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://www.yokogawa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 hover:text-gray-900 border border-gray-200 px-4 py-2 rounded-lg transition-colors"
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
