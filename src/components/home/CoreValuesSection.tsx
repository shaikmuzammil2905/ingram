"use client";

import React from "react";
import {
  Lightbulb,
  Award,
  ShieldCheck,
  Users,
  HardHat,
  Globe,
  Handshake,
  Leaf,
} from "lucide-react";
import { CORE_VALUES } from "@/data/company";

export default function CoreValuesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Lightbulb":
        return <Lightbulb className="w-6 h-6 text-white" />;
      case "Award":
        return <Award className="w-6 h-6 text-white" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-white" />;
      case "Users":
        return <Users className="w-6 h-6 text-white" />;
      case "HardHat":
        return <HardHat className="w-6 h-6 text-white" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-white" />;
      case "Handshake":
        return <Handshake className="w-6 h-6 text-white" />;
      case "Leaf":
        return <Leaf className="w-6 h-6 text-white" />;
      default:
        return <Award className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section className="py-16 md:py-20 bg-brand-gray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with purple accent underline */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight uppercase">
            Our Core Values
          </h2>
          <div className="w-16 h-1 bg-brand-purple mx-auto mt-3 rounded-full" />
          <p className="text-sm text-gray-600 mt-3">
            The guiding principles that define our engineering discipline, client relationships, and industrial commitment across Tanzania.
          </p>
        </div>

        {/* 8 Values Grid - 4 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val) => (
            <div
              key={val.id}
              className="bg-white rounded-xl p-6 border border-gray-200/80 shadow-sm hover:shadow-brand-hover hover:-translate-y-1 hover:border-brand-purple/40 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Purple Circle Icon Container */}
              <div className="w-14 h-14 rounded-full bg-brand-purple flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 group-hover:bg-brand-purple-light transition-all duration-300">
                {getIcon(val.icon)}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-bold text-gray-900 tracking-wide mb-2.5 uppercase">
                {val.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
