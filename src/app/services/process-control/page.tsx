"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SlidersHorizontal,
  CheckCircle2,
  Cpu,
  Layers,
  Activity,
  ShieldCheck,
  TrendingUp,
  Settings2,
  ArrowRight,
  Gauge,
  Network,
  MonitorCheck,
  Zap,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import ServiceEnquiryForm from "@/components/shared/ServiceEnquiryForm";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/ScrollReveal";
import { PRIMARY_SERVICES } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ProcessControlPage() {
  const { openQuoteModal } = useQuoteModal();
  const service = PRIMARY_SERVICES.find((s) => s.id === "process-control")!;

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-brand-purple via-[#351E6B] to-brand-navy text-white py-16 md:py-24 border-b border-brand-purple-light/40 relative overflow-hidden">
        {/* Subtle geometric motif */}
        <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-20 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-white">
            <polygon points="100,10 170,50 170,140 100,190 30,140 30,50" fill="none" stroke="currentColor" strokeWidth="2" />
            <polygon points="100,30 150,60 150,130 100,170 50,130 50,60" fill="currentColor" fillOpacity="0.15" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Industrial Automation", href: "/services/industrial-automation" },
              { label: "Process Control" },
            ]}
            theme="dark"
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-brand-purple-tint text-xs font-bold uppercase tracking-wider shadow-sm">
              <SlidersHorizontal className="w-4 h-4 text-brand-purple-tint" />
              <span>DCS, PLC & Process Optimization</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Process Control Solutions
            </h1>
            <p className="text-base sm:text-lg text-purple-100 leading-relaxed font-normal">
              Continuous monitoring, high-speed interlocking, and precision multi-loop control designed to guarantee stable, safe, and efficient plant operations.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => openQuoteModal("Process Control")}
                className="bg-white hover:bg-brand-purple-tint text-brand-purple text-sm font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg flex items-center gap-2"
              >
                <span>Get a Quote on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#enquiry-form"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                Consult a Control Specialist
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Overview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="right" distance={30} className="lg:col-span-7 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                Continuous & Batch Precision
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Stable, Safe and Optimized Operations Across Complex Facilities
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Ingram Enterprises provides advanced process control solutions utilizing world-class technologies to help industries achieve stable, safe, and efficient plant operations.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Our solutions enable continuous monitoring, precise control, and optimization of critical industrial loops, helping customers improve product consistency, maximize throughput, and reduce energy consumption.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Distributed Control Systems (DCS) Engineering",
                  "PLC / PAC Multi-Axis & Sequence Control",
                  "PID Loop Tuning & Advanced Process Control (APC)",
                  "High-Performance HMI / Operator Consoles",
                  "Alarm Rationalization (ISA-18.2 Compliant)",
                  "Emergency Shutdown Systems (ESD & SIS)",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" distance={30} className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/service-process-control.jpg"
                  alt="Process Control Room Console & Holographic Monitoring"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Technologies Supported */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-2">
              <span>Control Architectures</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight uppercase">
              Core Technology Domains
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />
          </ScrollReveal>

          <ScrollStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollStaggerItem direction="up" distance={20} className="flex">
              <div className="w-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-brand hover:-translate-y-1 transition-all duration-300 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900">Distributed Control Systems (DCS)</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Centralized multi-loop architectures designed for continuous chemical reactions, oil refining units, and thermal power processes requiring 99.999% uptime.
                </p>
              </div>
            </ScrollStaggerItem>

            <ScrollStaggerItem direction="up" distance={20} className="flex">
              <div className="w-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-brand hover:-translate-y-1 transition-all duration-300 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900">High-Reliability PLC & PAC</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Robust programmable logic controllers executing deterministic high-speed interlocks, conveyor dispatch, pump station sequencing, and batch recipes.
                </p>
              </div>
            </ScrollStaggerItem>

            <ScrollStaggerItem direction="up" distance={20} className="flex">
              <div className="w-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-brand hover:-translate-y-1 transition-all duration-300 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900">Advanced Loop Optimization</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Eliminate oscillatory valve behavior, mitigate dead-band hysteresis, and stabilize distillation temperatures through rigorous mathematical loop tuning.
                </p>
              </div>
            </ScrollStaggerItem>
          </ScrollStagger>
        </div>
      </section>

      {/* 3. Direct Contact & Enquiry Form */}
      <section id="enquiry-form" className="py-16 md:py-20 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <ServiceEnquiryForm
              defaultService="Process Control (DCS / PLC / SCADA)"
              title="Request Process Control Engineering & Quotation"
              subtitle="Connect directly with our DCS and PLC integration specialists in Dar Es Salaam."
              serviceOptions={[
                "Process Control (DCS / PLC / SCADA)",
                "DCS Migration & Skid Integration",
                "SCADA / HMI Screen Redesign",
                "PID Loop Tuning & Process Optimization",
                "Industrial Automation (Turnkey Scope)",
                "Yokogawa Field Instrumentation",
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Related Services Navigation */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <h3 className="text-lg font-bold text-brand-navy">Explore Connected Engineering Services</h3>
            <Link href="/services" className="text-xs font-semibold text-brand-purple hover:underline flex items-center gap-1">
              <span>All Services Overview</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/services/industrial-automation"
              className="p-4 rounded-xl bg-white border border-gray-200 hover:border-brand-purple hover:shadow-sm transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-purple-tint text-brand-purple">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 group-hover:text-brand-purple">Industrial Automation</div>
                  <div className="text-[11px] text-gray-500">Flagship automation hub</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-purple group-hover:translate-x-0.5 transition-all" />
            </Link>

            <Link
              href="/services/instrumentation"
              className="p-4 rounded-xl bg-white border border-gray-200 hover:border-brand-purple hover:shadow-sm transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-purple-tint text-brand-purple">
                  <Gauge className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 group-hover:text-brand-purple">Instrumentation</div>
                  <div className="text-[11px] text-gray-500">Yokogawa field sensors</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-purple group-hover:translate-x-0.5 transition-all" />
            </Link>

            <Link
              href="/services/digital-transformation"
              className="p-4 rounded-xl bg-white border border-gray-200 hover:border-brand-purple hover:shadow-sm transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-purple-tint text-brand-purple">
                  <Network className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 group-hover:text-brand-purple">Digital Transformation</div>
                  <div className="text-[11px] text-gray-500">IIoT & data analytics</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-purple group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
