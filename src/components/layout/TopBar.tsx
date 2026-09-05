"use client";

import React from "react";
import { Phone, Mail, MapPin, Inbox } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function TopBar() {
  return (
    <div className="bg-brand-purple text-white text-xs border-b border-brand-purple-light/40 py-1.5 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1">
        {/* Left Contacts */}
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="flex items-center gap-1.5 hover:text-brand-purple-tint transition-colors"
          >
            <Phone className="w-3.5 h-3.5 opacity-90 text-brand-purple-tint" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
          <a
            href={`mailto:${COMPANY_INFO.emails[0]}`}
            className="flex items-center gap-1.5 hover:text-brand-purple-tint transition-colors"
          >
            <Mail className="w-3.5 h-3.5 opacity-90 text-brand-purple-tint" />
            <span>{COMPANY_INFO.emails[0]}</span>
          </a>
          <a
            href={`mailto:${COMPANY_INFO.emails[1]}`}
            className="flex items-center gap-1.5 hover:text-brand-purple-tint transition-colors"
          >
            <Mail className="w-3.5 h-3.5 opacity-90 text-brand-purple-tint" />
            <span>{COMPANY_INFO.emails[1]}</span>
          </a>
        </div>

        {/* Right Locations */}
        <div className="flex items-center space-x-6 text-white/90">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-purple-tint" />
            <span>{COMPANY_INFO.address}.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Inbox className="w-3.5 h-3.5 text-brand-purple-tint" />
            <span>{COMPANY_INFO.poBox}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
