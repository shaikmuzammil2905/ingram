"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/image";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle, Loader2, Sparkles } from "lucide-react";
import { useAdminAuth } from "@/context/AdminAuthContext";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("admin@ingram.co.tz");
  const [password, setPassword] = useState("Admin@Ingram2026!");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { login } = useAdminAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSubmitting(true);

    try {
      const res = await login(email, password);
      if (res.success) {
        router.push("/admin");
      } else {
        setErrorMessage(res.error || "Invalid login credentials.");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy via-[#2C1958] to-brand-purple flex items-center justify-center px-4 sm:px-6 py-12 relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-purple-light/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-white/20">
        {/* Brand Header */}
        <div className="text-center space-y-3 pb-6 border-b border-gray-100">
          <div className="relative h-10 w-44 mx-auto">
            <Image
              src="/images/logo.png"
              alt="Ingram Enterprises Ltd"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-brand-navy tracking-tight">Admin Management Panel</h1>
            <p className="text-xs text-gray-500 mt-1">Authorized access to live content, catalog & enquiries</p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {errorMessage && (
            <div className="flex items-start gap-2 p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Admin Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ingram.co.tz"
                className="w-full pl-9 pr-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-9 pr-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:bg-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
              />
            </div>
          </div>

          <div className="p-3 bg-purple-50/70 rounded-xl border border-brand-purple/15 text-[11px] text-gray-700 space-y-1">
            <div className="flex items-center gap-1 font-bold text-brand-purple">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Default Credentials Provided:</span>
            </div>
            <div className="flex justify-between">
              <span>Email:</span>
              <strong className="font-mono text-gray-900">admin@ingram.co.tz</strong>
            </div>
            <div className="flex justify-between">
              <span>Password:</span>
              <strong className="font-mono text-gray-900">Admin@Ingram2026!</strong>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-2 bg-brand-purple hover:bg-brand-purple-hover text-white py-3 px-4 rounded-xl text-sm font-bold shadow-md hover:shadow-brand transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span>Sign in to Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-100 text-center">
          <a
            href="/"
            className="text-xs font-semibold text-gray-500 hover:text-brand-purple transition-colors"
          >
            ← Return to Ingram Public Website
          </a>
        </div>
      </div>
    </div>
  );
}
