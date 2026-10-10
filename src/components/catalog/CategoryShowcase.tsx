"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Filter,
  Eye,
  MessageSquare,
  ShieldCheck,
  Tag,
  Package,
  Layers,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import ServiceEnquiryForm from "@/components/shared/ServiceEnquiryForm";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/ScrollReveal";
import { CategoryInfo, ProductItem, ALL_PRODUCTS } from "@/data/catalog";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface CategoryShowcaseProps {
  category: CategoryInfo;
  parentCategoryName: string;
  parentCategoryHref: string;
}

export default function CategoryShowcase({
  category,
  parentCategoryName,
  parentCategoryHref,
}: CategoryShowcaseProps) {
  const { openQuoteModal } = useQuoteModal();
  const [searchQuery, setSearchQuery] = useState("");

  const products = ALL_PRODUCTS.filter(
    (p) => p.categorySlug === category.slug || p.category === category.title
  );

  const filteredProducts = products.filter((p) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      (p.brand && p.brand.toLowerCase().includes(q)) ||
      (p.model && p.model.toLowerCase().includes(q))
    );
  });

  return (
    <div className="bg-white">
      {/* Category Hero Banner */}
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
              { label: parentCategoryName, href: parentCategoryHref },
              { label: category.title },
            ]}
            theme="dark"
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-brand-purple-tint text-xs font-bold uppercase tracking-wider shadow-sm">
              <Package className="w-4 h-4 text-brand-purple-tint" />
              <span>{parentCategoryName} Catalog</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              {category.title}
            </h1>
            <p className="text-base sm:text-lg text-purple-100 leading-relaxed font-normal">
              {category.subtitle}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => openQuoteModal(category.title)}
                className="bg-white hover:bg-brand-purple-tint text-brand-purple text-sm font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg flex items-center gap-2"
              >
                <span>Request Catalog Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#products-grid"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                Browse Products
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Category Overview & Key Highlights */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="right" distance={30} className="lg:col-span-7 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                Category Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Professional Solutions & Specifications
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {category.description}
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Key Capabilities & Quality Standards:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" distance={30} className="lg:col-span-5">
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src={category.bannerImage}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl border border-white/40 text-xs text-gray-800 shadow-md">
                  <span className="font-bold text-brand-purple">Ingram Enterprises:</span> Genuine equipment, warranty & verified technical support in Tanzania.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Products Catalog Grid */}
      <section id="products-grid" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header & Search Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                Product Catalog
              </div>
              <h3 className="text-2xl font-extrabold text-brand-navy">
                Available Models & Equipment
              </h3>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search models & specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-xs bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>
          </div>

          {/* Product Cards */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image */}
                    <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-brand-navy text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                        {p.brand || "Ingram Verified"}
                      </div>
                      {p.inStock && (
                        <div className="absolute top-3 right-3 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                          Available
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      {p.model && (
                        <div className="text-[11px] font-mono text-gray-400">
                          Model: {p.model}
                        </div>
                      )}
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-brand-purple transition-colors line-clamp-2">
                        {p.name}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                        {p.shortDescription}
                      </p>

                      {/* Specs pills */}
                      <div className="space-y-1.5 pt-2 border-t border-gray-100">
                        {Object.entries(p.specifications).slice(0, 3).map(([key, val], idx) => (
                          <div key={idx} className="flex justify-between text-[11px] text-gray-600">
                            <span className="font-medium text-gray-400">{key}:</span>
                            <span className="font-semibold text-gray-800 text-right truncate max-w-[160px]">{val}</span>
                          </div>
                        ))}
                      </div>

                      {/* Printer compatibility if available */}
                      {p.printerCompatibility && (
                        <div className="pt-2">
                          <div className="text-[10px] font-bold text-gray-400 uppercase">Compatible Printers:</div>
                          <div className="text-[11px] text-gray-600 line-clamp-1">
                            {p.printerCompatibility.join(", ")}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-0 flex items-center gap-2">
                    <button
                      onClick={() => openQuoteModal(`${category.title} - ${p.name}`)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs font-semibold py-2.5 px-4 rounded-lg shadow-sm transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Request Quote</span>
                    </button>
                    {p.mainCategory === "electronics" && (
                      <Link
                        href={`/electronics/products/${p.slug}`}
                        className="p-2.5 bg-gray-100 hover:bg-brand-purple-tint text-gray-700 hover:text-brand-purple rounded-lg transition-colors"
                        title="View Full Details"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-4">
              <Package className="w-12 h-12 text-brand-purple mx-auto opacity-50" />
              <h4 className="text-lg font-bold text-gray-900">Custom & Verified Quotations Available</h4>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                We supply an extensive range of {category.title} models and brands. Contact our procurement desk for immediate technical specifications and pricing.
              </p>
              <button
                onClick={() => openQuoteModal(category.title)}
                className="bg-brand-purple text-white text-xs font-bold px-6 py-2.5 rounded-lg shadow-sm hover:bg-brand-purple-hover transition-colors"
              >
                Inquire About Specific Models
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceEnquiryForm
            defaultService={`${parentCategoryName} - ${category.title}`}
            title={`Request ${category.title} Quotation`}
            subtitle="Submit your required equipment specifications, quantities, or office procurement needs."
          />
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
