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

                    {/* Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-[420px] bg-white rounded-xl shadow-2xl border border-gray-100 p-3 grid gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="text-xs font-semibold text-gray-400 uppercase px-3 pt-1">
                          Our Engineering Services
                        </div>
                        {PRIMARY_SERVICES.map((svc) => (
                          <Link
                            key={svc.id}
                            href={svc.href}
                            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-brand-purple-tint/60 transition-colors group"
                          >
                            <div className="p-2 rounded-md bg-brand-purple-tint text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                              {svc.id === "industrial-automation" && <Cpu className="w-4 h-4" />}
                              {svc.id === "process-control" && <Layers className="w-4 h-4" />}
                              {svc.id === "instrumentation" && <Gauge className="w-4 h-4" />}
                              {svc.id === "digital-transformation" && <Network className="w-4 h-4" />}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 group-hover:text-brand-purple">
                                {svc.shortTitle}
                              </div>
                              <p className="text-xs text-gray-500 line-clamp-1">
                                {svc.subtitle}
                              </p>
                            </div>
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 pt-2 px-3 flex justify-between items-center text-xs">
                          <span className="text-gray-500">Need customized automation?</span>
                          <button
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              openQuoteModal();
                            }}
                            className="text-brand-purple font-semibold hover:underline flex items-center gap-1"
                          >
                            Request Proposal <ArrowRight className="w-3 h-3" />
                          </button>
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
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50 rounded-lg my-1">
                    <Link
                      href="/services"
                      className="block px-3 py-2 text-xs font-semibold text-brand-purple uppercase"
                    >
                      All Services Overview →
                    </Link>
                    {PRIMARY_SERVICES.map((s) => (
                      <Link
                        key={s.id}
                        href={s.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-brand-purple rounded-md"
                      >
                        {s.shortTitle}
                      </Link>
                    ))}
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
