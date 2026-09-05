"use client";

import React from "react";
import { Target, Eye, ShieldCheck, Compass } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { ScrollStagger, ScrollStaggerItem } from "@/components/shared/ScrollReveal";

export default function TrustIndicatorRow() {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Full-width 2-column grid with scroll stagger animation */}
        <ScrollStagger staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Mission Card */}
          <ScrollStaggerItem direction="up" distance={20} className="flex">
            <div className="w-full bg-white rounded-2xl p-7 sm:p-8 border border-gray-200/90 shadow-sm hover:shadow-brand hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-full border border-brand-purple/30 bg-brand-purple-tint flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                      Our Purpose
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Mission</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </div>
              <div className="pt-5 border-t border-gray-100 mt-5 text-xs font-semibold text-brand-purple flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Dedicated to Industrial Reliability & Safety</span>
              </div>
            </div>
          </ScrollStaggerItem>

          {/* Vision Card */}
          <ScrollStaggerItem direction="up" distance={20} className="flex">
            <div className="w-full bg-white rounded-2xl p-7 sm:p-8 border border-gray-200/90 shadow-sm hover:shadow-brand hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-full border border-brand-purple/30 bg-brand-purple-tint flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                      Our Future
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Vision</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>
              <div className="pt-5 border-t border-gray-100 mt-5 text-xs font-semibold text-brand-purple flex items-center gap-2">
                <Compass className="w-4 h-4" />
                <span>Advancing Tanzania&apos;s Industrial Future</span>
              </div>
            </div>
          </ScrollStaggerItem>
        </ScrollStagger>
      </div>
    </section>
  );
}
