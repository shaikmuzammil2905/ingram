"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import {
  supabase,
  DbService,
  DbProduct,
  DbCategory,
  DbBanner,
  DbSiteSettings,
  DbEnquiry,
} from "@/lib/supabase";
import { PRIMARY_SERVICES, COMPANY_INFO } from "@/data/company";
import { ALL_PRODUCTS, ALL_CATALOG_CATEGORIES } from "@/data/catalog";

// Storage keys for persistent local storage
const STORAGE_KEYS = {
  SERVICES: "ingram_db_services_v2",
  PRODUCTS: "ingram_db_products_v2",
  CATEGORIES: "ingram_db_categories_v2",
  BANNERS: "ingram_db_banners_v2",
  SETTINGS: "ingram_db_settings_v2",
  ENQUIRIES: "ingram_db_enquiries_v2",
  CUSTOM_DROPDOWNS: "ingram_db_custom_dropdowns_v2",
};

export interface CustomDropdown {
  id: string;
  name: string;
  field_key: string;
  required: boolean;
  options: string[];
}

export const getDefaultCustomDropdowns = (): CustomDropdown[] => [
  {
    id: "dd_product_type",
    name: "Product Type",
    field_key: "product_type",
    required: false,
    options: [
      "Industrial Automation",
      "Process Control",
      "Instrumentation",
      "Digital Transformation",
      "ICT Hardware",
      "Commercial Electronics",
    ],
  },
  {
    id: "dd_brand",
    name: "Product Brand",
    field_key: "brand",
    required: true,
    options: ["Yokogawa", "HP", "Dell", "Lenovo", "APC", "Hisense", "Samsung", "Sony", "Cisco"],
  },
  {
    id: "dd_application",
    name: "Product Application",
    field_key: "application",
    required: false,
    options: [
      "Oil & Gas",
      "Manufacturing",
      "Power Generation",
      "Water Treatment",
      "Corporate Office",
      "Data Center",
    ],
  },
];

