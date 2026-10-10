"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sliders, Plus, Edit2, Trash2, Save, X, Eye } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import CloudinaryUploadButton from "@/components/admin/CloudinaryUploadButton";
import { supabase, DbBanner } from "@/lib/supabase";

export default function AdminBannersPage() {
  const [banners, setBanners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingBanner, setEditingBanner] = useState<any | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);

  const defaultBanners = [
    {
      id: "b1",
      title: "Empowering Tanzania Industries with World-Class Automation",
      subtitle: "Turnkey plant automation, control systems & safety shutdown",
      image_url: "/images/service-automation.jpg",
      button_text: "Explore Services",
      link_url: "/services",
      placement: "home_hero",
      display_order: 1,
      is_active: true,
    },
    {
      id: "b2",
      title: "Precision Yokogawa Field Instrumentation",
      subtitle: "Measurement & control solutions for pressure, flow, level and temperature",
      image_url: "/images/service-instrumentation.jpg",
      button_text: "View Instrumentation",
      link_url: "/services/instrumentation",
      placement: "services_hero",
      display_order: 2,
      is_active: true,
    },
  ];

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("banners").select("*").order("display_order", { ascending: true });
      if (!error && data && data.length > 0) {
        setBanners(data);
      } else {
        setBanners(defaultBanners);
      }
    } catch {
      setBanners(defaultBanners);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBanner?.title) return;

    setSaving(true);
    try {
      await supabase.from("banners").upsert([editingBanner], { onConflict: "id" });
      setEditingBanner(null);
      setIsNew(false);
      fetchBanners();
    } catch (err) {
      console.error("Save banner error:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this banner?")) return;
    try {
      await supabase.from("banners").delete().eq("id", id);
      fetchBanners();
    } catch (err) {
      console.error("Delete banner error:", err);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-brand-purple text-xs font-bold uppercase tracking-wider mb-2">
              <Sliders className="w-3.5 h-3.5" />
              <span>Hero & Promotions</span>
            </div>
            <h1 className="text-2xl font-extrabold text-brand-navy">Banners & Sliders Management</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Customize headline banners, hero text, buttons, and promotional visuals.
            </p>
          </div>

          <button
            onClick={() => {
              setIsNew(true);
              setEditingBanner({
                id: `banner_${Date.now()}`,
                title: "",
                subtitle: "",
                image_url: "/images/service-automation.jpg",
                button_text: "Get a Quote",
                link_url: "/contact",
                placement: "home_hero",
                display_order: banners.length + 1,
                is_active: true,
              });
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add Banner</span>
          </button>
        </div>

        {/* Banners List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full bg-gray-100">
                  <Image src={banner.image_url} alt={banner.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-brand-purple text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {banner.placement}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-sm sm:text-base font-bold drop-shadow-xs">{banner.title}</h3>
                    <p className="text-xs text-purple-200 line-clamp-1">{banner.subtitle}</p>
                  </div>
                </div>

                <div className="p-4 space-y-2 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Button Text:</span>
                    <strong className="text-gray-900">{banner.button_text}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Target URL:</span>
                    <strong className="font-mono text-gray-900">{banner.link_url}</strong>
                  </div>
                </div>
              </div>

              <div className="p-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-gray-500">Order: #{banner.display_order}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setIsNew(false);
                      setEditingBanner(banner);
                    }}
                    className="p-1 text-brand-purple hover:bg-brand-purple-tint rounded transition-colors text-xs font-bold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(banner.id)}
                    className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal */}
        {editingBanner && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-brand-navy">
                  {isNew ? "Add New Banner" : `Edit Banner`}
                </h2>
                <button
                  onClick={() => setEditingBanner(null)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Headline Title
                  </label>
                  <input
                    type="text"
                    required
                    value={editingBanner.title || ""}
                    onChange={(e) => setEditingBanner({ ...editingBanner, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Subtitle Text
                  </label>
                  <input
                    type="text"
                    value={editingBanner.subtitle || ""}
                    onChange={(e) => setEditingBanner({ ...editingBanner, subtitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Button Text
                    </label>
                    <input
                      type="text"
                      value={editingBanner.button_text || ""}
                      onChange={(e) => setEditingBanner({ ...editingBanner, button_text: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Button Link
                    </label>
                    <input
                      type="text"
                      value={editingBanner.link_url || ""}
                      onChange={(e) => setEditingBanner({ ...editingBanner, link_url: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Banner Background Image (Cloudinary)
                  </label>
                  <CloudinaryUploadButton
                    currentImageUrl={editingBanner.image_url}
                    folder="ingram_banners"
                    onImageUploaded={(url) => setEditingBanner({ ...editingBanner, image_url: url })}
                  />
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingBanner(null)}
                    className="px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>{saving ? "Saving..." : "Save Banner"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
