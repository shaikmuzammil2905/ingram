"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Flame,
  Pickaxe,
  Zap,
  Droplets,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import { INDUSTRIES_LIST } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function IndustriesPage() {
  const { openQuoteModal } = useQuoteModal();

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Factory":
        return <Factory className="w-6 h-6 text-brand-purple" />;
      case "Flame":
        return <Flame className="w-6 h-6 text-brand-purple" />;
      case "Pickaxe":
        return <Pickaxe className="w-6 h-6 text-brand-purple" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-brand-purple" />;
      case "Droplets":
        return <Droplets className="w-6 h-6 text-brand-purple" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-brand-purple" />;
      default:
        return <Factory className="w-6 h-6 text-brand-purple" />;
    }
  };

  return (
    <div>
      {/* Subpage Header Banner */}
      <div className="bg-brand-navy text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/hero-bg.jpg"
            alt="Industries We Serve"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Industries" }]} />
          <div className="max-w-3xl mt-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Industries We Empower
            </h1>
            <p className="text-base sm:text-lg text-gray-200 mt-4 leading-relaxed">
              Delivering specialized automation, loop tuning, Yokogawa instrumentation and digitalization tailored to the severe operating demands of East Africa&apos;s leading sectors.
            </p>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_LIST.map((ind) => (
              <div
                key={ind.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
                        {getIndustryIcon(ind.icon)}
                      </div>
                      <span className="text-white font-bold text-sm drop-shadow-md">
                        {ind.title}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <p className="text-xs font-semibold text-brand-purple">
                      {ind.tagline}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        Typical Implementations:
                      </div>
                      {ind.solutions.map((sol, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => openQuoteModal(ind.title)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-gray hover:bg-brand-purple hover:text-white text-gray-800 text-xs font-semibold py-2.5 rounded-lg border border-gray-200 hover:border-brand-purple transition-all duration-200"
                  >
                    <span>Request Industry Assessment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
