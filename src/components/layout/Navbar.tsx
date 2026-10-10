"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X, Phone, Shield, Cpu, Gauge, Network, Layers, Sparkles, ExternalLink } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { PRIMARY_SERVICES, SOLUTIONS_LIST } from "@/data/company";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [iaDropdownHovered, setIaDropdownHovered] = useState(true);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIaOpen, setMobileIaOpen] = useState(true);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page navigation
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
      hasDropdown: true,
      type: "services",
    },
    {
      name: "Solutions",
      href: "/solutions",
      hasDropdown: true,
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
          scrolled ? "shadow-md py-2.5" : "border-b border-gray-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Company Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-44 sm:w-48 transition-transform group-hover:scale-[1.02]">
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
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

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
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                        isActive
                          ? "text-brand-purple font-semibold"
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

                    {/* Hierarchical Services Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 pt-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="w-[460px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid gap-3">
                        {/* Top Link: All Services Overview */}
                        <div className="flex items-center justify-between pb-2 border-b border-gray-100 px-1">
                          <Link
                            href="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="text-xs font-bold text-brand-purple hover:text-brand-navy flex items-center gap-1.5 uppercase tracking-wider transition-colors"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>All Services Overview</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                          <span className="text-[11px] text-gray-400 font-medium">Engineering Portfolio</span>
                        </div>

                        {/* Main Category: Industrial Automation */}
                        <div className="bg-gradient-to-br from-brand-purple-tint/50 to-white p-3 rounded-xl border border-brand-purple/20">
                          <div className="flex items-center justify-between mb-2">
                            <Link
                              href="/services/industrial-automation"
                              className="flex items-center gap-2.5 group"
                            >
                              <div className="p-2 rounded-lg bg-brand-purple text-white shadow-sm group-hover:bg-brand-navy transition-colors">
                                <Cpu className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-bold text-gray-900 group-hover:text-brand-purple transition-colors flex items-center gap-1">
                                  <span>Industrial Automation</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-[11px] text-gray-500">
                                  Flagship plant automation & control systems
                                </p>
                              </div>
                            </Link>
                            <Link
                              href="/services/industrial-automation"
                              className="text-[11px] font-semibold text-brand-purple hover:underline bg-white px-2 py-1 rounded-md border border-brand-purple/20 shadow-2xs"
                            >
                              View Hub
                            </Link>
                          </div>

                          {/* Subcategories inside Industrial Automation */}
                          <div className="mt-2.5 pt-2.5 border-t border-brand-purple/15 pl-2 space-y-1.5">
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1">
                              Automation Subcategories:
                            </div>

                            <Link
                              href="/services/process-control"
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-white hover:shadow-2xs transition-all group"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="p-1.5 rounded-md bg-white border border-gray-200 text-brand-purple group-hover:border-brand-purple transition-colors">
                                  <Layers className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                  <div className="text-xs font-semibold text-gray-800 group-hover:text-brand-purple">
                                    Process Control
                                  </div>
                                  <div className="text-[11px] text-gray-500">
                                    DCS, PLC, SCADA & loop optimization
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-brand-purple group-hover:translate-x-0.5 transition-all" />
                            </Link>

                            <Link
                              href="/services/instrumentation"
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-white hover:shadow-2xs transition-all group"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="p-1.5 rounded-md bg-white border border-gray-200 text-brand-purple group-hover:border-brand-purple transition-colors">
                                  <Gauge className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                  <div className="text-xs font-semibold text-gray-800 group-hover:text-brand-purple">
                                    Instrumentation
                                  </div>
                                  <div className="text-[11px] text-gray-500">
                                    Yokogawa pressure, flow, level & temperature
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-brand-purple group-hover:translate-x-0.5 transition-all" />
                            </Link>

                            <Link
                              href="/services/digital-transformation"
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-white hover:shadow-2xs transition-all group"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="p-1.5 rounded-md bg-white border border-gray-200 text-brand-purple group-hover:border-brand-purple transition-colors">
                                  <Network className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                  <div className="text-xs font-semibold text-gray-800 group-hover:text-brand-purple">
                                    Digital Transformation
                                  </div>
                                  <div className="text-[11px] text-gray-500">
                                    Industrial IoT, AI analytics & connected plant
                                  </div>
                                </div>
                              </div>
                              <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-brand-purple group-hover:translate-x-0.5 transition-all" />
                            </Link>
                          </div>
                        </div>

                        {/* Bottom CTA Bar */}
                        <div className="border-t border-gray-100 pt-2 px-1 flex justify-between items-center text-xs">
                          <span className="text-gray-500">Need plant consultation?</span>
                          <button
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              openQuoteModal("Engineering Services");
                            }}
                            className="text-brand-purple font-semibold hover:underline flex items-center gap-1"
                          >
                            <span>Request Proposal</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

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
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                        isActive
                          ? "text-brand-purple font-semibold"
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

                    {/* Solutions Dropdown */}
                    {solutionsDropdownOpen && (
                      <div className="absolute top-full left-0 w-[380px] bg-white rounded-xl shadow-2xl border border-gray-100 p-3 grid gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="text-xs font-semibold text-gray-400 uppercase px-3 pt-1">
                          Industrial Solutions
                        </div>
                        {SOLUTIONS_LIST.map((sol) => (
                          <Link
                            key={sol.id}
                            href={`/solutions#${sol.id}`}
                            className="p-2 rounded-lg hover:bg-brand-purple-tint/50 transition-colors block group"
                          >
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-brand-purple">
                              {sol.title}
                            </div>
                            <div className="text-xs text-gray-500 line-clamp-1">
                              {sol.tagline}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if ((link as any).isExternal) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-700 hover:text-brand-purple"
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-brand-purple font-semibold relative after:content-[''] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-brand-purple"
                      : "text-gray-700 hover:text-brand-purple"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-brand transition-all duration-200 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => openQuoteModal()}
              className="bg-brand-purple text-white text-xs font-semibold px-3 py-1.5 rounded-md"
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Overlay backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-250">
            {/* Drawer Header */}
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

            {/* Drawer Navigation Links */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2.5 text-base font-medium text-gray-800 hover:text-brand-purple hover:bg-brand-purple-tint/40 rounded-lg"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2.5 text-base font-medium text-gray-800 hover:text-brand-purple hover:bg-brand-purple-tint/40 rounded-lg"
              >
                About Us
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium text-gray-800 hover:text-brand-purple rounded-lg"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      servicesDropdownOpen ? "rotate-180 text-brand-purple" : ""
                    }`}
                  />
                </button>
                {servicesDropdownOpen && (
                  <div className="pl-3 pr-2 py-2 space-y-2 bg-gray-50 rounded-xl my-1 border border-gray-100">
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs font-bold text-brand-purple uppercase tracking-wider bg-white rounded-lg border border-brand-purple/10"
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
                          aria-label="Toggle Industrial Automation subcategories"
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
                            • Process Control (DCS & PLC)
                          </Link>
                          <Link
                            href="/services/instrumentation"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs text-gray-700 hover:text-brand-purple"
                          >
                            • Instrumentation (Yokogawa)
                          </Link>
                          <Link
                            href="/services/digital-transformation"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs text-gray-700 hover:text-brand-purple"
                          >
                            • Digital Transformation & IIoT
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Solutions Accordion */}
              <div>
                <button
                  onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium text-gray-800 hover:text-brand-purple rounded-lg"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      solutionsDropdownOpen ? "rotate-180 text-brand-purple" : ""
                    }`}
                  />
                </button>
                {solutionsDropdownOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50 rounded-lg my-1">
                    <Link
                      href="/solutions"
                      className="block px-3 py-2 text-xs font-semibold text-brand-purple uppercase"
                    >
                      Solutions Overview →
                    </Link>
                    {SOLUTIONS_LIST.map((sol) => (
                      <Link
                        key={sol.id}
                        href={`/solutions#${sol.id}`}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-brand-purple rounded-md"
                      >
                        {sol.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/partners"
                className="block px-3 py-2.5 text-base font-medium text-gray-800 hover:text-brand-purple hover:bg-brand-purple-tint/40 rounded-lg"
              >
                Partners (Yokogawa)
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2.5 text-base font-medium text-gray-800 hover:text-brand-purple hover:bg-brand-purple-tint/40 rounded-lg"
              >
                Products
              </Link>
              <Link
                href="/industries"
                className="block px-3 py-2.5 text-base font-medium text-gray-800 hover:text-brand-purple hover:bg-brand-purple-tint/40 rounded-lg"
              >
                Industries
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2.5 text-base font-medium text-gray-800 hover:text-brand-purple hover:bg-brand-purple-tint/40 rounded-lg"
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
