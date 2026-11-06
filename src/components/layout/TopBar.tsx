"use client";

import React from "react";
import { Phone, Mail, MapPin, Inbox } from "lucide-react";
import { useWebsiteContent } from "@/context/WebsiteContentContext";

export default function TopBar() {
  const { settings } = useWebsiteContent();
  const phone = settings?.phone || "+255 767 777 472";
  const phoneClean = phone.replace(/[^0-9+]/g, "");
  const email1 = settings?.email_primary || "admin@ingram.co.tz";
  const email2 = settings?.email_secondary || "info@ingram.co.tz";
  const address = settings?.address || "Plot No. 42, Mwaikambo Street, Kijitonyama, Dar Es Salaam, Tanzania";
  const poBox = settings?.po_box || "P.O. Box 77123, Dar Es Salaam";

  return (
    <div className="bg-brand-purple text-white text-xs border-b border-brand-purple-light/40 py-1.5 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1">
        {/* Left Contacts */}
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${phoneClean}`}
            className="flex items-center gap-1.5 hover:text-brand-purple-tint transition-colors"
          >
            <Phone className="w-3.5 h-3.5 opacity-90 text-brand-purple-tint" />
            <span>{phone}</span>
          </a>
          <a
            href={`mailto:${email1}`}
            className="flex items-center gap-1.5 hover:text-brand-purple-tint transition-colors"
          >
            <Mail className="w-3.5 h-3.5 opacity-90 text-brand-purple-tint" />
            <span>{email1}</span>
          </a>
          <a
            href={`mailto:${email2}`}
            className="flex items-center gap-1.5 hover:text-brand-purple-tint transition-colors"
          >
            <Mail className="w-3.5 h-3.5 opacity-90 text-brand-purple-tint" />
            <span>{email2}</span>
          </a>
        </div>

        {/* Right Locations */}
        <div className="flex items-center space-x-6 text-white/90">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-purple-tint" />
            <span>{address}.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Inbox className="w-3.5 h-3.5 text-brand-purple-tint" />
            <span>{poBox}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
