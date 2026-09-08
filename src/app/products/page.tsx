"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Monitor,
  SlidersHorizontal,
  Gauge,
  HeadphonesIcon,
  ClipboardList,
  Settings,
  Microscope,
  Package,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/ScrollReveal";
import { useQuoteModal } from "@/context/QuoteModalContext";

const PRODUCT_CATEGORIES = [
  {
    id: "information",
    title: "Information",
    description:
      "Production management, asset management, supply chain management, and QHSSE management solutions for integrated plant operations and enterprise visibility.",
    icon: Monitor,
    link: "https://www.yokogawa.com/solutions/products-and-services/information/",
    items: [
      "Production Management",
      "Asset Management",
      "Supply Chain Management",
      "QHSSE Management",
    ],
  },
  {
    id: "control",
    title: "Control",
    description:
      "Distributed control systems (DCS), safety instrumented systems (SIS), PLCs, RTUs, and SCADA solutions ensuring 99.99999% plant availability.",
    icon: SlidersHorizontal,
    link: "https://www.yokogawa.com/solutions/products-and-services/control/",
    items: [
      "CENTUM VP DCS",
      "ProSafe-RS SIS",
      "STARDOM FCN/FCJ RTU & PLC",
      "FAST/TOOLS SCADA",
    ],
  },
  {
    id: "measurement",
    title: "Measurement",
    description:
      "World-class field instruments for pressure, flow, level, and temperature measurement — featuring DPharp digital resonant sensor technology with zero long-term drift.",
    icon: Gauge,
    link: "https://www.yokogawa.com/solutions/products-and-services/measurement/",
    items: [
      "Pressure Transmitters (DPharp)",
      "Flow Meters (Coriolis, Magnetic, Vortex)",
      "Level Transmitters (Radar, Guided Wave)",
      "Temperature Transmitters",
      "Process Analyzers",
    ],
  },
  {
    id: "consulting",
    title: "Consulting",
    description:
      "Expert consulting services for operational technology strategy, digital transformation roadmaps, and plant optimization to maximize ROI.",
    icon: HeadphonesIcon,
    link: "https://www.yokogawa.com/solutions/products-and-services/consulting/",
    items: [
      "OT Strategy Consulting",
      "Digital Transformation Advisory",
      "Operational Excellence Programs",
    ],
  },
  {
    id: "project-execution",
    title: "Project Execution Services",
    description:
      "End-to-end project delivery from conceptual design through commissioning — ensuring on-time, on-budget implementation of complex automation projects.",
    icon: ClipboardList,
    link: "https://www.yokogawa.com/solutions/products-and-services/project-execution/",
    items: [
      "Engineering Design",
      "System Integration",
      "Commissioning & Start-up",
      "Project Management",
    ],
  },
  {
    id: "lifecycle-services",
    title: "Lifecycle Services",
    description:
      "Comprehensive support from installation through decommissioning — maintenance, upgrades, training, and 24/7 technical support to ensure sustained plant performance.",
    icon: Settings,
    link: "https://www.yokogawa.com/solutions/products-and-services/lifecycle-services/",
    items: [
      "Maintenance & Support",
      "System Upgrades & Migration",
      "Training & Education",
      "Spare Parts Management",
    ],
  },
  {
    id: "life-science",
    title: "Life Science",
    description:
      "Specialized solutions for pharmaceutical, biotechnology, and life science industries — including confocal microscopy, drug discovery tools, and cell analysis.",
    icon: Microscope,
    link: "https://www.yokogawa.com/solutions/products-and-services/life-science/",
    items: [
      "Confocal Microscopy",
      "Drug Discovery Solutions",
      "Cell Analysis",
      "Bio-production Monitoring",
    ],
  },
];

export default function ProductsPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div>
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-brand-purple via-[#351E6B] to-brand-navy text-white py-14 md:py-20 border-b border-brand-purple-light/40 relative overflow-hidden">
        {/* Subtle geometric polygon decorative motif */}
        <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-20 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-white">
            <polygon points="100,10 170,50 170,140 100,190 30,140 30,50" fill="none" stroke="currentColor" strokeWidth="2" />
            <polygon points="100,30 150,60 150,130 100,170 50,130 50,60" fill="currentColor" fillOpacity="0.15" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Products" }]} theme="dark" />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-brand-purple-tint text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <Package className="w-3.5 h-3.5" />
              <span>Yokogawa Products &amp; Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Products &amp; Services
            </h1>
            <p className="text-base sm:text-lg text-purple-100 mt-3 leading-relaxed font-normal">
              Explore a comprehensive range of world-class industrial automation products, measurement instruments, control systems, and lifecycle services from Yokogawa — deployed and supported by Ingram Enterprises across East Africa.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20} className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              Complete Industrial Product Portfolio
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              From field instruments to enterprise-level information systems, Yokogawa delivers integrated solutions spanning the entire plant lifecycle. Ingram Enterprises is your local access point for these world-class technologies.
            </p>
          </ScrollReveal>

          {/* Product Categories Grid */}
          <ScrollStagger staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <ScrollStaggerItem key={cat.id} direction="up" distance={25} className="flex">
                  <div className="w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
                    <div className="p-7 space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-purple-tint text-brand-purple flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-purple transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {cat.description}
                      </p>

                      <div className="space-y-1.5 pt-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                          Key Products:
                        </div>
                        {cat.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-7 pt-0 flex gap-3">
                      <a
                        href={cat.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F0F6FF] to-white hover:from-brand-purple hover:to-brand-purple hover:text-white text-brand-navy text-xs font-semibold py-2.5 rounded-lg border border-blue-200 hover:border-brand-purple transition-all duration-200 active:scale-95"
                      >
                        <span>View Details</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <button
                        onClick={() => openQuoteModal(cat.title)}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F0F6FF] to-white hover:from-brand-purple hover:to-brand-purple hover:text-white text-brand-navy text-xs font-semibold py-2.5 rounded-lg border border-blue-200 hover:border-brand-purple transition-all duration-200 active:scale-95"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </ScrollStaggerItem>
              );
            })}
          </ScrollStagger>

          {/* Yokogawa Global Link */}
          <ScrollReveal direction="up" distance={15} className="mt-16">
            <div className="bg-gradient-to-br from-[#F5F8FE] to-white rounded-2xl p-8 sm:p-10 border border-blue-100 shadow-md text-center">
              <div className="relative h-10 w-52 mx-auto mb-4">
                <Image
                  src="/images/yokogawa-clean.svg"
                  alt="Yokogawa Logo"
                  width={210}
                  height={40}
                  className="object-contain mx-auto"
                />
              </div>
              <p className="text-gray-600 text-sm max-w-xl mx-auto mb-6">
                For the complete global product catalog, technical documentation, and specifications, visit Yokogawa&apos;s official products and services portal.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://www.yokogawa.com/solutions/products-and-services/#Overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors"
                >
                  <span>Explore Full Catalog</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => openQuoteModal("Yokogawa Products & Services")}
                  className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:border-brand-purple text-gray-800 text-sm font-semibold px-5 py-3 rounded-lg transition-colors shadow-sm"
                >
                  <span>Request Product Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
