"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Plus,
  Edit2,
  Trash2,
  CheckCircle,
  Eye,
  EyeOff,
  Save,
  X,
  ExternalLink,
  Layers,
  Gauge,
  Network,
  Sparkles,
  Search,
} from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import CloudinaryUploadButton from "@/components/admin/CloudinaryUploadButton";
import { supabase, DbService } from "@/lib/supabase";
import { PRIMARY_SERVICES } from "@/data/company";

export default function AdminServicesPage() {
  const [services, setServices] = useState<DbService[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingService, setEditingService] = useState<Partial<DbService> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .order("display_order", { ascending: true });

      if (!error && data && data.length > 0) {
        setServices(data);
      } else {
        // Use default fallback
        const defaults: DbService[] = PRIMARY_SERVICES.map((s, idx) => ({
          id: s.id,
          slug: s.slug,
          title: s.title,
          short_title: s.shortTitle,
          subtitle: s.subtitle,
          description: s.description,
          full_description: s.fullDescription,
          key_points: s.keyPoints,
          image_url: s.image,
          icon: s.icon,
          parent_id: s.id === "industrial-automation" ? null : "industrial-automation",
          display_order: idx + 1,
          is_published: true,
        }));
        setServices(defaults);
      }
    } catch (err) {
      console.warn("Fetch services fallback:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService?.title || !editingService?.slug) return;

    setSaving(true);
    try {
      const payload = {
        ...editingService,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from("services").upsert([payload], { onConflict: "id" });
      if (error) {
        console.warn("Supabase upsert warning:", error.message);
      }

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
      setEditingService(null);
      setIsNew(false);
      fetchServices();
    } catch (err) {
      console.error("Save service error:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this service?")) return;
    try {
      await supabase.from("services").delete().eq("id", id);
      fetchServices();
    } catch (err) {
      console.error("Delete service error:", err);
    }
  };

  const filteredServices = services.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>Services Hierarchy Manager</span>
            </div>
            <h1 className="text-2xl font-extrabold text-brand-navy">Services & Industrial Automation</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Manage Flagship Industrial Automation, Process Control, Instrumentation, and Digital Transformation.
            </p>
          </div>

          <button
            onClick={() => {
              setIsNew(true);
              setEditingService({
                id: `service_${Date.now()}`,
                slug: "",
                title: "",
                short_title: "",
                subtitle: "",
                description: "",
                key_points: ["24/7 Technical Support", "Turnkey Commissioning", "OEM Certified"],
                image_url: "/images/service-automation.jpg",
                is_published: true,
                display_order: services.length + 1,
              });
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add Service</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search services by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
          />
        </div>

        {/* Services Cards Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
                  {service.image_url ? (
                    <Image src={service.image_url} alt={service.title} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {service.id === "industrial-automation" && (
                      <span className="bg-brand-purple text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow">
                        Flagship
                      </span>
                    )}
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full shadow ${
                        service.is_published ? "bg-green-500 text-white" : "bg-gray-600 text-white"
                      }`}
                    >
                      {service.is_published ? "Published" : "Draft"}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-base font-bold drop-shadow-xs">{service.title}</h3>
                    <p className="text-[11px] text-purple-200 line-clamp-1">{service.subtitle}</p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{service.description}</p>

                  {service.key_points && service.key_points.length > 0 && (
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Key Points:</span>
                      <div className="flex flex-wrap gap-1">
                        {service.key_points.slice(0, 3).map((pt, i) => (
                          <span
                            key={i}
                            className="text-[10.5px] bg-gray-50 border border-gray-200 px-2 py-0.5 rounded text-gray-700"
                          >
                            ✓ {pt}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between gap-2">
                <Link
                  href={`/services/${service.slug}`}
                  target="_blank"
                  className="text-xs font-semibold text-gray-500 hover:text-brand-purple flex items-center gap-1"
                >
                  <span>Preview Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setIsNew(false);
                      setEditingService(service);
                    }}
                    className="p-1.5 text-brand-purple hover:bg-brand-purple-tint rounded-lg transition-colors flex items-center gap-1 text-xs font-bold"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>

                  <button
                    onClick={() => handleDelete(service.id)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edit / Create Modal */}
        {editingService && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-brand-navy">
                  {isNew ? "Add New Service" : `Edit Service: ${editingService.title}`}
                </h2>
                <button
                  onClick={() => setEditingService(null)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Service Title
                    </label>
                    <input
                      type="text"
                      required
                      value={editingService.title || ""}
                      onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                      placeholder="e.g. Industrial Automation"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      URL Slug
                    </label>
                    <input
                      type="text"
                      required
                      value={editingService.slug || ""}
                      onChange={(e) => setEditingService({ ...editingService, slug: e.target.value })}
                      placeholder="e.g. industrial-automation"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Subtitle / Catchphrase
                  </label>
                  <input
                    type="text"
                    value={editingService.subtitle || ""}
                    onChange={(e) => setEditingService({ ...editingService, subtitle: e.target.value })}
                    placeholder="e.g. Turnkey plant automation, control systems & safety shutdown"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={editingService.description || ""}
                    onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                  />
                </div>

                {/* Cloudinary Image Upload Component */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Service Hero Image (Cloudinary)
                  </label>
                  <CloudinaryUploadButton
                    currentImageUrl={editingService.image_url}
                    folder="ingram_services"
                    onImageUploaded={(url) => setEditingService({ ...editingService, image_url: url })}
                  />
                </div>

                {/* Published & Order */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="isPublished"
                      checked={editingService.is_published ?? true}
                      onChange={(e) => setEditingService({ ...editingService, is_published: e.target.checked })}
                      className="w-4 h-4 text-brand-purple rounded"
                    />
                    <label htmlFor="isPublished" className="text-xs font-bold text-gray-800">
                      Publish to Live Website
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Display Order</label>
                    <input
                      type="number"
                      value={editingService.display_order || 1}
                      onChange={(e) =>
                        setEditingService({ ...editingService, display_order: parseInt(e.target.value) || 1 })
                      }
                      className="w-full px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-xl text-xs"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingService(null)}
                    className="px-4 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-2.5 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{saving ? "Saving to Supabase..." : "Save & Publish"}</span>
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
