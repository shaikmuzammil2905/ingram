"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Phone,
  Shield,
  Cpu,
  Gauge,
  Network,
  Layers,
  Sparkles,
  Laptop,
  LayoutGrid,
  Tv,
  Armchair,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { SOLUTIONS_LIST } from "@/data/company";
import {
  ICT_HARDWARE_CATEGORIES,
  SOFTWARE_CATEGORIES,
} from "@/data/catalog";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop dropdown states
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIaOpen, setMobileIaOpen] = useState(true);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      href: "/services",
      type: "services",
    },
    {
      name: "Solutions",
      href: "/solutions",
      type: "solutions",
    },
    { name: "Partners", href: "/partners" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white ${
          scrolled ? "shadow-md py-2" : "border-b border-gray-100 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Company Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative h-9 sm:h-10 w-40 sm:w-48 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/images/logo.png"
                alt="Ingram Enterprises Ltd Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) ||
                    (link.type === "services" &&
                      (pathname.startsWith("/ict-hardware") ||
                        pathname.startsWith("/software") ||
                        pathname.startsWith("/electronics") ||
                        pathname.startsWith("/office-equipment") ||
                        pathname.startsWith("/consumables")));

              // 1. SERVICES MEGA DROPDOWN (Contains Industrial Automation, ICT Hardware, Software, Electronics, Office Equipment & Consumables)
              if (link.type === "services") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors flex items-center gap-1 ${
                        isActive
                          ? "text-brand-purple font-bold"
                          : "text-gray-700 hover:text-brand-purple"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-brand-purple" : "text-gray-400"
                        }`}
                      />
                    </Link>

                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 pt-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="w-[640px] max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid gap-3">
                          {/* Overview Link */}
                          <div className="flex items-center justify-between pb-2 border-b border-gray-100 px-1">
                            <Link
                              href="/services"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="inline-flex items-center gap-2 text-xs font-extrabold text-brand-purple hover:text-brand-navy uppercase tracking-wider transition-colors"
                            >
                              <Sparkles className="w-4 h-4 text-brand-purple" />
                              <span>All Services Overview</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                            <span className="text-[11px] font-semibold text-gray-400">Complete Enterprise Solutions</span>
                          </div>

                          {/* Line 1: Industrial Automation & Nested Engineering */}
                          <div className="rounded-xl border border-brand-purple/20 bg-gradient-to-br from-brand-purple-tint/40 to-white p-3 space-y-2">
                            <div className="flex items-center justify-between">
                              <Link
                                href="/services/industrial-automation"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-brand-purple transition-colors group"
                              >
                                <div className="p-1.5 rounded-lg bg-brand-purple text-white shrink-0">
                                  <Cpu className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-brand-navy font-extrabold text-xs">1. Industrial Automation</span>
                                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-brand-purple text-white">
                                  Flagship
                                </span>
                              </Link>
                              <Link
                                href="/services/industrial-automation"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="text-[11px] font-semibold text-brand-purple hover:underline flex items-center gap-1"
                              >
                                <span>Hub</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                            <div className="grid grid-cols-3 gap-2 pt-1 border-t border-brand-purple/10">
                              <Link
                                href="/services/process-control"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="p-2 rounded-lg bg-white/80 hover:bg-white hover:shadow-xs border border-brand-purple/10 text-left group transition-all"
                              >
                                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-800 group-hover:text-brand-purple">
                                  <Layers className="w-3 h-3 text-brand-purple" />
                                  <span>Process Control</span>
                                </div>
                                <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">DCS, PLC & SCADA</p>
                              </Link>
                              <Link
                                href="/services/instrumentation"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="p-2 rounded-lg bg-white/80 hover:bg-white hover:shadow-xs border border-brand-purple/10 text-left group transition-all"
                              >
                                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-800 group-hover:text-brand-purple">
                                  <Gauge className="w-3 h-3 text-brand-purple" />
                                  <span>Instrumentation</span>
                                </div>
                                <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">Yokogawa Sensors</p>
                              </Link>
                              <Link
                                href="/services/digital-transformation"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="p-2 rounded-lg bg-white/80 hover:bg-white hover:shadow-xs border border-brand-purple/10 text-left group transition-all"
                              >
                                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-800 group-hover:text-brand-purple">
                                  <Network className="w-3 h-3 text-brand-purple" />
                                  <span>Digital Transf.</span>
                                </div>
                                <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">IIoT & Predictive AI</p>
                              </Link>
                            </div>
                          </div>

                          {/* Line 2: ICT Hardware */}
                          <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-3 space-y-2">
                            <div className="flex items-center justify-between">
                              <Link
                                href="/ict-hardware"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-brand-purple transition-colors"
                              >
                                <div className="p-1.5 rounded-lg bg-brand-purple-tint text-brand-purple shrink-0">
                                  <Laptop className="w-3.5 h-3.5" />
                                </div>
                                <span className="font-extrabold text-xs">2. ICT Hardware</span>
                              </Link>
                              <Link
                                href="/ict-hardware"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="text-[11px] font-semibold text-brand-purple hover:underline flex items-center gap-1"
                              >
                                <span>All ICT Hardware</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                            <div className="grid grid-cols-5 gap-1.5 pt-1 border-t border-gray-200/60 text-center">
                              {ICT_HARDWARE_CATEGORIES.map((cat) => (
                                <Link
                                  key={cat.id}
                                  href={`/ict-hardware/${cat.slug}`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="p-1.5 rounded-lg bg-white hover:bg-brand-purple hover:text-white border border-gray-200/60 text-gray-700 transition-colors group flex flex-col items-center justify-center gap-1"
                                >
                                  <span className="text-[10.5px] font-semibold line-clamp-1 leading-tight">
                                    {cat.title}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Line 3: Software Solutions */}
                          <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-3 space-y-2">
                            <div className="flex items-center justify-between">
                              <Link
                                href="/software"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-brand-purple transition-colors"
                              >
                                <div className="p-1.5 rounded-lg bg-brand-purple-tint text-brand-purple shrink-0">
                                  <LayoutGrid className="w-3.5 h-3.5" />
                                </div>
                                <span className="font-extrabold text-xs">3. Software Solutions</span>
                              </Link>
                              <Link
                                href="/software"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="text-[11px] font-semibold text-brand-purple hover:underline flex items-center gap-1"
                              >
                                <span>All Software</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                            <div className="grid grid-cols-5 gap-1.5 pt-1 border-t border-gray-200/60 text-center">
                              {SOFTWARE_CATEGORIES.map((cat) => (
                                <Link
                                  key={cat.id}
                                  href={`/software/${cat.slug}`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="p-1.5 rounded-lg bg-white hover:bg-brand-purple hover:text-white border border-gray-200/60 text-gray-700 transition-colors group flex flex-col items-center justify-center gap-1"
                                >
                                  <span className="text-[10.5px] font-semibold line-clamp-1 leading-tight">
                                    {cat.title}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Line 4 & 5 Grid: Electronics + Office Equipment & Consumables */}
                          <div className="grid grid-cols-2 gap-3">
                            {/* Line 4: Electronics */}
                            <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-3 space-y-2 flex flex-col justify-between">
                              <div className="flex items-center justify-between">
                                <Link
                                  href="/electronics"
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-brand-purple transition-colors"
                                >
                                  <div className="p-1.5 rounded-lg bg-brand-purple-tint text-brand-purple shrink-0">
                                    <Tv className="w-3.5 h-3.5" />
                                  </div>
                                  <span className="font-extrabold text-xs">4. Electronics</span>
                                </Link>
                                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                                  Showroom
                                </span>
                              </div>
                              <p className="text-[10.5px] text-gray-600 line-clamp-2">
                                Commercial displays, refrigerators, freezers, ACs, washing machines & audio systems.
                              </p>
                              <Link
                                href="/electronics"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="w-full py-1.5 px-2.5 rounded-lg bg-white hover:bg-brand-purple hover:text-white border border-gray-200/80 text-xs font-bold text-brand-purple text-center transition-colors flex items-center justify-center gap-1"
                              >
                                <span>Open Electronics Showroom</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>

                            {/* Line 5: Office Equipment & Consumables */}
                            <div className="rounded-xl border border-gray-100 bg-gray-50/70 p-3 space-y-2 flex flex-col justify-between">
                              <div className="flex items-center justify-between">
                                <Link
                                  href="/office-equipment"
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-brand-purple transition-colors"
                                >
                                  <div className="p-1.5 rounded-lg bg-brand-purple-tint text-brand-purple shrink-0">
                                    <Armchair className="w-3.5 h-3.5" />
                                  </div>
                                  <span className="font-extrabold text-xs">5. Office & Supplies</span>
                                </Link>
                              </div>
                              <div className="grid grid-cols-2 gap-1 text-[10.5px]">
                                <Link
                                  href="/office-equipment"
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="p-1.5 rounded bg-white hover:bg-brand-purple hover:text-white border border-gray-200/60 text-gray-700 text-center font-medium transition-colors"
                                >
                                  Office Furniture
                                </Link>
                                <Link
                                  href="/consumables"
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="p-1.5 rounded bg-white hover:bg-brand-purple hover:text-white border border-gray-200/60 text-gray-700 text-center font-medium transition-colors"
                                >
                                  Consumables & Paper
                                </Link>
                              </div>
                              <Link
                                href="/office-equipment"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="w-full py-1 px-2 text-[11px] font-semibold text-brand-purple hover:underline text-center flex items-center justify-center gap-1"
                              >
                                <span>Explore Office Catalog</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // 2. SOLUTIONS DROPDOWN
              if (link.type === "solutions") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setSolutionsDropdownOpen(true)}
                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors flex items-center gap-1 ${
                        isActive
                          ? "text-brand-purple font-bold"
                          : "text-gray-700 hover:text-brand-purple"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          solutionsDropdownOpen ? "rotate-180 text-brand-purple" : "text-gray-400"
                        }`}
                      />
                    </Link>

                    {solutionsDropdownOpen && (
                      <div className="absolute top-full left-0 pt-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="w-[360px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 grid gap-1">
                          <div className="flex items-center justify-between pb-2 border-b border-gray-100 px-2">
                            <Link
                              href="/solutions"
                              onClick={() => setSolutionsDropdownOpen(false)}
                              className="text-xs font-bold text-brand-purple hover:text-brand-navy flex items-center gap-1.5 uppercase tracking-wider"
                            >
                              <span>Solutions Overview</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                          {SOLUTIONS_LIST.map((sol) => (
                            <Link
                              key={sol.id}
                              href={`/solutions#${sol.id}`}
                              onClick={() => setSolutionsDropdownOpen(false)}
                              className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-brand-purple-tint/50 transition-colors group"
                            >
                              <div className="w-2 h-2 rounded-full bg-brand-purple mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                              <div>
                                <div className="text-xs font-bold text-gray-900 group-hover:text-brand-purple">
                                  {sol.title}
                                </div>
                                <div className="text-[11px] text-gray-500 line-clamp-1">
                                  {sol.tagline}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Normal Direct Links (Home, About Us, Partners, Products, Industries, Contact Us)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive
                      ? "text-brand-purple font-bold"
                      : "text-gray-700 hover:text-brand-purple"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg shadow-sm hover:shadow-brand transition-all duration-200 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => openQuoteModal()}
              className="bg-brand-purple text-white text-xs font-semibold px-2.5 py-1.5 rounded-md"
            >
              Quote
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-brand-purple rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex">
          {/* Overlay backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-250">
            {/* Header */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="relative h-8 w-36">
                <Image
                  src="/images/logo.png"
                  alt="Ingram Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-900 rounded-lg"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Nav Links */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-brand-purple hover:bg-brand-purple-tint/40 rounded-lg"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-brand-purple hover:bg-brand-purple-tint/40 rounded-lg"
              >
                About Us
              </Link>

              {/* 1. Mobile Services Accordion (Includes IA, ICT Hardware, Software, Electronics, Office Equipment) */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-brand-purple rounded-lg"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileServicesOpen ? "rotate-180 text-brand-purple" : ""
                    }`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-3 pr-2 py-2 space-y-2 bg-gray-50 rounded-xl my-1 border border-gray-100">
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs font-bold text-brand-purple uppercase tracking-wider bg-white rounded-lg border border-brand-purple/10"
                    >
                      All Services Overview →
                    </Link>

                    {/* Industrial Automation Parent Accordion */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="flex items-center justify-between px-3 py-2 bg-brand-purple-tint/40">
                        <Link
                          href="/services/industrial-automation"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-brand-purple"
                        >
                          <Cpu className="w-3.5 h-3.5 text-brand-purple" />
                          <span>1. Industrial Automation</span>
                        </Link>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileIaOpen(!mobileIaOpen);
                          }}
                          className="p-1 text-gray-500 hover:text-brand-purple"
                        >
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform ${
                              mobileIaOpen ? "rotate-180 text-brand-purple" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {mobileIaOpen && (
                        <div className="pl-5 pr-3 py-2 space-y-1 bg-white border-t border-gray-100">
                          <Link
                            href="/services/industrial-automation"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs font-semibold text-brand-purple hover:underline"
                          >
                            • Industrial Automation Hub
                          </Link>
                          <Link
                            href="/services/process-control"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs text-gray-700 hover:text-brand-purple"
                          >
                            • Process Control
                          </Link>
                          <Link
                            href="/services/instrumentation"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs text-gray-700 hover:text-brand-purple"
                          >
                            • Instrumentation
                          </Link>
                          <Link
                            href="/services/digital-transformation"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs text-gray-700 hover:text-brand-purple"
                          >
                            • Digital Transformation
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* 2. ICT Hardware inside Services */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="flex items-center justify-between px-3 py-2 bg-gray-50">
                        <Link
                          href="/ict-hardware"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-brand-purple"
                        >
                          <Laptop className="w-3.5 h-3.5 text-brand-purple" />
                          <span>2. ICT Hardware</span>
                        </Link>
                      </div>
                      <div className="pl-5 pr-3 py-2 space-y-1 bg-white border-t border-gray-100">
                        {ICT_HARDWARE_CATEGORIES.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/ict-hardware/${cat.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs text-gray-700 hover:text-brand-purple"
                          >
                            • {cat.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* 3. Software Solutions inside Services */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="flex items-center justify-between px-3 py-2 bg-gray-50">
                        <Link
                          href="/software"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-brand-purple"
                        >
                          <LayoutGrid className="w-3.5 h-3.5 text-brand-purple" />
                          <span>3. Software Solutions</span>
                        </Link>
                      </div>
                      <div className="pl-5 pr-3 py-2 space-y-1 bg-white border-t border-gray-100">
                        {SOFTWARE_CATEGORIES.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/software/${cat.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs text-gray-700 hover:text-brand-purple"
                          >
                            • {cat.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* 4. Electronics inside Services */}
                    <Link
                      href="/electronics"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2 bg-white rounded-lg border border-gray-200 text-xs font-bold text-gray-900 hover:text-brand-purple"
                    >
                      <div className="flex items-center gap-2">
                        <Tv className="w-3.5 h-3.5 text-brand-purple" />
                        <span>4. Electronics Showroom</span>
                      </div>
                      <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">Catalog</span>
                    </Link>

                    {/* 5. Office Equipment & Consumables inside Services */}
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <div className="flex items-center justify-between px-3 py-2 bg-gray-50">
                        <Link
                          href="/office-equipment"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-brand-purple"
                        >
                          <Armchair className="w-3.5 h-3.5 text-brand-purple" />
                          <span>5. Office & Consumables</span>
                        </Link>
                      </div>
                      <div className="pl-5 pr-3 py-2 space-y-1 bg-white border-t border-gray-100">
                        <Link
                          href="/office-equipment"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 text-xs font-semibold text-brand-purple hover:underline"
                        >
                          • Office Furniture & Racks
                        </Link>
                        <Link
                          href="/consumables"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 text-xs font-semibold text-brand-purple hover:underline"
                        >
                          • Printer Paper & Toners
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Mobile Solutions Accordion */}
              <div>
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-brand-purple rounded-lg"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileSolutionsOpen ? "rotate-180 text-brand-purple" : ""
                    }`}
                  />
                </button>
                {mobileSolutionsOpen && (
                  <div className="pl-4 pr-2 py-1.5 space-y-1 bg-gray-50 rounded-lg my-1">
                    <Link
                      href="/solutions"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-2 py-1 text-xs font-bold text-brand-purple uppercase"
                    >
                      Solutions Overview →
                    </Link>
                    {SOLUTIONS_LIST.map((sol) => (
                      <Link
                        key={sol.id}
                        href={`/solutions#${sol.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-2 py-1.5 text-xs text-gray-700 hover:text-brand-purple"
                      >
                        • {sol.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Partners */}
              <Link
                href="/partners"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-brand-purple hover:bg-brand-purple-tint/40 rounded-lg"
              >
                Partners (Yokogawa)
              </Link>

              {/* 4. Products */}
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-brand-purple hover:bg-brand-purple-tint/40 rounded-lg"
              >
                Products
              </Link>

              {/* 5. Industries */}
              <Link
                href="/industries"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-brand-purple hover:bg-brand-purple-tint/40 rounded-lg"
              >
                Industries
              </Link>

              {/* 6. Contact Us */}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-brand-purple hover:bg-brand-purple-tint/40 rounded-lg"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="p-4 border-t border-gray-100 bg-brand-gray space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full bg-brand-purple hover:bg-brand-purple-hover text-white py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+255744550551"
                className="w-full bg-white border border-gray-300 text-gray-800 py-2.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-purple" />
                <span>Call +255 744 550 551</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
