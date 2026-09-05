"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cog, SlidersHorizontal, Gauge, Network } from "lucide-react";
import { PRIMARY_SERVICES } from "@/data/company";

export default function ServicesSection() {
  const [automation, processControl, instrumentation, digitalTransformation] = PRIMARY_SERVICES;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight uppercase">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-brand-purple mx-auto mt-3 rounded-full" />
          <p className="text-sm text-gray-600 mt-3">
            End-to-end industrial engineering capabilities engineered to enhance productivity, loop stability, and instrumentation accuracy across Tanzanian plants.
          </p>
        </div>

        {/* Top 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* 1. INDUSTRIAL AUTOMATION */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-brand-card hover:shadow-brand-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
            {/* Image Container */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={automation.image}
                alt={automation.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/60 via-transparent to-transparent" />
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
              <div className="pt-6 mt-4 border-t border-gray-100">
                <Link
                  href={automation.href}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all duration-200 group-hover:shadow-brand"
                >
                  <span>{automation.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* 2. PROCESS CONTROL */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-brand-card hover:shadow-brand-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
            {/* Image Container */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={processControl.image}
                alt={processControl.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/60 via-transparent to-transparent" />
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
              <div className="pt-6 mt-4 border-t border-gray-100">
                <Link
                  href={processControl.href}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all duration-200 group-hover:shadow-brand"
                >
                  <span>{processControl.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* 3. INSTRUMENTATION */}
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-brand-card hover:shadow-brand-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
            {/* Image Container */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={instrumentation.image}
                alt={instrumentation.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/60 via-transparent to-transparent" />
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
              <div className="pt-6 mt-4 border-t border-gray-100">
                <Link
                  href={instrumentation.href}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all duration-200 group-hover:shadow-brand"
                >
                  <span>{instrumentation.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4. DIGITAL TRANSFORMATION - Wide Card Layout matching image.png */}
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-brand-card hover:shadow-brand-hover transition-all duration-300 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Image (5 cols) */}
            <div className="lg:col-span-4 relative h-64 sm:h-72 lg:h-full min-h-[220px]">
              <Image
                src={digitalTransformation.image}
                alt={digitalTransformation.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-brand-purple/10 mix-blend-multiply" />
            </div>

            {/* Right Details (8 cols) */}
            <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
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
              <div className="shrink-0 w-full md:w-auto">
                <Link
                  href={digitalTransformation.href}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-brand-purple text-brand-purple hover:text-white border-2 border-brand-purple text-sm font-semibold px-6 py-2.5 rounded-lg shadow-sm transition-all duration-200 group-hover:bg-brand-purple group-hover:text-white"
                >
                  <span>{digitalTransformation.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
