"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { COMPANY_INFO } from "@/data/company";

export default function WhatsAppFloatingButton() {
  const whatsappLink = getWhatsAppUrl();

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-brand-navy text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with our engineers on WhatsApp
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp with ${COMPANY_INFO.name}`}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Radar ping animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </div>
  );
}
