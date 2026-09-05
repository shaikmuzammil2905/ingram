"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Cog, SlidersHorizontal, Gauge, Network, X, CheckCircle2, MessageSquare, Eye } from "lucide-react";
import { PRIMARY_SERVICES } from "@/data/company";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/ScrollReveal";
import { useQuoteModal } from "@/context/QuoteModalContext";

type ServiceItem = (typeof PRIMARY_SERVICES)[number];

export default function ServicesSection() {
  const { openQuoteModal } = useQuoteModal();
  const [selectedMobileService, setSelectedMobileService] = useState<ServiceItem | null>(null);
  const [automation, processControl, instrumentation, digitalTransformation] = PRIMARY_SERVICES;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F0F6FF] via-[#F6F9FD] to-white border-t border-b border-[#E2EDFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <ScrollReveal direction="up" distance={20} className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-2">
            <span>Engineering Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight uppercase">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-brand-purple mx-auto mt-3 rounded-full" />
          <p className="text-sm text-gray-600 mt-3">
            End-to-end industrial engineering capabilities engineered to enhance productivity, loop stability, and instrumentation accuracy across Tanzanian plants.
          </p>
        </ScrollReveal>

        {/* Top 3 Service Cards Grid with Scroll Stagger */}
        <ScrollStagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* 1. INDUSTRIAL AUTOMATION */}
          <ScrollStaggerItem direction="up" distance={30} className="flex">
            <div className="w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image
                  src={automation.image}
                  alt={automation.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Mobile Quick View Trigger Button */}
                <button
                  onClick={() => setSelectedMobileService(automation)}
                  className="md:hidden absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-brand-purple text-xs font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Quick View</span>
                </button>
              </div>

              {/* Content Container */}
              <div className="p-6 flex-1 flex flex-col justify-between relative bg-white">
                {/* Floating Circle Icon */}
                <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-purple flex items-center justify-center text-brand-purple shadow-md -mt-12 mb-4 relative z-10">
                  <Cog className="w-6 h-6 animate-spin-slow" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold text-brand-purple tracking-tight uppercase">
                    {automation.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {automation.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center gap-2">
                  <Link
                    href={automation.href}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all duration-200 group-hover:shadow-brand"
                  >
                    <span>{automation.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <button
                    onClick={() => setSelectedMobileService(automation)}
                    className="md:hidden p-2.5 bg-brand-purple-tint text-brand-purple rounded-lg border border-brand-purple/20"
                    aria-label="Quick mobile details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollStaggerItem>

          {/* 2. PROCESS CONTROL */}
          <ScrollStaggerItem direction="up" distance={30} className="flex">
            <div className="w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image
                  src={processControl.image}
                  alt={processControl.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedMobileService(processControl)}
                  className="md:hidden absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-brand-purple text-xs font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Quick View</span>
                </button>
              </div>

              {/* Content Container */}
              <div className="p-6 flex-1 flex flex-col justify-between relative bg-white">
                {/* Floating Circle Icon */}
                <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-purple flex items-center justify-center text-brand-purple shadow-md -mt-12 mb-4 relative z-10">
                  <SlidersHorizontal className="w-6 h-6" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold text-brand-purple tracking-tight uppercase">
                    {processControl.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {processControl.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center gap-2">
                  <Link
                    href={processControl.href}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all duration-200 group-hover:shadow-brand"
                  >
                    <span>{processControl.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <button
                    onClick={() => setSelectedMobileService(processControl)}
                    className="md:hidden p-2.5 bg-brand-purple-tint text-brand-purple rounded-lg border border-brand-purple/20"
                    aria-label="Quick mobile details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollStaggerItem>

          {/* 3. INSTRUMENTATION */}
          <ScrollStaggerItem direction="up" distance={30} className="flex">
            <div className="w-full bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image
                  src={instrumentation.image}
                  alt={instrumentation.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedMobileService(instrumentation)}
                  className="md:hidden absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-brand-purple text-xs font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Quick View</span>
                </button>
              </div>

              {/* Content Container */}
              <div className="p-6 flex-1 flex flex-col justify-between relative bg-white">
                {/* Floating Circle Icon */}
                <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-purple flex items-center justify-center text-brand-purple shadow-md -mt-12 mb-4 relative z-10">
                  <Gauge className="w-6 h-6" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold text-brand-purple tracking-tight uppercase">
                    {instrumentation.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {instrumentation.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center gap-2">
                  <Link
                    href={instrumentation.href}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all duration-200 group-hover:shadow-brand"
                  >
                    <span>{instrumentation.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <button
                    onClick={() => setSelectedMobileService(instrumentation)}
                    className="md:hidden p-2.5 bg-brand-purple-tint text-brand-purple rounded-lg border border-brand-purple/20"
                    aria-label="Quick mobile details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollStaggerItem>
        </ScrollStagger>

        {/* 4. DIGITAL TRANSFORMATION - Wide Card Layout with Scroll Reveal */}
        <ScrollReveal direction="up" distance={30}>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-brand-hover transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Image (5 cols) */}
              <div className="lg:col-span-5 relative h-64 sm:h-72 lg:h-80 bg-gray-100">
                <Image
                  src={digitalTransformation.image}
                  alt={digitalTransformation.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Details (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-14 h-14 shrink-0 rounded-full border-2 border-brand-purple bg-brand-purple-tint/60 flex items-center justify-center text-brand-purple shadow-sm">
                    <Network className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-brand-purple tracking-tight uppercase">
                      {digitalTransformation.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                      {digitalTransformation.description}
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-2">
                  <Link
                    href={digitalTransformation.href}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-sm transition-all duration-200"
                  >
                    <span>{digitalTransformation.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <button
                    onClick={() => setSelectedMobileService(digitalTransformation)}
                    className="md:hidden w-full inline-flex items-center justify-center gap-2 bg-brand-purple-tint text-brand-purple text-sm font-semibold px-4 py-2.5 rounded-lg border border-brand-purple/20"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Quick Specs</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Mobile Interactive Quick View Details Popup Modal */}
      <AnimatePresence>
        {selectedMobileService && (
          <div className="md:hidden fixed inset-0 z-50 flex items-end justify-center p-0 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMobileService(null)}
              className="fixed inset-0 bg-brand-navy-dark/75 backdrop-blur-sm"
            />

            {/* Bottom Sheet Popup */}
            <motion.div
              initial={{ y: "100%", opacity: 0.6 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="relative w-full bg-white rounded-t-3xl shadow-2xl overflow-hidden border-t border-brand-purple/20 max-h-[85vh] flex flex-col z-10"
            >
              {/* Drag bar */}
              <div className="pt-3 pb-1 bg-brand-purple flex justify-center">
                <div className="w-12 h-1.5 bg-white/40 rounded-full" />
              </div>

              {/* Header */}
              <div className="bg-brand-purple text-white p-5 relative">
                <button
                  onClick={() => setSelectedMobileService(null)}
                  className="absolute top-4 right-4 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-purple-tint mb-1">
                  Service Capability
                </div>
                <h3 className="text-xl font-bold pr-8">{selectedMobileService.title}</h3>
              </div>

              {/* Content Body */}
              <div className="p-5 overflow-y-auto space-y-4 flex-1">
                <div className="relative h-44 w-full rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={selectedMobileService.image}
                    alt={selectedMobileService.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  {selectedMobileService.description}
                </p>

                {/* Key Points */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                    Core Engineering Highlights
                  </div>
                  {selectedMobileService.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      const sName = selectedMobileService.title;
                      setSelectedMobileService(null);
                      openQuoteModal(sName);
                    }}
                    className="w-full py-3 bg-brand-purple hover:bg-brand-purple-hover text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Get Fast Quote on WhatsApp</span>
                  </button>

                  <Link
                    href={selectedMobileService.href}
                    onClick={() => setSelectedMobileService(null)}
                    className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-brand-navy font-semibold text-xs rounded-xl text-center"
                  >
                    <span>View Dedicated Page & Technical Specs</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
