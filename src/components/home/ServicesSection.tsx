"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Cog,
  SlidersHorizontal,
  Gauge,
  Network,
  X,
  CheckCircle2,
  MessageSquare,
  Eye,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { PRIMARY_SERVICES } from "@/data/company";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/ScrollReveal";
import { useQuoteModal } from "@/context/QuoteModalContext";

type ServiceItem = (typeof PRIMARY_SERVICES)[number];

export default function ServicesSection() {
  const { openQuoteModal } = useQuoteModal();
  const [selectedMobileService, setSelectedMobileService] = useState<ServiceItem | null>(null);
  const [automation, processControl, instrumentation, digitalTransformation] = PRIMARY_SERVICES;

  const subcategories = [processControl, instrumentation, digitalTransformation];

  const getSubcategoryIcon = (id: string) => {
    switch (id) {
      case "process-control":
        return <SlidersHorizontal className="w-5 h-5 text-brand-purple" />;
      case "instrumentation":
        return <Gauge className="w-5 h-5 text-brand-purple" />;
      case "digital-transformation":
        return <Network className="w-5 h-5 text-brand-purple" />;
      default:
        return <Cog className="w-5 h-5 text-brand-purple" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F0F6FF] via-[#F6F9FD] to-white border-t border-b border-[#E2EDFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <ScrollReveal direction="up" distance={20} className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industrial Engineering Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight uppercase">
            Services & Industrial Automation
          </h2>
          <div className="w-16 h-1 bg-brand-purple mx-auto mt-3 rounded-full" />
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Ingram Enterprises provides turnkey Industrial Automation as our core engineering discipline, structured into three specialized domains: Process Control, Yokogawa Instrumentation, and Digital Transformation.
          </p>
        </ScrollReveal>

        {/* 1. PRIMARY FLAGSHIP SERVICE: INDUSTRIAL AUTOMATION */}
        <ScrollReveal direction="up" distance={30}>
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-brand-purple/30 shadow-xl hover:shadow-brand transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Image (5 cols) */}
              <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-full min-h-[320px] bg-gray-100">
                <Image
                  src={automation.image}
                  alt={automation.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-brand-purple text-white text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" />
                  <span>Main Service Category</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/20">
                  <span className="font-bold text-brand-purple-tint">Turnkey Engineering:</span> DCS, PLC, SCADA, and safety shutdown architecture across Tanzania.
                </div>
              </div>

              {/* Right Content (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                    Primary Service Focus
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                    {automation.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {automation.fullDescription[0]}
                  </p>
                </div>

                {/* Subcategories preview tags */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Includes 3 Specialized Subcategories:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <Link
                      href="/services/process-control"
                      className="p-2.5 rounded-xl bg-gray-50 hover:bg-brand-purple-tint/50 border border-gray-200 hover:border-brand-purple transition-all group/item block"
                    >
                      <div className="flex items-center gap-2">
                        <SlidersHorizontal className="w-4 h-4 text-brand-purple shrink-0" />
                        <span className="text-xs font-bold text-gray-900 group-hover/item:text-brand-purple">
                          Process Control
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-1 line-clamp-1">DCS, PLC & SCADA</p>
                    </Link>

                    <Link
                      href="/services/instrumentation"
                      className="p-2.5 rounded-xl bg-gray-50 hover:bg-brand-purple-tint/50 border border-gray-200 hover:border-brand-purple transition-all group/item block"
                    >
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-brand-purple shrink-0" />
                        <span className="text-xs font-bold text-gray-900 group-hover/item:text-brand-purple">
                          Instrumentation
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-1 line-clamp-1">Yokogawa Sensors</p>
                    </Link>

                    <Link
                      href="/services/digital-transformation"
                      className="p-2.5 rounded-xl bg-gray-50 hover:bg-brand-purple-tint/50 border border-gray-200 hover:border-brand-purple transition-all group/item block"
                    >
                      <div className="flex items-center gap-2">
                        <Network className="w-4 h-4 text-brand-purple shrink-0" />
                        <span className="text-xs font-bold text-gray-900 group-hover/item:text-brand-purple">
                          Digital Transform
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-1 line-clamp-1">IIoT & AI Analytics</p>
                    </Link>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href={automation.href}
                    className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-brand transition-all group"
                  >
                    <span>Explore Industrial Automation Hub</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <button
                    onClick={() => openQuoteModal("Industrial Automation")}
                    className="inline-flex items-center gap-2 bg-white hover:bg-brand-purple-tint text-brand-purple border border-brand-purple/30 text-sm font-semibold px-5 py-3 rounded-xl transition-colors shadow-2xs"
                  >
                    <span>Request Proposal</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 2. THE THREE SUBCATEGORIES CARDS GRID */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                Explore Sub-Disciplines
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
                Industrial Automation Subcategories
              </h3>
            </div>
            <Link
              href="/services"
              className="text-xs font-semibold text-brand-purple hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View All Services Overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <ScrollStagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subcategories.map((sub, index) => (
              <ScrollStaggerItem key={sub.id} direction="up" distance={30} className="flex">
                <div className="w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
                  {/* Image Container */}
                  <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={sub.image}
                      alt={sub.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-brand-navy text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                      {sub.shortTitle}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between relative bg-white space-y-4">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-purple-tint flex items-center justify-center">
                        {getSubcategoryIcon(sub.id)}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-brand-purple transition-colors">
                        {sub.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {sub.description}
                      </p>

                      {/* Key bullet points */}
                      <div className="pt-1 space-y-1 text-xs text-gray-700">
                        {sub.keyPoints.slice(0, 3).map((pt, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                            <span className="line-clamp-1">{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href={sub.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:text-brand-navy group-hover:underline"
                      >
                        <span>{sub.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <button
                        onClick={() => openQuoteModal(sub.title)}
                        className="text-[11px] font-semibold text-gray-500 hover:text-brand-purple bg-gray-50 px-2.5 py-1.5 rounded-lg hover:bg-brand-purple-tint transition-colors"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </div>
      </div>
    </section>
  );
}
