"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Image as ImageIcon,
  UploadCloud,
  Trash2,
  Copy,
  Check,
  Search,
  ExternalLink,
  Loader2,
  Sparkles,
} from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { supabase, DbMediaAsset } from "@/lib/supabase";

export default function AdminMediaPage() {
  const [assets, setAssets] = useState<DbMediaAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const defaultMediaUrls = [
    { id: "m1", public_id: "ingram/logo", secure_url: "/images/logo.png", alt_text: "Ingram Logo", created_at: new Date().toISOString() },
    { id: "m2", public_id: "ingram/automation", secure_url: "/images/service-automation.jpg", alt_text: "Industrial Automation", created_at: new Date().toISOString() },
    { id: "m3", public_id: "ingram/process-control", secure_url: "/images/service-process-control.jpg", alt_text: "Process Control DCS", created_at: new Date().toISOString() },
    { id: "m4", public_id: "ingram/instrumentation", secure_url: "/images/service-instrumentation.jpg", alt_text: "Yokogawa Instrumentation", created_at: new Date().toISOString() },
    { id: "m5", public_id: "ingram/digital-transf", secure_url: "/images/service-digital-transformation.jpg", alt_text: "Digital Transformation IIoT", created_at: new Date().toISOString() },
    { id: "m6", public_id: "ingram/tv", secure_url: "/images/electronics/tv-4k.jpg", alt_text: "4K UHD Smart TV", created_at: new Date().toISOString() },
    { id: "m7", public_id: "ingram/fridge", secure_url: "/images/electronics/fridge-side.jpg", alt_text: "Side by Side Refrigerator", created_at: new Date().toISOString() },
    { id: "m8", public_id: "ingram/washing-machine", secure_url: "/images/electronics/washing-machine.jpg", alt_text: "Front Load Washer", created_at: new Date().toISOString() },
    { id: "m9", public_id: "ingram/soundbar", secure_url: "/images/electronics/soundbar.jpg", alt_text: "Dolby Atmos Soundbar", created_at: new Date().toISOString() },
  ];

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("media_assets")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        setAssets(data);
      } else {
        setAssets(defaultMediaUrls);
      }
    } catch (err) {
      console.warn("Media assets fallback:", err);
      setAssets(defaultMediaUrls);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const res = await uploadToCloudinary(file, "ingram_media_library");

        const newAsset: DbMediaAsset = {
          id: `media_${Date.now()}_${i}`,
          public_id: res.public_id,
          secure_url: res.secure_url,
          format: res.format,
          width: res.width,
          height: res.height,
          bytes: res.bytes,
          alt_text: file.name,
          folder: "ingram_media_library",
          created_at: new Date().toISOString(),
        };

        await supabase.from("media_assets").insert([newAsset]);
      }
      fetchMedia();
    } catch (err) {
      console.error("Media upload error:", err);
      alert("Cloudinary upload failed. Check connection or file size.");
    } finally {
      setUploading(false);
    }
  };

  const copyToClipboard = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Remove this asset from media library?")) return;
    try {
      await supabase.from("media_assets").delete().eq("id", id);
      setAssets(assets.filter((a) => a.id !== id));
    } catch (err) {
      console.error("Delete media asset error:", err);
    }
  };

  const filteredAssets = assets.filter(
    (a) =>
      a.alt_text?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.public_id?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Cloudinary Cloud Storage</span>
            </div>
            <h1 className="text-2xl font-extrabold text-brand-navy">Media Assets Library</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Upload, preview, copy URLs, and manage Cloudinary media assets across all website sections.
            </p>
          </div>

          <label className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shadow-sm cursor-pointer">
            {uploading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Uploading...</span>
              </>
            ) : (
              <>
                <UploadCloud className="w-4 h-4" />
                <span>Upload to Cloudinary</span>
              </>
            )}
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              disabled={uploading}
              className="hidden"
            />
          </label>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search media files by name or alt text..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
          />
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredAssets.map((asset) => (
            <div
              key={asset.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div className="relative aspect-square w-full bg-gray-100 overflow-hidden">
                <Image src={asset.secure_url} alt={asset.alt_text || "Asset"} fill className="object-cover" />
              </div>

              <div className="p-3 space-y-2">
                <div className="text-xs font-bold text-gray-800 truncate" title={asset.alt_text || asset.public_id}>
                  {asset.alt_text || asset.public_id}
                </div>

                <div className="flex items-center justify-between gap-1 pt-1 border-t border-gray-100">
                  <button
                    onClick={() => copyToClipboard(asset.secure_url, asset.id)}
                    className="flex-1 py-1 px-2 text-[11px] font-semibold bg-gray-50 hover:bg-brand-purple-tint text-gray-700 hover:text-brand-purple rounded-lg transition-colors flex items-center justify-center gap-1"
                    title="Copy URL"
                  >
                    {copiedId === asset.id ? (
                      <>
                        <Check className="w-3 h-3 text-green-600" />
                        <span className="text-green-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy URL</span>
                      </>
                    )}
                  </button>

                  <a
                    href={asset.secure_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-gray-400 hover:text-gray-900 rounded-md"
                    title="Open full size"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => handleDelete(asset.id)}
                    className="p-1 text-gray-400 hover:text-red-600 rounded-md"
                    title="Delete"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
