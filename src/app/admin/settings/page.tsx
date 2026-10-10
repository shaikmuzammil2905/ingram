"use client";

import React, { useState, useEffect } from "react";
import { Settings, Save, CheckCircle, Phone, Mail, MapPin, Globe, Sparkles } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase, DbSiteSettings } from "@/lib/supabase";
import { COMPANY_INFO } from "@/data/company";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Partial<DbSiteSettings>>({
    id: "main_settings",
    company_name: COMPANY_INFO.name,
    tagline: COMPANY_INFO.tagline,
    phone: COMPANY_INFO.phone,
    whatsapp: COMPANY_INFO.whatsapp,
    email_primary: COMPANY_INFO.emails[0],
    email_secondary: COMPANY_INFO.emails[1],
    address: COMPANY_INFO.address,
    po_box: COMPANY_INFO.poBox,
    hero_headline: COMPANY_INFO.heroHeadline,
    hero_description: COMPANY_INFO.heroDescription,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("site_settings")
        .select("*")
        .eq("id", "main_settings")
        .single();

      if (!error && data) {
        setSettings(data);
      }
    } catch (err) {
      console.warn("Settings fetch fallback:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        ...settings,
        id: "main_settings",
        updated_at: new Date().toISOString(),
      };

      await supabase.from("site_settings").upsert([payload], { onConflict: "id" });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      console.error("Save settings error:", err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Settings className="w-3.5 h-3.5" />
              <span>Global Website Configuration</span>
            </div>
            <h1 className="text-2xl font-extrabold text-brand-navy">Site Settings & Contact Info</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Configure company phone numbers, WhatsApp, emails, physical location, and headline copy.
            </p>
          </div>

          {saveSuccess && (
            <div className="flex items-center gap-2 text-xs font-bold text-green-700 bg-green-50 px-3.5 py-2 rounded-xl border border-green-200 animate-in fade-in">
              <CheckCircle className="w-4 h-4" />
              <span>Settings Saved & Synced!</span>
            </div>
          )}
        </div>

        {/* Settings Form */}
        <form onSubmit={handleSave} className="bg-white rounded-2xl border border-gray-100 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-purple border-b border-gray-100 pb-2 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>1. Corporate Identity</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Company Legal Name
                </label>
                <input
                  type="text"
                  required
                  value={settings.company_name || ""}
                  onChange={(e) => setSettings({ ...settings, company_name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Company Tagline
                </label>
                <input
                  type="text"
                  value={settings.tagline || ""}
                  onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-purple border-b border-gray-100 pb-2 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>2. Contact Details & Dispatch Channels</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Primary Phone Number
                </label>
                <input
                  type="text"
                  required
                  value={settings.phone || ""}
                  onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  WhatsApp Support Number
                </label>
                <input
                  type="text"
                  required
                  value={settings.whatsapp || ""}
                  onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Primary Email
                </label>
                <input
                  type="email"
                  required
                  value={settings.email_primary || ""}
                  onChange={(e) => setSettings({ ...settings, email_primary: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Secondary Email
                </label>
                <input
                  type="email"
                  value={settings.email_secondary || ""}
                  onChange={(e) => setSettings({ ...settings, email_secondary: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-purple border-b border-gray-100 pb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>3. Office Location & P.O. Box</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Physical Office Address
                </label>
                <input
                  type="text"
                  value={settings.address || ""}
                  onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  P.O. Box
                </label>
                <input
                  type="text"
                  value={settings.po_box || ""}
                  onChange={(e) => setSettings({ ...settings, po_box: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="px-8 py-3 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{saving ? "Saving to Supabase..." : "Save Settings"}</span>
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
