"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Cpu,
  Package,
  FolderTree,
  MessageSquare,
  Image as ImageIcon,
  ExternalLink,
  PlusCircle,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Database,
  Sparkles,
} from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase, DbEnquiry } from "@/lib/supabase";
import { PRIMARY_SERVICES } from "@/data/company";
import { ELECTRONICS_PRODUCTS, ALL_CATALOG_CATEGORIES } from "@/data/catalog";
import { seedInitialDatabaseIfEmpty } from "@/lib/db-seed";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    servicesCount: PRIMARY_SERVICES.length,
    productsCount: ELECTRONICS_PRODUCTS.length,
    categoriesCount: ALL_CATALOG_CATEGORIES.length,
    enquiriesCount: 0,
    newEnquiriesCount: 0,
  });
  const [recentEnquiries, setRecentEnquiries] = useState<DbEnquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      // Auto seed initial data if Supabase tables are fresh
      await seedInitialDatabaseIfEmpty();

      try {
        // Fetch services count
        const { count: sCount } = await supabase
          .from("services")
          .select("*", { count: "exact", head: true });

        // Fetch products count
        const { count: pCount } = await supabase
          .from("products")
          .select("*", { count: "exact", head: true });

        // Fetch categories count
        const { count: cCount } = await supabase
          .from("categories")
          .select("*", { count: "exact", head: true });

        // Fetch enquiries
        const { data: enquiries, count: eCount } = await supabase
          .from("enquiries")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(5);

        const newCount = enquiries?.filter((e) => e.status === "new").length || 0;

        setStats({
          servicesCount: sCount || PRIMARY_SERVICES.length,
          productsCount: pCount || ELECTRONICS_PRODUCTS.length,
          categoriesCount: cCount || ALL_CATALOG_CATEGORIES.length,
          enquiriesCount: eCount || 0,
          newEnquiriesCount: newCount,
        });

        if (enquiries) {
          setRecentEnquiries(enquiries);
        }
      } catch (err) {
        console.warn("Stats load fallback:", err);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  const statCards = [
    {
      title: "Services & Automation",
      value: stats.servicesCount,
      label: "Active Services",
      icon: Cpu,
      color: "bg-purple-500",
      href: "/admin/services",
    },
    {
      title: "Catalog Products",
      value: stats.productsCount,
      label: "Products Listed",
      icon: Package,
      color: "bg-blue-500",
      href: "/admin/products",
    },
    {
      title: "Structure & Categories",
      value: stats.categoriesCount,
      label: "Categories & Groups",
      icon: FolderTree,
      color: "bg-emerald-500",
      href: "/admin/categories",
    },
    {
      title: "Enquiries & Leads",
      value: stats.enquiriesCount,
      label: `${stats.newEnquiriesCount} New Submissions`,
      icon: MessageSquare,
      color: "bg-amber-500",
      href: "/admin/enquiries",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Page Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production Backend & CMS</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              Ingram Management Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Real-time synchronization with Supabase & Cloudinary media storage.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 hover:text-brand-purple text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-xs"
            >
              <span>Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
            <Link
              href="/admin/products"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-sm"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add Product</span>
            </Link>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="p-5 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{card.title}</span>
                  <div className={`p-2.5 rounded-xl ${card.color} text-white shadow-xs`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-3xl font-extrabold text-brand-navy group-hover:text-brand-purple transition-colors">
                    {card.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{card.label}</div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Recent Enquiries (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-xs p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-purple" />
                <h2 className="text-sm sm:text-base font-bold text-brand-navy">Recent Customer Enquiries</h2>
              </div>
              <Link
                href="/admin/enquiries"
                className="text-xs font-bold text-brand-purple hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {recentEnquiries.length === 0 ? (
              <div className="py-12 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-gray-300 mx-auto" />
                <p className="text-sm font-medium text-gray-600">No customer submissions yet.</p>
                <p className="text-xs text-gray-400">
                  Submissions from the public contact & consultation forms will appear here in real time.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {recentEnquiries.map((enq) => (
                  <div
                    key={enq.id}
                    className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-purple/30 transition-colors flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-900 truncate">{enq.full_name}</span>
                        {enq.company && (
                          <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-600 truncate">
                            {enq.company}
                          </span>
                        )}
                        <span
                          className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full ${
                            enq.status === "new"
                              ? "bg-amber-100 text-amber-800"
                              : enq.status === "resolved"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {enq.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-1">{enq.message}</p>
                      <div className="text-[10px] text-gray-400 flex items-center gap-3">
                        <span>📧 {enq.email}</span>
                        <span>📞 {enq.phone}</span>
                        {enq.service_interest && <span>⚙️ {enq.service_interest}</span>}
                      </div>
                    </div>
                    <Link
                      href="/admin/enquiries"
                      className="text-xs text-brand-purple font-semibold shrink-0 hover:underline"
                    >
                      Inspect →
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Quick Navigation & Media Tools (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Actions Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xs p-6 space-y-4">
              <h2 className="text-sm sm:text-base font-bold text-brand-navy">Quick Management Hub</h2>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/admin/services"
                  className="p-3.5 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-100 text-brand-purple text-xs font-bold transition-colors flex flex-col gap-1.5"
                >
                  <Cpu className="w-5 h-5 text-brand-purple" />
                  <span>Manage Services & Automation</span>
                </Link>

                <Link
                  href="/admin/products"
                  className="p-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-100 text-blue-800 text-xs font-bold transition-colors flex flex-col gap-1.5"
                >
                  <Package className="w-5 h-5 text-blue-600" />
                  <span>Manage Products & Showroom</span>
                </Link>

                <Link
                  href="/admin/media"
                  className="p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 text-emerald-800 text-xs font-bold transition-colors flex flex-col gap-1.5"
                >
                  <ImageIcon className="w-5 h-5 text-emerald-600" />
                  <span>Cloudinary Media Library</span>
                </Link>

                <Link
                  href="/admin/settings"
                  className="p-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-100 text-amber-800 text-xs font-bold transition-colors flex flex-col gap-1.5"
                >
                  <Database className="w-5 h-5 text-amber-600" />
                  <span>Site Settings & Contact Info</span>
                </Link>
              </div>
            </div>

            {/* Cloudinary & Supabase Connected Status */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-purple/5 to-brand-navy/5 border border-brand-purple/15 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-purple" />
                <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                  Connected Production Infrastructure
                </h3>
              </div>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-gray-200/70">
                  <span className="font-semibold text-gray-800">Supabase Backend:</span>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-green-700 bg-green-50 px-2 py-0.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    eiynktjlochrjhkbatmu
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-gray-200/70">
                  <span className="font-semibold text-gray-800">Cloudinary Media:</span>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    qjeckycw (ml_default)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
