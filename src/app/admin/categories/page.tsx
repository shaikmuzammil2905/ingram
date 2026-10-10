"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FolderTree,
  Plus,
  Edit2,
  Trash2,
  Search,
  ExternalLink,
  Save,
  X,
  Layers,
} from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import CloudinaryUploadButton from "@/components/admin/CloudinaryUploadButton";
import { supabase, DbCategory } from "@/lib/supabase";
import { ALL_CATALOG_CATEGORIES } from "@/data/catalog";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<DbCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sectionFilter, setSectionFilter] = useState("all");
  const [editingCategory, setEditingCategory] = useState<Partial<DbCategory> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("display_order", { ascending: true });

      if (!error && data && data.length > 0) {
        setCategories(data);
      } else {
        const defaults: DbCategory[] = ALL_CATALOG_CATEGORIES.map((c: any, idx) => ({
          id: c.id,
          slug: c.slug,
          title: c.title,
          subtitle: c.subtitle,
          description: c.description,
          section_type: c.section as any,
          image_url: c.image || c.bannerImage,
          display_order: idx + 1,
          is_published: true,
        }));
        setCategories(defaults);
      }
    } catch (err) {
      console.warn("Fetch categories fallback:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCategory?.title || !editingCategory?.slug) return;

    setSaving(true);
    try {
      const payload = {
        ...editingCategory,
        updated_at: new Date().toISOString(),
      };

      await supabase.from("categories").upsert([payload], { onConflict: "id" });
      setEditingCategory(null);
      setIsNew(false);
      fetchCategories();
    } catch (err) {
      console.error("Save category error:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    try {
      await supabase.from("categories").delete().eq("id", id);
      fetchCategories();
    } catch (err) {
      console.error("Delete category error:", err);
    }
  };

  const filteredCategories = categories.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.subtitle && c.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSection = sectionFilter === "all" || c.section_type === sectionFilter;
    return matchesSearch && matchesSection;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <FolderTree className="w-3.5 h-3.5" />
              <span>Category Structure</span>
            </div>
            <h1 className="text-2xl font-extrabold text-brand-navy">Categories & Subcategories</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Organize ICT Hardware, Software Solutions, Electronics, Office Equipment, and Consumables.
            </p>
          </div>

          <button
            onClick={() => {
              setIsNew(true);
              setEditingCategory({
                id: `cat_${Date.now()}`,
                slug: "",
                title: "",
                subtitle: "",
                description: "",
                section_type: "ict-hardware",
                image_url: "/images/ict-hardware.jpg",
                is_published: true,
                display_order: categories.length + 1,
              });
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add Category</span>
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
            />
          </div>

          <select
            value={sectionFilter}
            onChange={(e) => setSectionFilter(e.target.value)}
            className="px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 focus:outline-none focus:border-brand-purple"
          >
            <option value="all">All Sections ({categories.length})</option>
            <option value="ict-hardware">ICT Hardware</option>
            <option value="software">Software Solutions</option>
            <option value="electronics">Electronics</option>
            <option value="office-equipment">Office Equipment</option>
            <option value="consumables">Consumables</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                <div className="relative h-36 w-full bg-gray-100">
                  {cat.image_url ? (
                    <Image src={cat.image_url} alt={cat.title} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-brand-navy/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    {cat.section_type.toUpperCase()}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-sm font-bold truncate">{cat.title}</h3>
                    <p className="text-[11px] text-purple-200 truncate">{cat.subtitle}</p>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <p className="text-xs text-gray-600 line-clamp-2">{cat.description || "Dedicated product category."}</p>
                  <div className="text-[11px] font-mono text-gray-400">Slug: /{cat.slug}</div>
                </div>
              </div>

              <div className="p-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-gray-500">Order: #{cat.display_order}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setIsNew(false);
                      setEditingCategory(cat);
                    }}
                    className="p-1 text-brand-purple hover:bg-brand-purple-tint rounded transition-colors text-xs font-bold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(cat.id)}
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
        {editingCategory && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-brand-navy">
                  {isNew ? "Add New Category" : `Edit: ${editingCategory.title}`}
                </h2>
                <button
                  onClick={() => setEditingCategory(null)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      required
                      value={editingCategory.title || ""}
                      onChange={(e) => setEditingCategory({ ...editingCategory, title: e.target.value })}
                      placeholder="e.g. Laptops and Desktops"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Slug
                    </label>
                    <input
                      type="text"
                      required
                      value={editingCategory.slug || ""}
                      onChange={(e) => setEditingCategory({ ...editingCategory, slug: e.target.value })}
                      placeholder="e.g. laptops-desktops"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Section Type
                  </label>
                  <select
                    value={editingCategory.section_type || "ict-hardware"}
                    onChange={(e) => setEditingCategory({ ...editingCategory, section_type: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                  >
                    <option value="ict-hardware">ICT Hardware</option>
                    <option value="software">Software Solutions</option>
                    <option value="electronics">Electronics Showroom</option>
                    <option value="office-equipment">Office Equipment</option>
                    <option value="consumables">Consumables</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Category Banner / Image
                  </label>
                  <CloudinaryUploadButton
                    currentImageUrl={editingCategory.image_url}
                    folder="ingram_categories"
                    onImageUploaded={(url) => setEditingCategory({ ...editingCategory, image_url: url })}
                  />
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingCategory(null)}
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
                    <span>{saving ? "Saving..." : "Save Category"}</span>
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
