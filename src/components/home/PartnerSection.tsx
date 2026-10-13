"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { PARTNERS_LIST, PartnerBrand } from "@/data/company";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/ScrollReveal";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function PartnerSection() {
  const { openQuoteModal } = useQuoteModal();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Brands & Tech (12)" },
    { id: "computing", label: "Computing & IT" },
    { id: "software-security", label: "Software & Security" },
    { id: "office-power", label: "Office & Power" },
    { id: "automation", label: "Industrial Automation" },
  ];

  const filteredPartners = PARTNERS_LIST.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "computing") return ["hp", "dell", "lenovo"].includes(p.id);
    if (activeFilter === "software-security") return ["microsoft", "autocad", "firewall", "sophos"].includes(p.id);
    if (activeFilter === "office-power") return ["epson", "apc", "canon", "kyocera"].includes(p.id);
    if (activeFilter === "automation") return ["yokogawa"].includes(p.id);
    return true;
  });

  return (
    <section className="py-16 md:py-24 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <ScrollReveal direction="up" distance={20} className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Global Technology Alliances</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight uppercase">
            Brands & Technologies We Work With
          </h2>
          <div className="w-16 h-1 bg-brand-purple mx-auto mt-3 rounded-full" />
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            We deliver solutions powered by world-renowned enterprise IT vendors, software developers, printing manufacturers, and industrial automation leaders in Tanzania.
          </p>
        </ScrollReveal>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
                activeFilter === tab.id
                  ? "bg-brand-purple text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 12 Brands & Technologies Grid */}
        <ScrollStagger staggerDelay={0.06} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPartners.map((partner: PartnerBrand) => (
            <ScrollStaggerItem key={partner.id} direction="up" distance={20} className="flex">
              <div className="w-full bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/90 shadow-2xs hover:shadow-brand hover:-translate-y-1 hover:border-brand-purple/40 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Top Category Badge */}
                  <div className="flex items-center justify-between gap-1 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">
                      {partner.badge || partner.category}
                    </span>
                    {partner.isCategory ? (
                      <span className="text-[9.5px] font-bold uppercase px-1.5 py-0.5 rounded bg-blue-50 text-blue-700">
                        Tech Domain
                      </span>
                    ) : (
                      <span className="text-[9.5px] font-bold uppercase px-1.5 py-0.5 rounded bg-purple-50 text-brand-purple">
                        Partner
                      </span>
                    )}
                  </div>

                  {/* Logo Container - Clean White Canvas with Uniform Height & Aspect Ratio */}
                  <div className="relative h-14 sm:h-16 w-full flex items-center justify-center py-2 px-3 bg-gray-50/60 rounded-xl group-hover:bg-brand-purple-tint/30 transition-colors">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Details */}
                  <div className="mt-4 space-y-1">
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-brand-purple transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() => openQuoteModal(partner.name)}
                    className="text-[11.5px] font-bold text-brand-purple hover:underline"
                  >
                    Enquire
                  </button>

                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand-purple flex items-center gap-1 text-[11px]"
                      aria-label={`Visit ${partner.name} website`}
                    >
                      <span>Official</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>

        {/* Featured Strategic Highlight for Yokogawa Engineering Partnership */}
        <ScrollReveal direction="up" distance={20}>
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F5F8FE] to-white border border-blue-100 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="relative h-12 w-48 shrink-0 bg-white p-2 rounded-xl border border-blue-100 flex items-center justify-center shadow-2xs">
                <Image
                  src="/images/partners/yokogawa.svg"
                  alt="Yokogawa Strategic Engineering Partner Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Strategic Industrial Automation Alliance</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-brand-navy">
                  Certified Measurement & DCS Control for Tanzanian Processing Plants
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 max-w-2xl">
                  Deploying world-class Yokogawa CENTUM VP distributed control systems, DPharp digital transmitters, and Exaquantum historians with local Tanzanian engineering support.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/partners"
                className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-xs transition-colors"
              >
                <span>View Full Partners Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
