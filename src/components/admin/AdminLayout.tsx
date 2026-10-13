"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Cpu,
  Package,
  FolderTree,
  MessageSquare,
  Image as ImageIcon,
  Sliders,
  Settings,
  LogOut,
  ExternalLink,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Database,
} from "lucide-react";
import { useAdminAuth } from "@/context/AdminAuthContext";
import { seedInitialDatabaseIfEmpty } from "@/lib/db-seed";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, logout, loading, isAuthenticated } = useAdminAuth();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [seedSuccess, setSeedSuccess] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [loading, isAuthenticated, pathname, router]);

  const handleSyncDatabase = async () => {
    setSeeding(true);
    await seedInitialDatabaseIfEmpty();
    setSeeding(false);
    setSeedSuccess(true);
    setTimeout(() => setSeedSuccess(false), 3000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-brand-purple border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-semibold text-gray-600">Verifying Admin Authorization...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated && pathname !== "/admin/login") {
    return null;
  }

  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Services & Automation", href: "/admin/services", icon: Cpu },
    { name: "Products Catalog", href: "/admin/products", icon: Package },
    { name: "Categories & Structure", href: "/admin/categories", icon: FolderTree },
    { name: "Enquiries & Leads", href: "/admin/enquiries", icon: MessageSquare },
    { name: "Media Library (Cloudinary)", href: "/admin/media", icon: ImageIcon },
    { name: "Banners & Hero", href: "/admin/banners", icon: Sliders },
    { name: "Site Settings & SEO", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col lg:flex-row text-gray-900">
      {/* Mobile Top Header */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="p-1.5 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {mobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="relative h-7 w-36">
            <Image src="/images/logo.svg" alt="Ingram Logo" fill className="object-contain object-left" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            target="_blank"
            className="text-xs text-brand-purple font-semibold flex items-center gap-1 bg-brand-purple-tint px-2.5 py-1 rounded-md"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
          <button onClick={() => logout()} className="p-1.5 text-gray-500 hover:text-red-600">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="relative h-8 w-44">
              <Image src="/images/logo.svg" alt="Ingram Logo" fill className="object-contain object-left" />
            </div>
          </Link>
          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-brand-purple text-white">
            Admin
          </span>
        </div>

        {/* Admin User Info Card */}
        <div className="p-4 mx-4 my-3 rounded-2xl bg-gradient-to-br from-brand-purple/5 to-brand-navy/5 border border-brand-purple/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-purple text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
            {user?.name?.charAt(0) || "A"}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-bold text-gray-900 truncate">{user?.name || "Administrator"}</div>
            <div className="text-[11px] text-gray-500 truncate">{user?.email || "admin@ingram.co.tz"}</div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileSidebarOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? "bg-brand-purple text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100 hover:text-brand-purple"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-500"}`} />
                  <span>{item.name}</span>
                </div>
                {isActive && <ChevronRight className="w-4 h-4 text-white" />}
              </Link>
            );
          })}
        </nav>

        {/* Database Sync Action */}
        <div className="p-4 border-t border-gray-100 space-y-2">
          <button
            onClick={handleSyncDatabase}
            disabled={seeding}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-brand-purple bg-brand-purple-tint/60 hover:bg-brand-purple-tint border border-brand-purple/20 transition-all disabled:opacity-50"
          >
            <Database className={`w-3.5 h-3.5 ${seeding ? "animate-spin" : ""}`} />
            <span>{seeding ? "Syncing Database..." : seedSuccess ? "✓ Synced with Supabase" : "Sync Initial Data"}</span>
          </button>

          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              <span>View Live Website</span>
            </span>
            <span className="text-[10px] text-gray-400">Opens in new tab</span>
          </Link>

          <button
            onClick={() => logout()}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
