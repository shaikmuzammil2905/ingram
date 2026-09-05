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
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/ScrollReveal";
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
      title: "Distributed Control & Safety Systems (DCS & SIS)",
      desc: "CENTUM VP distributed control systems and ProSafe-RS safety instrumented systems providing 99.99999% availability for critical industrial infrastructure.",
      icon: SlidersHorizontal,
    },
    {
      title: "Industrial IoT & Remote Telemetry",
      desc: "Sushi Sensor wireless IIoT vibration and temperature monitors, LoRaWAN gateways, and plant asset monitoring for predictive maintenance.",
      icon: Network,
    },
    {
      title: "Plant Information Management (Exaquantum)",
      desc: "Real-time plant historians, alarm management (Exaquantum/ARA), and energy management software bridging operational equipment with corporate enterprise systems.",
      icon: Cpu,
    },
  ];

  return (
    <div>
      {/* Logo Colour Header Banner (Deep Royal Purple to Navy) - Attractive & Grand */}
      <div className="bg-gradient-to-r from-brand-purple via-[#351E6B] to-brand-navy text-white py-14 md:py-20 border-b border-brand-purple-light/40 relative overflow-hidden">
        {/* Subtle geometric polygon decorative motif from logo */}
        <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-20 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-white">
            <polygon points="100,10 170,50 170,140 100,190 30,140 30,50" fill="none" stroke="currentColor" strokeWidth="2" />
            <polygon points="100,30 150,60 150,130 100,170 50,130 50,60" fill="currentColor" fillOpacity="0.15" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Partners" }]} theme="dark" />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-brand-purple-tint text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>World-Class Technology Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Technology & Solutions
            </h1>
            <p className="text-base sm:text-lg text-purple-100 mt-3 leading-relaxed font-normal">
              We deploy world-renowned industrial measurement and automation solutions from global leaders like Yokogawa to empower Tanzanian industry with uncompromising reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Partner Section: Yokogawa (Clean Logo, No Cutoff Boxes/Spaces) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <div className="bg-gradient-to-br from-[#F5F8FE] to-white rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Details */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Clean Yokogawa SVG Logo */}
                  <div className="relative h-12 w-64">
                    <Image
                      src="/images/yokogawa-clean.svg"
                      alt="Yokogawa Partner Logo"
                      width={260}
                      height={45}
                      className="object-contain object-left"
                      priority
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
                    className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-brand-purple text-gray-800 text-sm font-semibold px-5 py-3 rounded-lg transition-colors shadow-sm"
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
        </ScrollReveal>

          {/* Technology Categories with Scroll Stagger */}
          <div className="mt-16">
            <ScrollReveal direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl font-extrabold text-brand-navy uppercase tracking-tight">
                Yokogawa Technology Categories Supported
              </h3>
              <div className="w-16 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />
            </ScrollReveal>

            <ScrollStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {yokogawaCategories.map((cat, idx) => {
                const IconComponent = cat.icon;
                return (
                  <ScrollStaggerItem key={idx} direction="up" distance={20} className="flex">
                    <div className="w-full bg-white p-7 rounded-2xl border border-gray-200 hover:border-brand-purple/40 hover:shadow-brand hover:-translate-y-1 transition-all duration-300 space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">{cat.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{cat.desc}</p>
                    </div>
                  </ScrollStaggerItem>
                );
              })}
            </ScrollStagger>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
