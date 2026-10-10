"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutGrid,
  Users,
  DraftingCompass,
  GraduationCap,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import ServiceEnquiryForm from "@/components/shared/ServiceEnquiryForm";
import { SOFTWARE_CATEGORIES } from "@/data/catalog";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function SoftwarePage() {
  const { openQuoteModal } = useQuoteModal();

  const getSoftwareIcon = (id: string) => {
    switch (id) {
      case "microsoft-products":
        return <LayoutGrid className="w-6 h-6 text-brand-purple" />;
      case "hrms-payroll":
        return <Users className="w-6 h-6 text-brand-purple" />;
      case "autocad":
        return <DraftingCompass className="w-6 h-6 text-brand-purple" />;
      case "assessment-management":
        return <GraduationCap className="w-6 h-6 text-brand-purple" />;
      case "tally-erp":
        return <Calculator className="w-6 h-6 text-brand-purple" />;
      default:
        return <LayoutGrid className="w-6 h-6 text-brand-purple" />;
    }
  };

  return (
    <div className="bg-white">
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
          <Breadcrumbs items={[{ label: "Software Solutions" }]} theme="dark" />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-brand-purple-tint text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-purple-tint" />
              <span>Enterprise Software & Business Applications</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Software Solutions
            </h1>
            <p className="text-base sm:text-lg text-purple-100 leading-relaxed font-normal">
              Empower your enterprise with genuine Microsoft 365 cloud tools, TRA-compliant HRMS & payroll software, professional CAD suites, assessment management, and Tally ERP accounting.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => openQuoteModal("Software Solutions Overview")}
                className="bg-white hover:bg-brand-purple-tint text-brand-purple text-sm font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg flex items-center gap-2"
              >
                <span>Request Software Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#categories-grid"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                Explore Software Suites
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Software Categories Showcase */}
      <section id="categories-grid" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
              Application Suites
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy uppercase tracking-tight mt-1">
              Software Solutions Portfolio
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOFTWARE_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={cat.bannerImage}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-brand-navy text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                      Solution 0{idx + 1}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-purple-tint flex items-center justify-center">
                      {getSoftwareIcon(cat.id)}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-purple transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {cat.subtitle}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {cat.keyFeatures.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-100 mt-4">
                  <Link
                    href={`/software/${cat.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:text-brand-navy group-hover:underline"
                  >
                    <span>Explore Solution & Licensing</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <button
                    onClick={() => openQuoteModal(`Software: ${cat.title}`)}
                    className="text-[11px] font-semibold text-gray-500 hover:text-brand-purple bg-gray-50 px-2.5 py-1.5 rounded-lg hover:bg-brand-purple-tint transition-colors"
                  >
                    Licensing
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Consultation Form */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceEnquiryForm
            defaultService="Software Solutions & Enterprise Licensing"
            title="Request Software Consultation & Licensing Quote"
            subtitle="Connect with our software consultants to discuss deployment, seat licensing, or custom module integrations."
            serviceOptions={[
              "Microsoft 365 & Windows Server Licensing",
              "HRMS & Automated Payroll Software (Tanzania Compliance)",
              "AutoCAD & Engineering Design Software",
              "Assessment & Examination Management Platform",
              "Tally ERP Accounting & Inventory Software",
            ]}
          />
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
