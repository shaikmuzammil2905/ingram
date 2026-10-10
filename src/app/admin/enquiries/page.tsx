"use client";

import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  Search,
  CheckCircle,
  Clock,
  Archive,
  Phone,
  Mail,
  Building,
  ExternalLink,
  Trash2,
  Filter,
  MessageCircle,
} from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase, DbEnquiry } from "@/lib/supabase";

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<DbEnquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedEnquiry, setSelectedEnquiry] = useState<DbEnquiry | null>(null);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setEnquiries(data);
      }
    } catch (err) {
      console.warn("Enquiries fetch fallback:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: DbEnquiry["status"]) => {
    try {
      await supabase
        .from("enquiries")
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq("id", id);
      fetchEnquiries();
      if (selectedEnquiry && selectedEnquiry.id === id) {
        setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
      }
    } catch (err) {
      console.error("Update enquiry status error:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry record?")) return;
    try {
      await supabase.from("enquiries").delete().eq("id", id);
      setSelectedEnquiry(null);
      fetchEnquiries();
    } catch (err) {
      console.error("Delete enquiry error:", err);
    }
  };

  const filteredEnquiries = enquiries.filter((e) => {
    const matchesSearch =
      e.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.phone.includes(searchQuery) ||
      (e.company && e.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (e.service_interest && e.service_interest.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (e.product_interest && e.product_interest.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === "all" || e.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Customer Submissions</span>
          </div>
          <h1 className="text-2xl font-extrabold text-brand-navy">Enquiries & Quotation Requests</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Incoming engineering consultation requests, product quotes, and contact form submissions.
          </p>
        </div>

        {/* Search & Status Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, email, phone, company, or service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 focus:outline-none focus:border-brand-purple"
          >
            <option value="all">All Statuses ({enquiries.length})</option>
            <option value="new">New</option>
            <option value="in_progress">In Progress</option>
            <option value="contacted">Contacted</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>

        {/* 2-Column Layout for List and Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* List (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
            {filteredEnquiries.length === 0 ? (
              <div className="py-16 text-center text-gray-400">
                <MessageSquare className="w-10 h-10 mx-auto mb-2 opacity-50" />
                <p className="text-sm font-medium">No enquiry submissions found.</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {filteredEnquiries.map((enq) => (
                  <div
                    key={enq.id}
                    onClick={() => setSelectedEnquiry(enq)}
                    className={`p-4 hover:bg-gray-50/80 cursor-pointer transition-colors ${
                      selectedEnquiry?.id === enq.id ? "bg-purple-50/60 border-l-4 border-brand-purple" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-gray-900 truncate">{enq.full_name}</span>
                          <span
                            className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
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
                        {enq.company && <div className="text-xs text-gray-500 font-medium">{enq.company}</div>}
                        <p className="text-xs text-gray-600 line-clamp-1 mt-1">{enq.message}</p>
                      </div>

                      <div className="text-right text-[11px] text-gray-400 shrink-0">
                        {new Date(enq.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details Inspector (5 cols) */}
          <div className="lg:col-span-5">
            {selectedEnquiry ? (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xs p-6 space-y-5 sticky top-24">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div>
                    <h3 className="font-bold text-base text-brand-navy">{selectedEnquiry.full_name}</h3>
                    <div className="text-xs text-gray-400">
                      Submitted on {new Date(selectedEnquiry.created_at).toLocaleString()}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(selectedEnquiry.id)}
                    className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg"
                    title="Delete record"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Contact info */}
                <div className="space-y-2.5 text-xs text-gray-700 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-purple shrink-0" />
                    <a href={`mailto:${selectedEnquiry.email}`} className="font-semibold hover:underline">
                      {selectedEnquiry.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-purple shrink-0" />
                    <a href={`tel:${selectedEnquiry.phone}`} className="font-semibold hover:underline">
                      {selectedEnquiry.phone}
                    </a>
                  </div>
                  {selectedEnquiry.company && (
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-brand-purple shrink-0" />
                      <span>{selectedEnquiry.company}</span>
                    </div>
                  )}
                  {selectedEnquiry.service_interest && (
                    <div className="pt-1 border-t border-gray-200">
                      <span className="font-bold text-brand-navy">Service Interest: </span>
                      <span>{selectedEnquiry.service_interest}</span>
                    </div>
                  )}
                  {selectedEnquiry.product_interest && (
                    <div>
                      <span className="font-bold text-brand-navy">Product Interest: </span>
                      <span>{selectedEnquiry.product_interest}</span>
                    </div>
                  )}
                </div>

                {/* Message Body */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Customer Message
                  </label>
                  <div className="p-3 bg-white border border-gray-200 rounded-xl text-xs text-gray-800 whitespace-pre-wrap leading-relaxed">
                    {selectedEnquiry.message}
                  </div>
                </div>

                {/* Status Changer */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Update Lead Status
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {(["new", "in_progress", "contacted", "resolved"] as const).map((st) => (
                      <button
                        key={st}
                        onClick={() => updateStatus(selectedEnquiry.id, st)}
                        className={`py-1.5 px-2.5 rounded-lg font-semibold capitalize transition-colors border ${
                          selectedEnquiry.status === st
                            ? "bg-brand-purple text-white border-brand-purple"
                            : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                        }`}
                      >
                        {st.replace("_", " ")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Reply Actions */}
                <div className="pt-3 border-t border-gray-100 flex gap-2">
                  <a
                    href={`https://wa.me/${selectedEnquiry.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`mailto:${selectedEnquiry.email}?subject=Response to your Ingram Enterprises Enquiry`}
                    className="flex-1 py-2 px-3 bg-brand-navy hover:bg-brand-purple text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-8 text-center text-gray-400">
                <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-xs font-semibold">Select an enquiry to view full customer details & reply.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
