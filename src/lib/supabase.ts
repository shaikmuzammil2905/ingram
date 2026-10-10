import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://eiynktjlochrjhkbatmu.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpeW5rdGpsb2Nocmpoa2JhdG11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE2MzExNzEsImV4cCI6MjEwNzIwNzE3MX0._PwQ_NGh0QbpVyPxi6KIsj3u0M9P14uIzrNPuQI9XNI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface DbService {
  id: string;
  slug: string;
  title: string;
  short_title?: string;
  subtitle?: string;
  description: string;
  full_description?: string[];
  key_points?: string[];
  image_url?: string;
  icon?: string;
  parent_id?: string | null;
  display_order: number;
  is_published: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface DbCategory {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  section_type: "ict-hardware" | "software" | "electronics" | "office-equipment" | "consumables" | "general";
  parent_id?: string | null;
  image_url?: string;
  display_order: number;
  is_published: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface DbProduct {
  id: string;
  slug: string;
  name: string;
  category_slug: string;
  category_title?: string;
  brand?: string;
  model?: string;
  price?: string | number | null;
  currency?: string;
  short_description?: string;
  description?: string;
  image_url: string;
  gallery_images?: string[];
  features?: string[];
  specs?: Record<string, string>;
  is_featured?: boolean;
  is_published: boolean;
  stock_status?: "in_stock" | "available_on_order" | "out_of_stock";
  display_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface DbEnquiry {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  company?: string;
  service_interest?: string;
  product_interest?: string;
  message: string;
  status: "new" | "in_progress" | "contacted" | "resolved" | "archived";
  internal_notes?: string;
  source_page?: string;
  created_at: string;
  updated_at?: string;
}

export interface DbMediaAsset {
  id: string;
  public_id: string;
  secure_url: string;
  format?: string;
  width?: number;
  height?: number;
  bytes?: number;
  alt_text?: string;
  folder?: string;
  created_at: string;
}

export interface DbBanner {
  id: string;
  title: string;
  subtitle?: string;
  image_url: string;
  button_text?: string;
  link_url?: string;
  placement?: string;
  display_order: number;
  is_active: boolean;
  created_at?: string;
}

export interface DbSiteSettings {
  id: string;
  company_name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email_primary: string;
  email_secondary?: string;
  address: string;
  po_box: string;
  facebook_url?: string;
  linkedin_url?: string;
  hero_headline?: string;
  hero_description?: string;
  updated_at?: string;
}
