"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Network,
  CheckCircle2,
  Cpu,
  Cloud,
  TrendingUp,
  BrainCircuit,
  Database,
  ArrowRight,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import { PRIMARY_SERVICES, SOLUTIONS_LIST } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function DigitalTransformationPage() {
  const { openQuoteModal } = useQuoteModal();
  const service = PRIMARY_SERVICES.find((s) => s.id === "digital-transformation")!;

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-brand-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/service-digital-transformation.jpg"
            alt="Digital Transformation & Analytics"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Digital Transformation" },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-brand-purple-tint">
              <Network className="w-4 h-4 text-brand-purple-tint" />
              <span>Industry 4.0, IIoT & AI-Driven Operations</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Digital Transformation Solutions
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              {service.fullDescription[0]}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => openQuoteModal("Digital Transformation")}
                className="bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-200"
              >
                Discuss Digital Roadmap on WhatsApp
              </button>
              <Link
                href="/solutions"
                className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-6 py-3 rounded-lg border border-white/20 transition-all duration-200"
              >
                Explore Specific Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                Connecting People, Assets and Data
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Data-Driven Decision Making from Field Sensor to Boardroom
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {service.fullDescription[1]}
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                {service.fullDescription[2]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Industrial IoT (IIoT) Sensor Networks",
                  "Real-Time Data Historians & Analytics",
                  "Asset Performance Management (APM)",
                  "Plant Information Management Systems (PIMS)",
                  "Hybrid Edge & Cloud Computing",
                  "Industrial AI & Predictive Maintenance",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/service-digital-transformation.jpg"
                  alt="Industrial Data Visualization"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solution Pillars */}
      <section className="py-16 bg-brand-gray border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight uppercase">
              Digital Transformation Capabilities
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS_LIST.map((sol) => (
              <div
                key={sol.id}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-brand transition-all duration-200 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900">{sol.title}</h3>
                <p className="text-xs text-brand-purple font-medium">{sol.tagline}</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {sol.description}
                </p>
                <Link
                  href={`/solutions#${sol.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand-purple hover:underline pt-2"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
