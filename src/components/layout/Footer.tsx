"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Linkedin,
  Facebook,
  MessageCircle,
  Youtube,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_INFO, PRIMARY_SERVICES } from "@/data/company";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Partners", href: "/partners" },
    { name: "Industries", href: "/industries" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-brand-purple/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-56">
                <Image
                  src="/images/logo-white.svg"
                  alt="Ingram Enterprises Ltd Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              {COMPANY_INFO.heroDescription}
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ingram LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-purple flex items-center justify-center transition-colors text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ingram Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-purple flex items-center justify-center transition-colors text-white"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ingram WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors text-white"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Solutions & Catalogs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-purple-tint">
              Products & Catalogs
            </h4>
            <ul className="space-y-2">
              {[
                { name: "ICT Hardware", href: "/ict-hardware" },
                { name: "Software Solutions", href: "/software" },
                { name: "Electronics Showroom", href: "/electronics" },
                { name: "Office Equipment", href: "/office-equipment" },
                { name: "Consumables", href: "/consumables" },
                { name: "All Services", href: "/services" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-purple group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Portfolios & Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-purple-tint">
              Our Portfolios & Solutions
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Industrial Automation", href: "/services/industrial-automation" },
                { name: "Computer HW & Software", href: "/ict-hardware" },
                { name: "Electronics Items", href: "/electronics" },
                { name: "Office Equipment & Furniture", href: "/office-equipment" },
                { name: "All 4 Solutions Overview", href: "/solutions" },
                { name: "Technology Brands & Partners", href: "/partners" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white text-sm flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-purple group-hover:translate-x-0.5 transition-transform" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-purple-tint">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-purple-tint shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address}.<br />
                  {COMPANY_INFO.poBox}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-purple-tint shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-purple-tint shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.emails[0]}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.emails[0]}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-purple-tint shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.emails[1]}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.emails[1]}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>{COMPANY_INFO.copyright}</p>
          <div className="flex items-center gap-4">
            <span>{COMPANY_INFO.footerCredit}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
