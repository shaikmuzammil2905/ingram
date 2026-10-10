"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Monitor,
  Armchair,
  FolderKanban,
  Archive,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import ServiceEnquiryForm from "@/components/shared/ServiceEnquiryForm";
import { OFFICE_EQUIPMENT_CATEGORIES, CONSUMABLES_CATEGORIES } from "@/data/catalog";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function OfficeEquipmentPage() {
  const { openQuoteModal } = useQuoteModal();

  const getEquipmentIcon = (id: string) => {
    switch (id) {
      case "computer-tables":
        return <Monitor className="w-6 h-6 text-brand-purple" />;
      case "office-chairs":
        return <Armchair className="w-6 h-6 text-brand-purple" />;
      case "file-racks":
        return <FolderKanban className="w-6 h-6 text-brand-purple" />;
      case "cupboards":
        return <Archive className="w-6 h-6 text-brand-purple" />;
      default:
        return <Armchair className="w-6 h-6 text-brand-purple" />;
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
          <Breadcrumbs items={[{ label: "Office Equipment & Consumables" }]} theme="dark" />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-brand-purple-tint text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-purple-tint" />
              <span>Commercial Furniture & Workplace Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Office Equipment & Furniture
            </h1>
            <p className="text-base sm:text-lg text-purple-100 leading-relaxed font-normal">
              High-durability executive computer tables, ergonomic mesh chairs, heavy-duty file archive racks, and lockable steel cupboards for modern workplaces in Tanzania.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => openQuoteModal("Office Equipment Overview")}
                className="bg-white hover:bg-brand-purple-tint text-brand-purple text-sm font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg flex items-center gap-2"
              >
                <span>Request Furniture Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/consumables"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                View Consumables Catalog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Office Equipment Categories Showcase */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
              Office Furniture Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy uppercase tracking-tight mt-1">
              Office Equipment Categories
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFICE_EQUIPMENT_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={cat.bannerImage}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-brand-navy text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                      Furniture 0{idx + 1}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-purple-tint flex items-center justify-center">
                      {getEquipmentIcon(cat.id)}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-brand-purple transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {cat.subtitle}
                    </p>

                    <div className="space-y-1 pt-1">
                      {cat.keyFeatures.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-gray-100 mt-3 flex items-center justify-between">
                  <Link
                    href={`/office-equipment/${cat.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-purple hover:underline"
                  >
                    <span>View Catalog</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <button
                    onClick={() => openQuoteModal(`Office Furniture: ${cat.title}`)}
                    className="text-[11px] font-semibold text-gray-500 hover:text-brand-purple bg-gray-50 px-2 py-1 rounded-md"
                  >
                    Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consumables Quick Cross-Promotion */}
      <section className="py-12 bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-brand-purple-tint/50 to-white border border-brand-purple/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                Need Printing Consumables?
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
                Looking for A4 Copy Paper or Laser Toner Cartridges?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-xl">
                Explore our high-whiteness 80gsm copy paper cartons and high-yield original/compatible toner cartridges for corporate printer fleets.
              </p>
            </div>
            <Link
              href="/consumables"
              className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-md transition-all shrink-0"
            >
              <span>Explore Consumables Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Office Procurement Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceEnquiryForm
            defaultService="Office Equipment & Furniture Procurement"
            title="Request Office Furniture & Equipment Quotation"
            subtitle="Submit your office floorplan quantities, workstation requirements, or archive storage needs."
            serviceOptions={[
              "Computer Tables & Modular Workstations",
              "Ergonomic Mesh & Executive Chairs",
              "Heavy-Duty File Storage Racks",
              "Lockable Steel Cupboards & Cabinets",
              "Complete Office Fit-Out Procurement",
            ]}
          />
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
