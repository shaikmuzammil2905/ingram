"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Gauge,
  SlidersHorizontal,
  Network,
  Cpu,
  ArrowRight,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import { COMPANY_INFO } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function PartnersPage() {
  const { openQuoteModal } = useQuoteModal();

  const yokogawaCategories = [
    {
      title: "Field Instrumentation & Measurement",
      desc: "Pressure transmitters (DPharp), magnetic and Coriolis flowmeters, radar level sensors, and temperature sensors known worldwide for precision and zero drift.",
      icon: Gauge,
    },
    {
      title: "Control Systems & DCS",
      desc: "Integrated production control systems engineered for maximum availability, fault tolerance, and secure continuous plant operation.",
      icon: SlidersHorizontal,
    },
    {
      title: "Process Analyzers",
      desc: "Liquid and gas analyzers including pH, conductivity, dissolved oxygen, and tunable diode laser spectrometers for process optimization and emissions compliance.",
      icon: Cpu,
    },
    {
      title: "Industrial Software & Digital Solutions",
      desc: "Plant information historians, advanced process control software, alarm management, and predictive asset condition monitoring platforms.",
      icon: Network,
    },
  ];

  return (
    <div>
      {/* Subpage Header Banner */}
      <div className="bg-brand-navy text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/hero-bg.jpg"
            alt="Technology Partners"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Partners" }]} />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-brand-purple-tint mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>World-Class Technology Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Technology & Solutions
            </h1>
            <p className="text-base sm:text-lg text-gray-200 mt-4 leading-relaxed">
              We deploy world-renowned industrial measurement and automation solutions from global leaders like Yokogawa to empower Tanzanian industry with uncompromising reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Partner Section: Yokogawa */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-gray to-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Details */}
              <div className="lg:col-span-8 space-y-6">
                <div className="relative h-14 w-60">
                  <Image
                    src="/images/yokogawa.png"
                    alt="Yokogawa"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                  Yokogawa Technologies & Solutions in Tanzania
                </h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Ingram Enterprises Ltd works with Yokogawa technologies to supply, integrate, and support state-of-the-art field instruments and control system architectures for Tanzanian plants.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Yokogawa is recognized globally as a pioneer in measurement, control, and information technologies. Together with our Tanzanian engineering presence, we provide local plants with seamless access to world-class precision instruments, rapid calibration, and technical consultation.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.yokogawa.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors"
                  >
                    <span>Explore Yokogawa Global</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => openQuoteModal("Yokogawa Instrumentation & Solutions")}
                    className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-brand-purple text-gray-800 text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
                  >
                    <span>Enquire on Yokogawa Products</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Visual Badge */}
              <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider">
                  Technology Pillars
                </h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span>DPharp Digital Resonant Sensor Technology</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span>CENTUM Distributed Control Architectures</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span>Rotamass Total Insight Coriolis Meters</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span>Exaquantum Plant Information Historian</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                    <span>Full Local Calibration & Sizing Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Categories */}
          <div className="mt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl font-extrabold text-brand-navy uppercase tracking-tight">
                Yokogawa Technology Categories Supported
              </h3>
              <div className="w-16 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {yokogawaCategories.map((cat, idx) => {
                const IconComponent = cat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-7 rounded-2xl border border-gray-200 hover:border-brand-purple/40 hover:shadow-brand transition-all duration-300 space-y-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{cat.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{cat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
