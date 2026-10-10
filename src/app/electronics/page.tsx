"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Filter,
  Eye,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Tv,
  Refrigerator,
  Zap,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  Tag,
  Star,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import ServiceEnquiryForm from "@/components/shared/ServiceEnquiryForm";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/ScrollReveal";
import { ELECTRONICS_CATEGORIES, ALL_PRODUCTS } from "@/data/catalog";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ElectronicsPage() {
  const { openQuoteModal } = useQuoteModal();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("recommended");

  const electronicsProducts = ALL_PRODUCTS.filter(
    (p) => p.mainCategory === "electronics"
  );

  const filteredProducts = electronicsProducts
    .filter((p) => {
      if (selectedCategory !== "all" && p.categorySlug !== selectedCategory) {
        return false;
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          (p.brand && p.brand.toLowerCase().includes(q)) ||
          (p.model && p.model.toLowerCase().includes(q))
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="bg-[#F8FAFC]">
      {/* Electronics Hero Banner */}
      <div className="bg-gradient-to-r from-brand-purple via-[#351E6B] to-brand-navy text-white py-16 md:py-24 border-b border-brand-purple-light/40 relative overflow-hidden">
        {/* Subtle geometric motif */}
        <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-20 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-white">
            <polygon points="100,10 170,50 170,140 100,190 30,140 30,50" fill="none" stroke="currentColor" strokeWidth="2" />
            <polygon points="100,30 150,60 150,130 100,170 50,130 50,60" fill="currentColor" fillOpacity="0.15" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Electronics" }]} theme="dark" />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-brand-purple-tint text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-purple-tint" />
              <span>Commercial & Consumer Electronics Showroom</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Electronics Showroom & Appliances
            </h1>
            <p className="text-base sm:text-lg text-purple-100 leading-relaxed font-normal">
              Explore our curated selection of 4K displays, energy-efficient refrigeration, commercial freezers, washing machines, and audio systems with verified warranty and local service support in Tanzania.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => openQuoteModal("Electronics Showroom")}
                className="bg-white hover:bg-brand-purple-tint text-brand-purple text-sm font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg flex items-center gap-2"
              >
                <span>Request Electronics Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#catalog-section"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                Explore Product Categories
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Electronics Category Showcase Grid */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                Explore by Category
              </div>
              <h2 className="text-2xl font-extrabold text-brand-navy">
                Browse Electronics Collections
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md">
              Select any collection to filter models, view technical specifications, and request competitive commercial pricing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ELECTRONICS_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.slug;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.slug);
                    const el = document.getElementById("catalog-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group ${
                    isSelected
                      ? "border-brand-purple bg-brand-purple-tint/50 shadow-md ring-2 ring-brand-purple/20"
                      : "border-gray-200 bg-white hover:border-brand-purple/50 hover:shadow-sm"
                  }`}
                >
                  <div className="relative h-24 w-full rounded-xl overflow-hidden bg-gray-100 mb-2.5">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 group-hover:text-brand-purple transition-colors line-clamp-2">
                      {cat.title}
                    </h3>
                    <span className="text-[10px] text-gray-400 font-medium block mt-1">
                      {cat.count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Filterable Product Catalog Section */}
      <section id="catalog-section" className="py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Controls Bar: Search, Category Pills & Sort */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            {/* Top row: Search + Sort */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search 4K TVs, fridges, washing machines, soundbars..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <span className="text-xs text-gray-500 font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple font-medium text-gray-700"
                >
                  <option value="recommended">Featured / Recommended</option>
                  <option value="name-asc">Product Name (A - Z)</option>
                  <option value="name-desc">Product Name (Z - A)</option>
                </select>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all ${
                  selectedCategory === "all"
                    ? "bg-brand-purple text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Products ({electronicsProducts.length})
              </button>

              {ELECTRONICS_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all ${
                    selectedCategory === cat.slug
                      ? "bg-brand-purple text-white shadow-sm font-bold"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container with Badge */}
                    <Link
                      href={`/electronics/products/${product.slug}`}
                      className="relative block h-56 w-full bg-gray-50 overflow-hidden"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-brand-navy text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow">
                        {product.brand || "Ingram Certified"}
                      </div>
                      <div className="absolute top-3 right-3 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                        In Stock
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-5 space-y-2.5">
                      <div className="text-[11px] font-medium text-brand-purple">
                        {product.category}
                      </div>

                      <Link href={`/electronics/products/${product.slug}`}>
                        <h3 className="text-sm font-bold text-gray-900 group-hover:text-brand-purple transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>

                      {product.model && (
                        <div className="text-[11px] font-mono text-gray-400">
                          Model: {product.model}
                        </div>
                      )}

                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>

                      {/* Specs Highlights */}
                      <div className="pt-2 border-t border-gray-100 space-y-1">
                        {Object.entries(product.specifications).slice(0, 2).map(([key, val], idx) => (
                          <div key={idx} className="flex justify-between text-[11px] text-gray-500">
                            <span>{key}:</span>
                            <span className="font-semibold text-gray-800 text-right truncate max-w-[130px]">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-5 pt-0 space-y-2">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/electronics/products/${product.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-1 bg-gray-100 hover:bg-brand-purple hover:text-white text-gray-800 text-xs font-semibold py-2 px-3 rounded-lg transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Specs</span>
                      </Link>
                      <button
                        onClick={() => openQuoteModal(`Electronics - ${product.name}`)}
                        className="flex-1 inline-flex items-center justify-center gap-1 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs font-semibold py-2 px-3 rounded-lg shadow-sm transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center space-y-4">
              <Tv className="w-12 h-12 text-brand-purple mx-auto opacity-50" />
              <h4 className="text-lg font-bold text-gray-900">No matching electronics found</h4>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                Try clearing your search term or switching categories. You can also send us a direct inquiry for any specific model or brand.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="bg-brand-purple text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-brand-purple-hover transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Electronics Quotation / Procurement Form */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceEnquiryForm
            defaultService="Electronics & Appliance Procurement"
            title="Request Commercial Electronics & Appliance Quotation"
            subtitle="Procure wholesale or institutional electronics, boardroom displays, or hospitality appliances with full installation and warranty."
            serviceOptions={[
              "Televisions & Commercial Boardroom Displays",
              "Refrigerators & Chest Freezers",
              "Washing Machines & Laundry Appliances",
              "Audio & Sound Systems",
              "Kitchen & Office Pantry Appliances",
              "Split Air Conditioners & Climate Control",
            ]}
          />
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