// Default seed generators
export const getDefaultServices = (): DbService[] => {
  return PRIMARY_SERVICES.map((s, idx) => ({
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
};

export const getDefaultProducts = (): DbProduct[] => {
  return ALL_PRODUCTS.map((p, idx) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
    category_slug: p.categorySlug,
    category_title: p.category,
    brand: p.brand || "",
    model: p.model || "",
    price: p.price || null,
    currency: "TZS",
    short_description: p.shortDescription || "",
    description: Array.isArray(p.description) ? p.description.join("\n\n") : (p.description || ""),
    image_url: p.image,
    gallery_images: p.gallery && p.gallery.length > 0 ? p.gallery : [p.image],
    features: p.features || [],
    specs: p.specifications || {},
    is_featured: idx < 4,
    is_published: true,
    stock_status: p.inStock === false ? "out_of_stock" : "in_stock",
    display_order: idx + 1,
  }));
};

export const getDefaultCategories = (): DbCategory[] => {
  return ALL_CATALOG_CATEGORIES.map((c: any, idx) => ({
    id: c.id,
    slug: c.slug,
    title: c.title,
    subtitle: c.subtitle || "",
    description: c.description || "",
    section_type: (c.section || c.mainCategory || "general") as any,
    image_url: c.bannerImage || c.image || "",
    display_order: idx + 1,
    is_published: true,
  }));
};

export const getDefaultBanners = (): DbBanner[] => [
  {
    id: "banner_hero_1",
    title: "Empowering Tanzania with Enterprise IT Infrastructure, Electronics, Office Solutions & Industrial Automation",
    subtitle: "Turnkey plant automation, control systems & mission-critical corporate technology",
    image_url: "/images/hero-sunset-refinery.jpg",
    button_text: "Explore Services",
    link_url: "/services",
    placement: "home_hero",
    display_order: 1,
    is_active: true,
  },
  {
    id: "banner_services_1",
    title: "Precision Yokogawa Field Instrumentation & Continuous Process Control",
    subtitle: "Measurement & control solutions for pressure, flow, level and temperature",
    image_url: "/images/service-instrumentation.jpg",
    button_text: "View Instrumentation",
    link_url: "/services/instrumentation",
    placement: "services_hero",
    display_order: 2,
    is_active: true,
  },
];

export const getDefaultSettings = (): DbSiteSettings => ({
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

interface WebsiteContentContextType {
  // Data lists
  services: DbService[];
  products: DbProduct[];
  categories: DbCategory[];
  banners: DbBanner[];
  settings: DbSiteSettings;
  enquiries: DbEnquiry[];
  customDropdowns: CustomDropdown[];
  loading: boolean;

  // Actions
  saveService: (service: Partial<DbService>) => Promise<boolean>;
  deleteService: (id: string) => Promise<boolean>;

  saveProduct: (product: Partial<DbProduct>) => Promise<boolean>;
  deleteProduct: (id: string) => Promise<boolean>;

  saveCategory: (category: Partial<DbCategory>) => Promise<boolean>;
  deleteCategory: (id: string) => Promise<boolean>;

  saveBanner: (banner: Partial<DbBanner>) => Promise<boolean>;
  deleteBanner: (id: string) => Promise<boolean>;

  saveSettings: (settings: Partial<DbSiteSettings>) => Promise<boolean>;

  saveCustomDropdown: (dropdown: CustomDropdown) => Promise<boolean>;
  deleteCustomDropdown: (id: string) => Promise<boolean>;

  submitEnquiry: (enquiry: Omit<DbEnquiry, "id" | "created_at" | "status">) => Promise<boolean>;
  updateEnquiryStatus: (id: string, status: DbEnquiry["status"]) => Promise<boolean>;
  deleteEnquiry: (id: string) => Promise<boolean>;

  syncInitialData: () => Promise<boolean>;
  resetToDefaults: () => void;
}

const WebsiteContentContext = createContext<WebsiteContentContextType | undefined>(undefined);

// Helper to safely read from localStorage
function readFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    if (Array.isArray(fallback) && Array.isArray(parsed) && parsed.length > 0) {
      return parsed as unknown as T;
    }
    if (!Array.isArray(fallback) && parsed && typeof parsed === "object") {
      return { ...fallback, ...parsed } as T;
    }
    return fallback;
  } catch {
    return fallback;
  }
}

// Helper to safely write to localStorage and broadcast
function writeToStorage(key: string, data: any) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
    // Broadcast event across windows / tabs
    if ("BroadcastChannel" in window) {
      const bc = new BroadcastChannel("ingram_content_sync");
      bc.postMessage({ key, timestamp: Date.now() });
      bc.close();
    }
    window.dispatchEvent(new Event("ingram-content-change"));
  } catch (err) {
    console.warn("Storage write error:", err);
  }
}

