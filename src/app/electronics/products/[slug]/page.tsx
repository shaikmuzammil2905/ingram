"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Truck,
  Layers,
  Sparkles,
  Share2,
  Tag,
  PhoneCall,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import ServiceEnquiryForm from "@/components/shared/ServiceEnquiryForm";
import { ALL_PRODUCTS, ProductItem } from "@/data/catalog";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { openQuoteModal } = useQuoteModal();

  const product = ALL_PRODUCTS.find(
    (p) => p.slug === slug || p.id === slug
  );

  const [activeImage, setActiveImage] = useState<string>(
    product?.image || ""
  );

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Product Not Found</h1>
        <p className="text-gray-600">The requested product could not be located in our catalog.</p>
        <Link
          href="/electronics"
          className="inline-flex items-center gap-2 bg-brand-purple text-white px-6 py-2.5 rounded-lg font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Electronics Catalog</span>
        </Link>
      </div>
    );
  }

  const gallery = product.gallery && product.gallery.length > 0
    ? [product.image, ...product.gallery.filter(img => img !== product.image)]
    : [product.image];

  const relatedProducts = ALL_PRODUCTS.filter(
    (p) => p.mainCategory === product.mainCategory && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="bg-[#F8FAFC]">
      {/* Top Breadcrumbs Bar */}
      <div className="bg-brand-navy text-white py-6 border-b border-brand-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Electronics Showroom", href: "/electronics" },
              { label: product.category, href: "/electronics" },
              { label: product.name },
            ]}
            theme="dark"
          />
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
            {/* Left: Product Images & Gallery (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main Active Image */}
              <div className="relative h-80 sm:h-96 md:h-[420px] w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-200">
                <Image
                  src={activeImage || product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  priority
                />
                <div className="absolute top-4 left-4 bg-brand-navy text-white text-xs font-bold px-3 py-1 rounded-md shadow">
                  {product.brand || "Ingram Certified"}
                </div>
                {product.inStock && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    In Stock & Available
                  </div>
                )}
              </div>

              {/* Thumbnails if multiple images exist */}
              {gallery.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative h-20 w-20 rounded-xl overflow-hidden border-2 shrink-0 bg-gray-50 transition-all ${
                        activeImage === img
                          ? "border-brand-purple shadow-sm ring-2 ring-brand-purple/20"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        fill
                        className="object-contain p-1"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Assurance Trust Badges */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 text-xs text-gray-700">
                  <ShieldCheck className="w-5 h-5 text-brand-purple shrink-0" />
                  <span>Verified Genuine Product Warranty</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 text-xs text-gray-700">
                  <Truck className="w-5 h-5 text-brand-purple shrink-0" />
                  <span>Dar Es Salaam & Regional Delivery</span>
                </div>
              </div>
            </div>

            {/* Right: Product Details & Actions (6 cols) */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple-tint text-brand-purple text-xs font-bold uppercase tracking-wider">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{product.category}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy leading-tight">
                  {product.name}
                </h1>

                {product.model && (
                  <div className="text-xs font-mono text-gray-500 bg-gray-100 px-3 py-1 rounded-md inline-block">
                    Model: {product.model}
                  </div>
                )}

                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Product Highlights & Features:
                  </div>
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quotation / Enquiry CTA Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-purple-tint/40 to-white border border-brand-purple/20 space-y-4 mt-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                    Pricing & Commercial Supply
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mt-0.5">
                    Quotation on Request (Institutional / Wholesale / Retail)
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Contact our sales team for instant pricing, bulk discounts, and installation support in Tanzania.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => openQuoteModal(`Product: ${product.name} (${product.model || ""})`)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold py-3 px-6 rounded-xl shadow-md transition-all hover:shadow-brand"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Request Instant Quote</span>
                  </button>

                  <a
                    href={getWhatsAppUrl(`Hello Ingram Enterprises, I would like to inquire about the ${product.name} (Model: ${product.model || "N/A"}). Please provide price and delivery timeline.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold py-3 px-5 rounded-xl transition-colors shadow-sm"
                  >
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="py-12 bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
              Engineering Data
            </div>
            <h2 className="text-2xl font-extrabold text-brand-navy">
              Full Technical Specifications
            </h2>
          </div>

          <div className="max-w-4xl overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-gray-200">
                {Object.entries(product.specifications).map(([key, val], idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-gray-50/70" : "bg-white"}
                  >
                    <td className="py-3.5 px-6 font-semibold text-gray-700 w-1/3 text-xs sm:text-sm">
                      {key}
                    </td>
                    <td className="py-3.5 px-6 text-gray-900 text-xs sm:text-sm font-medium">
                      {val}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Products Showcase */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                  More Options
                </div>
                <h3 className="text-2xl font-extrabold text-brand-navy">
                  Related Products & Models
                </h3>
              </div>
              <Link
                href="/electronics"
                className="text-xs font-semibold text-brand-purple hover:underline flex items-center gap-1"
              >
                <span>View All Electronics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <Link
                    href={`/electronics/products/${p.slug}`}
                    className="relative block h-44 w-full bg-gray-50 overflow-hidden"
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="p-4 space-y-2">
                    <h4 className="text-xs font-bold text-gray-900 group-hover:text-brand-purple transition-colors line-clamp-2">
                      {p.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 line-clamp-2">
                      {p.shortDescription}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`/electronics/products/${p.slug}`}
                        className="text-xs font-semibold text-brand-purple hover:underline flex items-center gap-1"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enquiry Form Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceEnquiryForm
            defaultService={`Product Inquiry: ${product.name}`}
            title={`Inquire About ${product.name}`}
            subtitle="Submit your required quantity, delivery location, or institutional procurement details."
          />
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
