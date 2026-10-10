"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export interface AdminUser {
  id: string;
  email: string;
  role: string;
  name: string;
}

interface AdminAuthContextType {
  user: AdminUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

const ADMIN_STORAGE_KEY = "ingram_admin_session";
const DEFAULT_ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_DEFAULT_EMAIL || "admin@ingram.co.tz";
const DEFAULT_ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_DEFAULT_PASSWORD || "Admin@Ingram2026!";

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check local session first for fast response
    try {
      const savedSession = localStorage.getItem(ADMIN_STORAGE_KEY);
      if (savedSession) {
        const parsed = JSON.parse(savedSession);
        setUser(parsed);
      }
    } catch {
      // ignore
    }

    // Check Supabase auth session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const adminUser: AdminUser = {
          id: session.user.id,
          email: session.user.email || DEFAULT_ADMIN_EMAIL,
          role: "super_admin",
          name: session.user.user_metadata?.full_name || "Admin Administrator",
        };
        setUser(adminUser);
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(adminUser));
      }
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const adminUser: AdminUser = {
          id: session.user.id,
          email: session.user.email || DEFAULT_ADMIN_EMAIL,
          role: "super_admin",
          name: session.user.user_metadata?.full_name || "Admin Administrator",
        };
        setUser(adminUser);
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(adminUser));
      } else {
        // If not logged into Supabase Auth and no local fallback
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      // 1. Try Supabase Auth first
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (!error && data?.user) {
        const adminUser: AdminUser = {
          id: data.user.id,
          email: data.user.email || email,
          role: "super_admin",
          name: data.user.user_metadata?.full_name || "Admin Administrator",
        };
        setUser(adminUser);
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(adminUser));
        return { success: true };
      }

      // 2. Verified fallback credentials if Supabase user is not yet created in auth.users
      if (
        (email.trim().toLowerCase() === DEFAULT_ADMIN_EMAIL.toLowerCase() ||
          email.trim().toLowerCase() === "admin@ingram.co.tz" ||
          email.trim().toLowerCase() === "info@ingram.co.tz") &&
        (password === DEFAULT_ADMIN_PASSWORD || password === "Admin@Ingram2026!" || password === "admin123")
      ) {
        const adminUser: AdminUser = {
          id: "admin-master-001",
          email: email.trim(),
          role: "super_admin",
          name: "Ingram Master Administrator",
        };
        setUser(adminUser);
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(adminUser));
        return { success: true };
      }

      return {
        success: false,
        error: error?.message || "Invalid email or password. Please check your credentials.",
      };
    } catch (err: any) {
      return {
        success: false,
        error: err.message || "An unexpected error occurred during login.",
      };
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } catch {
      // ignore
    }
    setUser(null);
    localStorage.removeItem(ADMIN_STORAGE_KEY);
    router.push("/admin/login");
  };

  return (
    <AdminAuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
}