export function WebsiteContentProvider({ children }: { children: React.ReactNode }) {
  // Always initialize with default data so UI is NEVER empty
  const [services, setServices] = useState<DbService[]>(getDefaultServices);
  const [products, setProducts] = useState<DbProduct[]>(getDefaultProducts);
  const [categories, setCategories] = useState<DbCategory[]>(getDefaultCategories);
  const [banners, setBanners] = useState<DbBanner[]>(getDefaultBanners);
  const [settings, setSettings] = useState<DbSiteSettings>(getDefaultSettings);
  const [enquiries, setEnquiries] = useState<DbEnquiry[]>([]);
  const [customDropdowns, setCustomDropdowns] = useState<CustomDropdown[]>(getDefaultCustomDropdowns);
  const [loading, setLoading] = useState(false);

  // Load from localStorage on client-side mount
  const loadLocalData = useCallback(() => {
    setServices(readFromStorage(STORAGE_KEYS.SERVICES, getDefaultServices()));
    setProducts(readFromStorage(STORAGE_KEYS.PRODUCTS, getDefaultProducts()));
    setCategories(readFromStorage(STORAGE_KEYS.CATEGORIES, getDefaultCategories()));
    setBanners(readFromStorage(STORAGE_KEYS.BANNERS, getDefaultBanners()));
    setSettings(readFromStorage(STORAGE_KEYS.SETTINGS, getDefaultSettings()));
    setEnquiries(readFromStorage(STORAGE_KEYS.ENQUIRIES, []));
    setCustomDropdowns(readFromStorage(STORAGE_KEYS.CUSTOM_DROPDOWNS, getDefaultCustomDropdowns()));
  }, []);

  // Fetch newer data from Supabase in the background
  const fetchSupabaseData = useCallback(async () => {
    try {
      // 1. Services
      const { data: sData, error: sErr } = await supabase
        .from("services")
        .select("*")
        .order("display_order", { ascending: true });
      if (!sErr && sData && sData.length > 0) {
        setServices(sData);
        writeToStorage(STORAGE_KEYS.SERVICES, sData);
      }

      // 2. Products
      const { data: pData, error: pErr } = await supabase
        .from("products")
        .select("*")
        .order("display_order", { ascending: true });
      if (!pErr && pData && pData.length > 0) {
        setProducts(pData);
        writeToStorage(STORAGE_KEYS.PRODUCTS, pData);
      }

      // 3. Categories
      const { data: cData, error: cErr } = await supabase
        .from("categories")
        .select("*")
        .order("display_order", { ascending: true });
      if (!cErr && cData && cData.length > 0) {
        setCategories(cData);
        writeToStorage(STORAGE_KEYS.CATEGORIES, cData);
      }

      // 4. Banners
      const { data: bData, error: bErr } = await supabase
        .from("banners")
        .select("*")
        .order("display_order", { ascending: true });
      if (!bErr && bData && bData.length > 0) {
        setBanners(bData);
        writeToStorage(STORAGE_KEYS.BANNERS, bData);
      }

      // 5. Settings
      const { data: setRaw, error: setErr } = await supabase
        .from("site_settings")
        .select("*")
        .eq("id", "main_settings")
        .single();
      if (!setErr && setRaw) {
        setSettings((prev) => {
          const merged = { ...prev, ...setRaw };
          writeToStorage(STORAGE_KEYS.SETTINGS, merged);
          return merged;
        });
      }

      // 6. Enquiries
      const { data: eData, error: eErr } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });
      if (!eErr && eData && eData.length > 0) {
        setEnquiries(eData);
        writeToStorage(STORAGE_KEYS.ENQUIRIES, eData);
      }
    } catch (err) {
      console.warn("Supabase background sync:", err);
    }
  }, []);

  useEffect(() => {
    loadLocalData();
    fetchSupabaseData();

    // Listen for cross-tab updates
    let bc: BroadcastChannel | null = null;
    if (typeof window !== "undefined" && "BroadcastChannel" in window) {
      bc = new BroadcastChannel("ingram_content_sync");
      bc.onmessage = () => {
        loadLocalData();
      };
    }

    const handleStorageEvent = (e: StorageEvent) => {
      if (e.key && Object.values(STORAGE_KEYS).includes(e.key)) {
        loadLocalData();
      }
    };

    const handleCustomEvent = () => {
      loadLocalData();
    };

    window.addEventListener("storage", handleStorageEvent);
    window.addEventListener("ingram-content-change", handleCustomEvent);

    return () => {
      bc?.close();
      window.removeEventListener("storage", handleStorageEvent);
      window.removeEventListener("ingram-content-change", handleCustomEvent);
    };
  }, [loadLocalData, fetchSupabaseData]);

  // SERVICES CRUD
  const saveService = async (service: Partial<DbService>): Promise<boolean> => {
    const targetId = service.id || `service_${Date.now()}`;
    const updated: DbService = {
      id: targetId,
      slug: service.slug || targetId,
      title: service.title || "Untitled Service",
      short_title: service.short_title || service.title || "",
      subtitle: service.subtitle || "",
      description: service.description || "",
      full_description: service.full_description || [],
      key_points: service.key_points || [],
      image_url: service.image_url || "/images/service-automation.jpg",
      icon: service.icon || "Cpu",
      parent_id: service.parent_id || null,
      display_order: service.display_order ?? (services.length + 1),
      is_published: service.is_published ?? true,
      updated_at: new Date().toISOString(),
    };

    const nextServices = services.some((s) => s.id === targetId)
      ? services.map((s) => (s.id === targetId ? updated : s))
      : [...services, updated];

    setServices(nextServices);
    writeToStorage(STORAGE_KEYS.SERVICES, nextServices);

    try {
      await supabase.from("services").upsert([updated], { onConflict: "id" });
    } catch (err) {
      console.warn("Supabase service upsert error:", err);
    }
    return true;
  };

  const deleteService = async (id: string): Promise<boolean> => {
    const nextServices = services.filter((s) => s.id !== id);
    setServices(nextServices);
    writeToStorage(STORAGE_KEYS.SERVICES, nextServices);

    try {
      await supabase.from("services").delete().eq("id", id);
    } catch (err) {
      console.warn("Supabase service delete error:", err);
    }
    return true;
  };

  // PRODUCTS CRUD
  const saveProduct = async (product: Partial<DbProduct>): Promise<boolean> => {
    const targetId = product.id || `prod_${Date.now()}`;
    const updated: DbProduct = {
      id: targetId,
      slug: product.slug || targetId,
      name: product.name || "Untitled Product",
      category_slug: product.category_slug || "electronics",
      category_title: product.category_title || "",
      brand: product.brand || "",
      model: product.model || "",
      price: product.price ?? null,
      currency: product.currency || "TZS",
      short_description: product.short_description || "",
      description: product.description || "",
      image_url: product.image_url || "/images/electronics/tv-4k.jpg",
      gallery_images: product.gallery_images || [product.image_url || "/images/electronics/tv-4k.jpg"],
      features: product.features || [],
      specs: product.specs || {},
      is_featured: product.is_featured ?? false,
      is_published: product.is_published ?? true,
      stock_status: product.stock_status || "in_stock",
      display_order: product.display_order ?? (products.length + 1),
      updated_at: new Date().toISOString(),
    };

    const nextProducts = products.some((p) => p.id === targetId)
      ? products.map((p) => (p.id === targetId ? updated : p))
      : [updated, ...products];

    setProducts(nextProducts);
    writeToStorage(STORAGE_KEYS.PRODUCTS, nextProducts);

    try {
      await supabase.from("products").upsert([updated], { onConflict: "id" });
    } catch (err) {
      console.warn("Supabase product upsert error:", err);
    }
    return true;
  };

  const deleteProduct = async (id: string): Promise<boolean> => {
    const nextProducts = products.filter((p) => p.id !== id);
    setProducts(nextProducts);
    writeToStorage(STORAGE_KEYS.PRODUCTS, nextProducts);

    try {
      await supabase.from("products").delete().eq("id", id);
    } catch (err) {
      console.warn("Supabase product delete error:", err);
    }
    return true;
  };

  // CATEGORIES CRUD
  const saveCategory = async (category: Partial<DbCategory>): Promise<boolean> => {
    const targetId = category.id || `cat_${Date.now()}`;
    const updated: DbCategory = {
      id: targetId,
      slug: category.slug || targetId,
      title: category.title || "Untitled Category",
      subtitle: category.subtitle || "",
      description: category.description || "",
      section_type: category.section_type || "general",
      parent_id: category.parent_id || null,
      image_url: category.image_url || "",
      display_order: category.display_order ?? (categories.length + 1),
      is_published: category.is_published ?? true,
      updated_at: new Date().toISOString(),
    };

    const nextCats = categories.some((c) => c.id === targetId)
      ? categories.map((c) => (c.id === targetId ? updated : c))
      : [...categories, updated];

    setCategories(nextCats);
    writeToStorage(STORAGE_KEYS.CATEGORIES, nextCats);

    try {
      await supabase.from("categories").upsert([updated], { onConflict: "id" });
    } catch (err) {
      console.warn("Supabase category upsert error:", err);
    }
    return true;
  };

  const deleteCategory = async (id: string): Promise<boolean> => {
    const nextCats = categories.filter((c) => c.id !== id);
    setCategories(nextCats);
    writeToStorage(STORAGE_KEYS.CATEGORIES, nextCats);

    try {
      await supabase.from("categories").delete().eq("id", id);
    } catch (err) {
      console.warn("Supabase category delete error:", err);
    }
    return true;
  };

  // BANNERS CRUD
  const saveBanner = async (banner: Partial<DbBanner>): Promise<boolean> => {
    const targetId = banner.id || `banner_${Date.now()}`;
    const updated: DbBanner = {
      id: targetId,
      title: banner.title || "Untitled Banner",
      subtitle: banner.subtitle || "",
      image_url: banner.image_url || "/images/hero-sunset-refinery.jpg",
      button_text: banner.button_text || "Explore",
      link_url: banner.link_url || "/services",
      placement: banner.placement || "home_hero",
      display_order: banner.display_order ?? (banners.length + 1),
      is_active: banner.is_active ?? true,
    };

    const nextBanners = banners.some((b) => b.id === targetId)
      ? banners.map((b) => (b.id === targetId ? updated : b))
      : [...banners, updated];

    setBanners(nextBanners);
    writeToStorage(STORAGE_KEYS.BANNERS, nextBanners);

    try {
      await supabase.from("banners").upsert([updated], { onConflict: "id" });
    } catch (err) {
      console.warn("Supabase banner upsert error:", err);
    }
    return true;
  };

  const deleteBanner = async (id: string): Promise<boolean> => {
    const nextBanners = banners.filter((b) => b.id !== id);
    setBanners(nextBanners);
    writeToStorage(STORAGE_KEYS.BANNERS, nextBanners);

    try {
      await supabase.from("banners").delete().eq("id", id);
    } catch (err) {
      console.warn("Supabase banner delete error:", err);
    }
    return true;
  };

  // SETTINGS CRUD
  const saveSettings = async (newSettings: Partial<DbSiteSettings>): Promise<boolean> => {
    const updated: DbSiteSettings = {
      ...settings,
      ...newSettings,
      id: "main_settings",
      updated_at: new Date().toISOString(),
    };

    setSettings(updated);
    writeToStorage(STORAGE_KEYS.SETTINGS, updated);

    try {
      await supabase.from("site_settings").upsert([updated], { onConflict: "id" });
    } catch (err) {
      console.warn("Supabase settings upsert error:", err);
    }
    return true;
  };

  // ENQUIRIES
  const submitEnquiry = async (
    enquiry: Omit<DbEnquiry, "id" | "created_at" | "status">
  ): Promise<boolean> => {
    const newEnquiry: DbEnquiry = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      full_name: enquiry.full_name,
      email: enquiry.email,
      phone: enquiry.phone,
      company: enquiry.company || "",
      service_interest: enquiry.service_interest || "",
      product_interest: enquiry.product_interest || "",
      message: enquiry.message,
      status: "new",
      internal_notes: "",
      source_page: enquiry.source_page || "/",
      created_at: new Date().toISOString(),
    };

    const nextEnquiries = [newEnquiry, ...enquiries];
    setEnquiries(nextEnquiries);
    writeToStorage(STORAGE_KEYS.ENQUIRIES, nextEnquiries);

    try {
      await supabase.from("enquiries").insert([newEnquiry]);
    } catch (err) {
      console.warn("Supabase enquiry insert fallback:", err);
    }
    return true;
  };

  const updateEnquiryStatus = async (
    id: string,
    status: DbEnquiry["status"]
  ): Promise<boolean> => {
    const nextEnquiries = enquiries.map((e) =>
      e.id === id ? { ...e, status, updated_at: new Date().toISOString() } : e
    );
    setEnquiries(nextEnquiries);
    writeToStorage(STORAGE_KEYS.ENQUIRIES, nextEnquiries);

    try {
      await supabase.from("enquiries").update({ status }).eq("id", id);
    } catch (err) {
      console.warn("Supabase enquiry update error:", err);
    }
    return true;
  };

  const deleteEnquiry = async (id: string): Promise<boolean> => {
    const nextEnquiries = enquiries.filter((e) => e.id !== id);
    setEnquiries(nextEnquiries);
    writeToStorage(STORAGE_KEYS.ENQUIRIES, nextEnquiries);

    try {
      await supabase.from("enquiries").delete().eq("id", id);
    } catch (err) {
      console.warn("Supabase enquiry delete error:", err);
    }
    return true;
  };

  // CUSTOM DROPDOWNS CRUD
  const saveCustomDropdown = async (dropdown: CustomDropdown): Promise<boolean> => {
    const targetId = dropdown.id || `dd_${Date.now()}`;
    const updated: CustomDropdown = {
      id: targetId,
      name: dropdown.name,
      field_key: dropdown.field_key || dropdown.name.toLowerCase().replace(/[^a-z0-9]/g, "_"),
      required: dropdown.required ?? false,
      options: dropdown.options || [],
    };

    const next = customDropdowns.some((d) => d.id === targetId)
      ? customDropdowns.map((d) => (d.id === targetId ? updated : d))
      : [...customDropdowns, updated];

    setCustomDropdowns(next);
    writeToStorage(STORAGE_KEYS.CUSTOM_DROPDOWNS, next);
    return true;
  };

  const deleteCustomDropdown = async (id: string): Promise<boolean> => {
    const next = customDropdowns.filter((d) => d.id !== id);
    setCustomDropdowns(next);
    writeToStorage(STORAGE_KEYS.CUSTOM_DROPDOWNS, next);
    return true;
  };

  // SYNC INITIAL DATA & RESET
  const syncInitialData = async (): Promise<boolean> => {
    const defServices = getDefaultServices();
    const defProducts = getDefaultProducts();
    const defCategories = getDefaultCategories();
    const defBanners = getDefaultBanners();
    const defSettings = getDefaultSettings();

    setServices(defServices);
    setProducts(defProducts);
    setCategories(defCategories);
    setBanners(defBanners);
    setSettings(defSettings);

    writeToStorage(STORAGE_KEYS.SERVICES, defServices);
    writeToStorage(STORAGE_KEYS.PRODUCTS, defProducts);
    writeToStorage(STORAGE_KEYS.CATEGORIES, defCategories);
    writeToStorage(STORAGE_KEYS.BANNERS, defBanners);
    writeToStorage(STORAGE_KEYS.SETTINGS, defSettings);

    try {
      await supabase.from("services").upsert(defServices, { onConflict: "id" });
      await supabase.from("products").upsert(defProducts, { onConflict: "id" });
      await supabase.from("categories").upsert(defCategories, { onConflict: "id" });
      await supabase.from("banners").upsert(defBanners, { onConflict: "id" });
      await supabase.from("site_settings").upsert([defSettings], { onConflict: "id" });
    } catch (err) {
      console.warn("Supabase initial sync error:", err);
    }
    return true;
  };

  const resetToDefaults = () => {
    syncInitialData();
  };

  return (
    <WebsiteContentContext.Provider
      value={{
        services,
        products,
        categories,
        banners,
        settings,
        enquiries,
        customDropdowns,
        loading,
        saveService,
        deleteService,
        saveProduct,
        deleteProduct,
        saveCategory,
        deleteCategory,
        saveBanner,
        deleteBanner,
        saveSettings,
        saveCustomDropdown,
        deleteCustomDropdown,
        submitEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,
        syncInitialData,
        resetToDefaults,
      }}
    >
      {children}
    </WebsiteContentContext.Provider>
  );
}

export function useWebsiteContent() {
  const context = useContext(WebsiteContentContext);
  if (!context) {
    throw new Error("useWebsiteContent must be used within a WebsiteContentProvider");
  }
  return context;
}

