"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Cog,
  CheckCircle2,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Factory,
  Layers,
  Gauge,
  Network,
  Wrench,
  Sparkles,
  PhoneCall,
  SlidersHorizontal,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import ServiceEnquiryForm from "@/components/shared/ServiceEnquiryForm";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/ScrollReveal";
import { PRIMARY_SERVICES } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function IndustrialAutomationPage() {
  const { openQuoteModal } = useQuoteModal();
  const service = PRIMARY_SERVICES.find((s) => s.id === "industrial-automation")!;

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-brand-purple via-[#351E6B] to-brand-navy text-white py-16 md:py-24 border-b border-brand-purple-light/40 relative overflow-hidden">
        {/* Decorative Geometric Motif */}
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
              { label: "Industrial Automation" },
            ]}
            theme="dark"
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-brand-purple-tint text-xs font-bold uppercase tracking-wider shadow-sm">
              <Cpu className="w-4 h-4 text-brand-purple-tint" />
              <span>Flagship Automation & Control Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Industrial Automation Solutions
            </h1>
            <p className="text-base sm:text-lg text-purple-100 leading-relaxed font-normal">
              Empowering Tanzanian industries with turnkey automation, precision process control, field instrumentation, and digitalization for dependable, high-yield plant operations.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => openQuoteModal("Industrial Automation")}
                className="bg-white hover:bg-brand-purple-tint text-brand-purple text-sm font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg flex items-center gap-2"
              >
                <span>Get a Quote / Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#enquiry-form"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                Submit Project Enquiry
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
                Engineering Capabilities & Scope
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Turnkey Industrial Automation for Demanding Plant Environments
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Ingram Enterprises delivers robust industrial automation solutions engineered to modernize production lines, stabilize complex chemical and thermal processes, and mitigate downtime across Tanzania&apos;s manufacturing, energy, and mining sectors.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                From control system architecture design and custom control panel fabrication to PLC/DCS programming, SCADA integration, and on-site commissioning, our engineering team provides end-to-end technical execution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Programmable Logic Controllers (PLC & PAC)",
                  "Distributed Control Systems (DCS Architecture)",
                  "Supervisory Control & Data Acquisition (SCADA)",
                  "Safety Instrumented Systems (SIS & ESD)",
                  "Motor Control Centers (MCC) & VFD Automation",
                  "Factory Floor & Packaging Line Modernization",
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
                  src="/images/service-automation.jpg"
                  alt="Industrial Automation Panels & Robotic Control"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl border border-white/50 text-xs text-gray-800 shadow-md">
                  <span className="font-bold text-brand-purple">Engineering Excellence:</span> Complete PLC, DCS, SCADA & field sensor integration.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Three Core Automation Subcategories Showcase */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal direction="up" distance={20} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-2">
              <span>Integrated Engineering Pillars</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight uppercase">
              Core Automation Subcategories
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-3 rounded-full" />
            <p className="text-sm sm:text-base text-gray-600 mt-3">
              Industrial Automation is supported by three specialized disciplines. Explore each dedicated subcategory to learn more.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Process Control */}
            <ScrollReveal direction="up" distance={20} delay={0.1}>
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand transition-all duration-300 flex flex-col h-full group">
                <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src="/images/service-process-control.jpg"
                    alt="Process Control Systems"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-brand-purple text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                    Subcategory 1
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center mb-3">
                      <SlidersHorizontal className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-purple transition-colors">
                      Process Control Solutions
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                      Continuous loop optimization, Distributed Control Systems (DCS), PLC sequencing, and SCADA monitoring for uninterrupted plant operations.
                    </p>
                    <ul className="mt-3 space-y-1.5 text-xs text-gray-700">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                        <span>DCS & Multi-loop Control</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                        <span>SCADA Human-Machine Interfaces</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                        <span>PID Tuning & Alarm Management</span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/services/process-control"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-purple hover:text-brand-navy pt-2 group-hover:underline"
                  >
                    <span>Explore Process Control</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. Instrumentation */}
            <ScrollReveal direction="up" distance={20} delay={0.2}>
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand transition-all duration-300 flex flex-col h-full group">
                <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src="/images/service-instrumentation.jpg"
                    alt="Precision Instrumentation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-brand-purple text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                    Subcategory 2
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center mb-3">
                      <Gauge className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-purple transition-colors">
                      Instrumentation Solutions
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                      Precision Yokogawa measurement devices for pressure, flow, level, temperature, and liquid analytics with certified on-site calibration.
                    </p>
                    <ul className="mt-3 space-y-1.5 text-xs text-gray-700">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                        <span>Pressure & Differential Transmitters</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                        <span>Magnetic & Coriolis Flowmeters</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                        <span>Radar Level & Temperature Sensors</span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/services/instrumentation"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-purple hover:text-brand-navy pt-2 group-hover:underline"
                  >
                    <span>Explore Instrumentation</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* 3. Digital Transformation */}
            <ScrollReveal direction="up" distance={20} delay={0.3}>
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand transition-all duration-300 flex flex-col h-full group">
                <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src="/images/service-digital-transformation.jpg"
                    alt="Digital Transformation & IIoT"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-brand-purple text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                    Subcategory 3
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center mb-3">
                      <Network className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-purple transition-colors">
                      Digital Transformation
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                      Industrial IoT telemetry, real-time plant data historians, AI predictive maintenance, and enterprise cloud integration.
                    </p>
                    <ul className="mt-3 space-y-1.5 text-xs text-gray-700">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                        <span>Wireless IIoT Sensor Networks</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                        <span>Plant Data Historians & Dashboards</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                        <span>Predictive Asset Health Monitoring</span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/services/digital-transformation"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-purple hover:text-brand-navy pt-2 group-hover:underline"
                  >
                    <span>Explore Digital Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Operational & Business Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight uppercase">
              Operational & Business Benefits
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Measurable returns through engineered automation reliability and minimized operational risk.
            </p>
          </ScrollReveal>

          <ScrollStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollStaggerItem direction="up" distance={20} className="flex">
              <div className="w-full bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-brand-purple/40 hover:shadow-brand hover:-translate-y-1 transition-all duration-300 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900">Maximum Plant Reliability</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Mitigate equipment trip risks and eliminate human operational errors through automated interlocks, deterministic timing, and redundant hardware architectures.
                </p>
              </div>
            </ScrollStaggerItem>

            <ScrollStaggerItem direction="up" distance={20} className="flex">
              <div className="w-full bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-brand-purple/40 hover:shadow-brand hover:-translate-y-1 transition-all duration-300 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900">Higher Throughput & Yield</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Maintain optimal process setpoints continuously without drift, maximizing product quality, reducing batch cycle times, and minimizing raw material waste.
                </p>
              </div>
            </ScrollStaggerItem>

            <ScrollStaggerItem direction="up" distance={20} className="flex">
              <div className="w-full bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-brand-purple/40 hover:shadow-brand hover:-translate-y-1 transition-all duration-300 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900">Safety & Environmental Compliance</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Ensure full personnel protection and environmental compliance with certified emergency shutdown logic (ESD) and comprehensive event audit trails.
                </p>
              </div>
            </ScrollStaggerItem>
          </ScrollStagger>
        </div>
      </section>

      {/* 4. Target Industrial Applications */}
      <section className="py-16 bg-brand-gray border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight uppercase">
              Target Industrial Applications
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />
          </ScrollReveal>

          <ScrollStagger staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Food & Beverage Packaging",
                desc: "High-speed conveyor pacing, bottling synchronization, and recipe management.",
              },
              {
                title: "Mining Grinding & Flotation",
                desc: "SAG/Ball mill feed optimization, slurry pumping, and automated reagent dosing.",
              },
              {
                title: "Oil & Gas Terminals",
                desc: "Automated truck loading racks, tank level custody interlocks, and emergency ESD.",
              },
              {
                title: "Cement & Clinker Plants",
                desc: "Raw meal kiln automation, clinker cooler temperature regulation, and bag house sequencing.",
              },
            ].map((app, i) => (
              <ScrollStaggerItem key={i} direction="up" distance={20} className="flex">
                <div className="w-full p-5 rounded-xl border border-gray-200 hover:border-brand-purple/40 hover:shadow-brand hover:-translate-y-1 transition-all duration-300 bg-white space-y-2">
                  <Factory className="w-5 h-5 text-brand-purple" />
                  <h4 className="text-sm font-bold text-gray-900">{app.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{app.desc}</p>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </div>
      </section>

      {/* 5. Direct Contact & Enquiry Form */}
      <section id="enquiry-form" className="py-16 md:py-20 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={25}>
            <ServiceEnquiryForm
              defaultService="Industrial Automation"
              title="Request Industrial Automation Consultation & Quotation"
              subtitle="Share your plant architecture scope, PLC/DCS requirements, or modernization timeline with our engineering team in Dar Es Salaam."
              serviceOptions={[
                "Industrial Automation (General Scope)",
                "Process Control (DCS / PLC / SCADA)",
                "Instrumentation (Yokogawa Transmitters & Sensors)",
                "Digital Transformation & IIoT Analytics",
                "Control Panel Assembly & Modernization",
                "Emergency On-Site Breakdown & Troubleshooting",
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Related Service Cards Section */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <h3 className="text-lg font-bold text-brand-navy">Related Engineering Services</h3>
            <Link href="/services" className="text-xs font-semibold text-brand-purple hover:underline flex items-center gap-1">
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/services/process-control"
              className="p-4 rounded-xl bg-white border border-gray-200 hover:border-brand-purple hover:shadow-sm transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-purple-tint text-brand-purple">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 group-hover:text-brand-purple">Process Control</div>
                  <div className="text-[11px] text-gray-500">DCS, SCADA & loop tuning</div>
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
                  <div className="text-[11px] text-gray-500">Yokogawa field measurement</div>
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
                  <div className="text-[11px] text-gray-500">IIoT & AI analytics</div>
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
