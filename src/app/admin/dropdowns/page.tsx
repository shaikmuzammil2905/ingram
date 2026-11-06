"use client";

import React, { useState, useEffect } from "react";
import {
  SlidersHorizontal,
  Plus,
  Trash2,
  Edit2,
  Save,
  CheckCircle,
  HelpCircle,
  Tag,
  ListPlus,
  X,
  Layers,
} from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import { useWebsiteContent } from "@/context/WebsiteContentContext";

export default function AdminCustomDropdownsPage() {
  const { customDropdowns, saveCustomDropdown, deleteCustomDropdown } = useWebsiteContent();

  const [editingDropdown, setEditingDropdown] = useState<{
    id: string;
    name: string;
    field_key: string;
    required: boolean;
    options: string[];
  } | null>(null);

  const [newOptionInput, setNewOptionInput] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleStartCreate = () => {
    setEditingDropdown({
      id: `dd_${Date.now()}`,
      name: "",
      field_key: "",
      required: false,
      options: [],
    });
    setNewOptionInput("");
  };

  const handleAddOption = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOptionInput.trim() || !editingDropdown) return;
    const trimmed = newOptionInput.trim();
    if (editingDropdown.options.includes(trimmed)) return;
    setEditingDropdown({
      ...editingDropdown,
      options: [...editingDropdown.options, trimmed],
    });
    setNewOptionInput("");
  };

  const handleRemoveOption = (indexToRemove: number) => {
    if (!editingDropdown) return;
    setEditingDropdown({
      ...editingDropdown,
      options: editingDropdown.options.filter((_, idx) => idx !== indexToRemove),
    });
  };

  const handleSaveDropdown = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDropdown || !editingDropdown.name) return;

    setSaving(true);
    try {
      const fieldKey =
        editingDropdown.field_key.trim() ||
        editingDropdown.name
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "_")
          .replace(/_+/g, "_");

      await saveCustomDropdown({
        ...editingDropdown,
        field_key: fieldKey,
      });

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
      setEditingDropdown(null);
    } catch (err) {
      console.error("Save dropdown error:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteDropdown = async (id: string) => {
    if (!confirm("Are you sure you want to delete this custom dropdown?")) return;
    try {
      await deleteCustomDropdown(id);
    } catch (err) {
      console.error("Delete dropdown error:", err);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-2">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Catalog Attribute Engine</span>
            </div>
            <h1 className="text-2xl font-extrabold text-brand-navy">Manage Custom Dropdowns</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Create, customize, and maintain dynamic dropdown fields (e.g. Product Type, Application, Brand) for the Product Catalog.
            </p>
          </div>

          <button
            onClick={handleStartCreate}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Dropdown</span>
          </button>
        </div>

        {saveSuccess && (
          <div className="flex items-center gap-2 text-xs font-bold text-green-700 bg-green-50 p-3.5 rounded-xl border border-green-200">
            <CheckCircle className="w-4 h-4" />
            <span>Dropdown successfully saved and published!</span>
          </div>
        )}

        {/* List of Custom Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {customDropdowns.map((dd) => (
            <div
              key={dd.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-xs p-5 flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                      key: {dd.field_key}
                    </span>
                    <h3 className="text-base font-bold text-brand-navy group-hover:text-brand-purple transition-colors">
                      {dd.name}
                    </h3>
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      dd.required ? "bg-amber-100 text-amber-800" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {dd.required ? "Required" : "Optional"}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Options ({dd.options.length}):
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto">
                    {dd.options.map((opt, i) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-50 text-brand-purple border border-purple-100 px-2.5 py-1 rounded-lg font-medium"
                      >
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => setEditingDropdown(dd)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:underline"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Edit Dropdown</span>
                </button>

                <button
                  onClick={() => handleDeleteDropdown(dd.id)}
                  className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete Dropdown"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Edit / Create Modal */}
        {editingDropdown && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-100 my-8">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-brand-purple" />
                  <h2 className="text-lg font-bold text-brand-navy">
                    {editingDropdown.id.startsWith("dd_") && !customDropdowns.some((d) => d.id === editingDropdown.id)
                      ? "Create Custom Dropdown"
                      : "Edit Custom Dropdown"}
                  </h2>
                </div>
                <button
                  onClick={() => setEditingDropdown(null)}
                  className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveDropdown} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Dropdown Field Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Product Application, Brand, Voltage Rating"
                    value={editingDropdown.name}
                    onChange={(e) => setEditingDropdown({ ...editingDropdown, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Database Field Key (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. application, product_type"
                    value={editingDropdown.field_key}
                    onChange={(e) => setEditingDropdown({ ...editingDropdown, field_key: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-mono focus:outline-none focus:border-brand-purple"
                  />
                  <p className="text-[11px] text-gray-400 mt-1">
                    Leave blank to automatically generate from name.
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="requiredToggle"
                    checked={editingDropdown.required}
                    onChange={(e) => setEditingDropdown({ ...editingDropdown, required: e.target.checked })}
                    className="w-4 h-4 text-brand-purple rounded"
                  />
                  <label htmlFor="requiredToggle" className="text-xs font-bold text-gray-800">
                    Required field when creating products
                  </label>
                </div>

                {/* Options List Builder */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Dropdown Options ({editingDropdown.options.length})
                  </label>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add an option (e.g. Oil & Gas, Commercial)"
                      value={newOptionInput}
                      onChange={(e) => setNewOptionInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddOption(e);
                        }
                      }}
                      className="flex-1 px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-purple"
                    />
                    <button
                      type="button"
                      onClick={handleAddOption}
                      className="px-4 py-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs font-bold rounded-xl"
                    >
                      Add
                    </button>
                  </div>

                  <div className="space-y-1.5 max-h-48 overflow-y-auto pt-2">
                    {editingDropdown.options.map((opt, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-800"
                      >
                        <span className="font-medium">{opt}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveOption(idx)}
                          className="text-gray-400 hover:text-red-600 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                    {editingDropdown.options.length === 0 && (
                      <div className="text-center py-4 text-xs text-gray-400 italic">
                        No options added yet. Type an option above and click Add.
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingDropdown(null)}
                    className="px-4 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving || !editingDropdown.name}
                    className="px-6 py-2.5 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{saving ? "Saving..." : "Save & Publish"}</span>
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

