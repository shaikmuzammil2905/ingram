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
  Printer,
  Zap,
  LayoutGrid,
  Users,
  DraftingCompass,
  GraduationCap,
  Calculator,
  Tv,
  Monitor,
  Armchair,
  FolderKanban,
  Archive,
  FileText,
  Droplet,
  Package,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { PRIMARY_SERVICES } from "@/data/company";
import {
  ICT_HARDWARE_CATEGORIES,
  SOFTWARE_CATEGORIES,
  OFFICE_EQUIPMENT_CATEGORIES,
  CONSUMABLES_CATEGORIES,
} from "@/data/catalog";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Desktop dropdown states
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [ictDropdownOpen, setIctDropdownOpen] = useState(false);
  const [softwareDropdownOpen, setSoftwareDropdownOpen] = useState(false);
  const [officeDropdownOpen, setOfficeDropdownOpen] = useState(false);

  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIaOpen, setMobileIaOpen] = useState(true);
  const [mobileIctOpen, setMobileIctOpen] = useState(false);
  const [mobileSoftwareOpen, setMobileSoftwareOpen] = useState(false);
  const [mobileOfficeOpen, setMobileOfficeOpen] = useState(false);

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
    setIctDropdownOpen(false);
    setSoftwareDropdownOpen(false);
    setOfficeDropdownOpen(false);
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
      name: "ICT Hardware",
      href: "/ict-hardware",
      type: "ict-hardware",
    },
    {
      name: "Software Solutions",
      href: "/software",
      type: "software",
    },
    {
      name: "Electronics",
      href: "/electronics",
      type: "electronics",
    },
    {
      name: "Office Equipment & Consumables",
      href: "/office-equipment",
      type: "office-equipment",
    },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white ${
          scrolled ? "shadow-md py-2" : "border-b border-gray-100 py-3"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
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
          <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) ||
                    (link.type === "office-equipment" && pathname.startsWith("/consumables"));

              // 1. SERVICES DROPDOWN (Nested Industrial Automation)
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
                      className={`px-2.5 py-2 text-[13px] font-semibold rounded-md transition-colors flex items-center gap-1 ${
                        isActive
                          ? "text-brand-purple font-bold"
                          : "text-gray-700 hover:text-brand-purple"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-brand-purple" : "text-gray-400"
                        }`}
                      />
                    </Link>

                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 pt-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="w-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid gap-2.5">
                          <div className="flex items-center justify-between pb-2 border-b border-gray-100 px-2">
                            <Link
                              href="/services"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="inline-flex items-center gap-2 text-xs font-extrabold text-brand-purple hover:text-brand-navy uppercase tracking-wider transition-colors"
                            >
                              <Sparkles className="w-4 h-4 text-brand-purple" />
                              <span>All Services Overview</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                            <span className="text-[11px] font-semibold text-gray-400">Engineering Portfolio</span>
                          </div>

                          <div className="grid gap-2">
                            {/* Industrial Automation (Flagship) */}
                            <Link
                              href="/services/industrial-automation"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="flex items-start gap-3 p-2.5 rounded-xl bg-gradient-to-r from-brand-purple-tint/70 to-white hover:from-brand-purple hover:to-brand-navy hover:text-white transition-all duration-200 group border border-brand-purple/20"
                            >
                              <div className="p-2 rounded-lg bg-brand-purple text-white group-hover:bg-white group-hover:text-brand-purple transition-colors shrink-0 mt-0.5">
                                <Cpu className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-bold text-gray-900 group-hover:text-white transition-colors">
                                    Industrial Automation
                                  </span>
                                  <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full bg-brand-purple text-white group-hover:bg-white group-hover:text-brand-purple transition-colors">
                                    Flagship
                                  </span>
                                </div>
                                <p className="text-[11px] text-gray-600 group-hover:text-purple-100 transition-colors mt-0.5 line-clamp-1">
                                  Turnkey plant automation, control systems & safety shutdown
                                </p>
                              </div>
                            </Link>

                            {/* Subcategories */}
                            <Link
                              href="/services/process-control"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-purple-tint/50 transition-all group border border-gray-100"
                            >
                              <div className="p-2 rounded-lg bg-brand-purple-tint text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors shrink-0 mt-0.5">
                                <Layers className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold text-gray-900 group-hover:text-brand-purple">
                                  Process Control
                                </div>
                                <p className="text-[11px] text-gray-500 line-clamp-1">
                                  DCS architecture, PLC sequencing, SCADA & loop tuning
                                </p>
                              </div>
                            </Link>

                            <Link
                              href="/services/instrumentation"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-purple-tint/50 transition-all group border border-gray-100"
                            >
                              <div className="p-2 rounded-lg bg-brand-purple-tint text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors shrink-0 mt-0.5">
                                <Gauge className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold text-gray-900 group-hover:text-brand-purple">
                                  Instrumentation
                                </div>
                                <p className="text-[11px] text-gray-500 line-clamp-1">
                                  Yokogawa pressure, flow, level & temperature transmitters
                                </p>
                              </div>
                            </Link>

                            <Link
                              href="/services/digital-transformation"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-purple-tint/50 transition-all group border border-gray-100"
                            >
                              <div className="p-2 rounded-lg bg-brand-purple-tint text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors shrink-0 mt-0.5">
                                <Network className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold text-gray-900 group-hover:text-brand-purple">
                                  Digital Transformation
                                </div>
                                <p className="text-[11px] text-gray-500 line-clamp-1">
                                  Industrial IoT, real-time historians & predictive AI
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // 2. ICT HARDWARE DROPDOWN (5 Categories)
              if (link.type === "ict-hardware") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIctDropdownOpen(true)}
                    onMouseLeave={() => setIctDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-2.5 py-2 text-[13px] font-semibold rounded-md transition-colors flex items-center gap-1 ${
                        isActive
                          ? "text-brand-purple font-bold"
                          : "text-gray-700 hover:text-brand-purple"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          ictDropdownOpen ? "rotate-180 text-brand-purple" : "text-gray-400"
                        }`}
                      />
                    </Link>

                    {ictDropdownOpen && (
                      <div className="absolute top-full left-0 pt-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="w-[440px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid gap-2">
                          <div className="flex items-center justify-between pb-2 border-b border-gray-100 px-2">
                            <Link
                              href="/ict-hardware"
                              onClick={() => setIctDropdownOpen(false)}
                              className="text-xs font-bold text-brand-purple hover:text-brand-navy flex items-center gap-1.5 uppercase tracking-wider"
                            >
                              <span>ICT Hardware Overview</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                            <span className="text-[11px] text-gray-400">5 Categories</span>
                          </div>

                          {ICT_HARDWARE_CATEGORIES.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/ict-hardware/${cat.slug}`}
                              onClick={() => setIctDropdownOpen(false)}
                              className="flex items-center justify-between p-2 rounded-xl hover:bg-brand-purple-tint/50 transition-all group"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="p-1.5 rounded-lg bg-brand-purple-tint text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                                  {cat.id === "laptops-desktops" && <Laptop className="w-4 h-4" />}
                                  {cat.id === "printers" && <Printer className="w-4 h-4" />}
                                  {cat.id === "networking-products" && <Network className="w-4 h-4" />}
                                  {cat.id === "security-surveillance" && <Shield className="w-4 h-4" />}
                                  {cat.id === "power-backup" && <Zap className="w-4 h-4" />}
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-gray-900 group-hover:text-brand-purple">
                                    {cat.title}
                                  </div>
                                  <div className="text-[11px] text-gray-500 line-clamp-1">
                                    {cat.subtitle}
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-brand-purple group-hover:translate-x-0.5 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // 3. SOFTWARE SOLUTIONS DROPDOWN (5 Categories)
              if (link.type === "software") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setSoftwareDropdownOpen(true)}
                    onMouseLeave={() => setSoftwareDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-2.5 py-2 text-[13px] font-semibold rounded-md transition-colors flex items-center gap-1 ${
                        isActive
                          ? "text-brand-purple font-bold"
                          : "text-gray-700 hover:text-brand-purple"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          softwareDropdownOpen ? "rotate-180 text-brand-purple" : "text-gray-400"
                        }`}
                      />
                    </Link>

                    {softwareDropdownOpen && (
                      <div className="absolute top-full left-0 pt-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="w-[440px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid gap-2">
                          <div className="flex items-center justify-between pb-2 border-b border-gray-100 px-2">
                            <Link
                              href="/software"
                              onClick={() => setSoftwareDropdownOpen(false)}
                              className="text-xs font-bold text-brand-purple hover:text-brand-navy flex items-center gap-1.5 uppercase tracking-wider"
                            >
                              <span>Software Overview</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                            <span className="text-[11px] text-gray-400">Enterprise Apps</span>
                          </div>

                          {SOFTWARE_CATEGORIES.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/software/${cat.slug}`}
                              onClick={() => setSoftwareDropdownOpen(false)}
                              className="flex items-center justify-between p-2 rounded-xl hover:bg-brand-purple-tint/50 transition-all group"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="p-1.5 rounded-lg bg-brand-purple-tint text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                                  {cat.id === "microsoft-products" && <LayoutGrid className="w-4 h-4" />}
                                  {cat.id === "hrms-payroll" && <Users className="w-4 h-4" />}
                                  {cat.id === "autocad" && <DraftingCompass className="w-4 h-4" />}
                                  {cat.id === "assessment-management" && <GraduationCap className="w-4 h-4" />}
                                  {cat.id === "tally-erp" && <Calculator className="w-4 h-4" />}
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-gray-900 group-hover:text-brand-purple">
                                    {cat.title}
                                  </div>
                                  <div className="text-[11px] text-gray-500 line-clamp-1">
                                    {cat.subtitle}
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-brand-purple group-hover:translate-x-0.5 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // 4. OFFICE EQUIPMENT & CONSUMABLES DROPDOWN (2 Clearly Labeled Groups)
              if (link.type === "office-equipment") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setOfficeDropdownOpen(true)}
                    onMouseLeave={() => setOfficeDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-2.5 py-2 text-[13px] font-semibold rounded-md transition-colors flex items-center gap-1 ${
                        isActive
                          ? "text-brand-purple font-bold"
                          : "text-gray-700 hover:text-brand-purple"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          officeDropdownOpen ? "rotate-180 text-brand-purple" : "text-gray-400"
                        }`}
                      />
                    </Link>

                    {officeDropdownOpen && (
                      <div className="absolute top-full left-0 pt-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="w-[580px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid grid-cols-2 gap-4">
                          {/* Group 1: Office Equipment */}
                          <div className="space-y-2 border-r border-gray-100 pr-3">
                            <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
                              <Link
                                href="/office-equipment"
                                onClick={() => setOfficeDropdownOpen(false)}
                                className="text-xs font-bold text-brand-purple hover:underline uppercase tracking-wider"
                              >
                                Office Equipment
                              </Link>
                              <span className="text-[10px] text-gray-400">Furniture</span>
                            </div>

                            <div className="space-y-1">
                              {OFFICE_EQUIPMENT_CATEGORIES.map((cat) => (
                                <Link
                                  key={cat.id}
                                  href={`/office-equipment/${cat.slug}`}
                                  onClick={() => setOfficeDropdownOpen(false)}
                                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-brand-purple-tint/50 transition-colors group"
                                >
                                  <div className="p-1 rounded bg-gray-100 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                                    {cat.id === "computer-tables" && <Monitor className="w-3.5 h-3.5" />}
                                    {cat.id === "office-chairs" && <Armchair className="w-3.5 h-3.5" />}
                                    {cat.id === "file-racks" && <FolderKanban className="w-3.5 h-3.5" />}
                                    {cat.id === "cupboards" && <Archive className="w-3.5 h-3.5" />}
                                  </div>
                                  <span className="text-xs font-medium text-gray-800 group-hover:text-brand-purple">
                                    {cat.title}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Group 2: Consumables */}
                          <div className="space-y-2 pl-1">
                            <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
                              <Link
                                href="/consumables"
                                onClick={() => setOfficeDropdownOpen(false)}
                                className="text-xs font-bold text-brand-purple hover:underline uppercase tracking-wider"
                              >
                                Consumables
                              </Link>
                              <span className="text-[10px] text-gray-400">Supplies</span>
                            </div>

                            <div className="space-y-1">
                              {CONSUMABLES_CATEGORIES.map((cat) => (
                                <Link
                                  key={cat.id}
                                  href={`/consumables/${cat.slug}`}
                                  onClick={() => setOfficeDropdownOpen(false)}
                                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-brand-purple-tint/50 transition-colors group"
                                >
                                  <div className="p-1 rounded bg-gray-100 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                                    {cat.id === "printer-paper" && <FileText className="w-3.5 h-3.5" />}
                                    {cat.id === "toners-cartridges" && <Droplet className="w-3.5 h-3.5" />}
                                  </div>
                                  <span className="text-xs font-medium text-gray-800 group-hover:text-brand-purple">
                                    {cat.title}
                                  </span>
                                </Link>
                              ))}
                            </div>

                            <div className="pt-3 border-t border-gray-100 mt-2">
                              <Link
                                href="/consumables"
                                onClick={() => setOfficeDropdownOpen(false)}
                                className="text-[11px] font-semibold text-brand-purple hover:underline flex items-center gap-1"
                              >
                                <span>Browse All Supplies</span>
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

              // Normal Direct Links (Home, About Us, Electronics, Contact Us)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 py-2 text-[13px] font-semibold rounded-md transition-colors ${
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

              {/* 1. Mobile Services Accordion */}
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
                          <span>Industrial Automation</span>
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
                  </div>
                )}
              </div>

              {/* 2. Mobile ICT Hardware Accordion */}
              <div>
                <button
                  onClick={() => setMobileIctOpen(!mobileIctOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-brand-purple rounded-lg"
                >
                  <span>ICT Hardware</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileIctOpen ? "rotate-180 text-brand-purple" : ""
                    }`}
                  />
                </button>
                {mobileIctOpen && (
                  <div className="pl-4 pr-2 py-1.5 space-y-1 bg-gray-50 rounded-lg my-1">
                    <Link
                      href="/ict-hardware"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-2 py-1 text-xs font-bold text-brand-purple uppercase"
                    >
                      ICT Hardware Overview →
                    </Link>
                    {ICT_HARDWARE_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/ict-hardware/${cat.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-2 py-1.5 text-xs text-gray-700 hover:text-brand-purple"
                      >
                        • {cat.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Mobile Software Solutions Accordion */}
              <div>
                <button
                  onClick={() => setMobileSoftwareOpen(!mobileSoftwareOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-brand-purple rounded-lg"
                >
                  <span>Software Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileSoftwareOpen ? "rotate-180 text-brand-purple" : ""
                    }`}
                  />
                </button>
                {mobileSoftwareOpen && (
                  <div className="pl-4 pr-2 py-1.5 space-y-1 bg-gray-50 rounded-lg my-1">
                    <Link
                      href="/software"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-2 py-1 text-xs font-bold text-brand-purple uppercase"
                    >
                      Software Overview →
                    </Link>
                    {SOFTWARE_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/software/${cat.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-2 py-1.5 text-xs text-gray-700 hover:text-brand-purple"
                      >
                        • {cat.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. Mobile Electronics Link */}
              <Link
                href="/electronics"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-brand-purple hover:bg-brand-purple-tint/40 rounded-lg"
              >
                Electronics Showroom
              </Link>

              {/* 5. Mobile Office Equipment & Consumables Accordion */}
              <div>
                <button
                  onClick={() => setMobileOfficeOpen(!mobileOfficeOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-800 hover:text-brand-purple rounded-lg"
                >
                  <span>Office Equipment & Consumables</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileOfficeOpen ? "rotate-180 text-brand-purple" : ""
                    }`}
                  />
                </button>
                {mobileOfficeOpen && (
                  <div className="pl-3 pr-2 py-2 space-y-2 bg-gray-50 rounded-xl my-1">
                    <div>
                      <div className="text-[10px] font-bold text-brand-purple uppercase px-2 mb-1">
                        Office Equipment
                      </div>
                      {OFFICE_EQUIPMENT_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/office-equipment/${cat.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-2 py-1 text-xs text-gray-700 hover:text-brand-purple"
                        >
                          • {cat.title}
                        </Link>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-gray-200">
                      <div className="text-[10px] font-bold text-brand-purple uppercase px-2 mb-1">
                        Consumables
                      </div>
                      {CONSUMABLES_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/consumables/${cat.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-2 py-1 text-xs text-gray-700 hover:text-brand-purple"
                        >
                          • {cat.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

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
