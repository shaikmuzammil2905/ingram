"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { UploadCloud, CheckCircle2, AlertCircle, Loader2, X, RefreshCw } from "lucide-react";
import { uploadToCloudinary } from "@/lib/cloudinary";

interface CloudinaryUploadButtonProps {
  currentImageUrl?: string;
  onImageUploaded: (url: string, publicId?: string) => void;
  folder?: string;
  label?: string;
}

export default function CloudinaryUploadButton({
  currentImageUrl,
  onImageUploaded,
  folder = "ingram_assets",
  label = "Upload or Replace Image",
}: CloudinaryUploadButtonProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentImageUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (e.g. max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError("File size exceeds 10MB limit.");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const response = await uploadToCloudinary(file, folder);
      setPreviewUrl(response.secure_url);
      onImageUploaded(response.secure_url, response.public_id);
    } catch (err: any) {
      setError(err.message || "Failed to upload image to Cloudinary.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4">
        {/* Preview thumbnail */}
        <div className="relative w-24 h-24 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 overflow-hidden flex items-center justify-center shrink-0">
          {previewUrl ? (
            <Image src={previewUrl} alt="Preview" fill className="object-cover" />
          ) : (
            <UploadCloud className="w-8 h-8 text-gray-400" />
          )}
          {uploading && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center text-white">
              <Loader2 className="w-6 h-6 animate-spin" />
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-2 flex-1">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={uploading}
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs font-semibold rounded-lg shadow-xs transition-colors disabled:opacity-50"
            >
              {uploading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Uploading to Cloudinary...</span>
                </>
              ) : (
                <>
                  <UploadCloud className="w-3.5 h-3.5" />
                  <span>{previewUrl ? "Replace Image" : label}</span>
                </>
              )}
            </button>

            {previewUrl && (
              <button
                type="button"
                onClick={() => {
                  setPreviewUrl(null);
                  onImageUploaded("");
                }}
                className="inline-flex items-center gap-1 px-2.5 py-2 text-xs font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                <span>Remove</span>
              </button>
            )}
          </div>

          <p className="text-[11px] text-gray-500">
            Supports PNG, JPG, WebP, SVG up to 10MB. Stored securely on Cloudinary.
          </p>

          {error && (
            <div className="flex items-center gap-1.5 text-xs text-red-600 bg-red-50 p-2 rounded-lg border border-red-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
