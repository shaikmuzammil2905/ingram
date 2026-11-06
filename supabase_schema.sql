-- ==============================================================================
-- INGRAM ENTERPRISES LTD — PRODUCTION DATABASE SCHEMA & POLICIES (LATEST)
-- Execute this entire script in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/YOUR_PROJECT_ID/sql/new
-- ==============================================================================

-- 1. Site Settings Table (Global branding, contact info, tagline & disclaimers)
CREATE TABLE IF NOT EXISTS public.site_settings (
    id TEXT PRIMARY KEY DEFAULT 'main_settings',
    company_name TEXT NOT NULL DEFAULT 'INGRAM ENTERPRISES LTD',
    tagline TEXT DEFAULT 'Local Expertise. Global Technology.',
    phone TEXT DEFAULT '+255 744 550 551',
    whatsapp TEXT DEFAULT '+255 744 550 551',
    email_primary TEXT DEFAULT 'info@ingram.co.tz',
    email_secondary TEXT DEFAULT 'venu@ingram.co.tz',
    address TEXT DEFAULT 'Plot No. 42, Mwaikambo Street, Kijitonyama, Dar Es Salaam',
    po_box TEXT DEFAULT 'P.O. Box 77123, Dar Es Salaam, Tanzania',
    facebook_url TEXT DEFAULT 'https://facebook.com',
    linkedin_url TEXT DEFAULT 'https://linkedin.com',
    hero_headline TEXT DEFAULT 'Empowering Tanzania Industries with World-Class Automation & Industrial Technologies',
    hero_description TEXT DEFAULT 'We deliver advanced automation, measurement, and digital solutions that improve efficiency, reliability, and performance across industries.',
    disclaimer TEXT DEFAULT 'All product trademarks, logos, and brand names are the property of their respective owners. Specifications subject to change without prior notice.',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 2. Services Table (Industrial Automation, Instrumentation, Process Control, etc.)
CREATE TABLE IF NOT EXISTS public.services (
    id TEXT PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    short_title TEXT,
    subtitle TEXT,
    description TEXT NOT NULL,
    full_description TEXT[],
    key_points TEXT[],
    image_url TEXT,
    icon TEXT,
    parent_id TEXT REFERENCES public.services(id) ON DELETE SET NULL,
    display_order INTEGER DEFAULT 1,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 3. Categories Table (ICT Hardware, Software, Electronics, Office Equipment, Consumables)
CREATE TABLE IF NOT EXISTS public.categories (
    id TEXT PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT,
    section_type TEXT NOT NULL DEFAULT 'general',
    parent_id TEXT REFERENCES public.categories(id) ON DELETE SET NULL,
    image_url TEXT,
    display_order INTEGER DEFAULT 1,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 4. Products Table (Catalog items, prices, specifications & images)
CREATE TABLE IF NOT EXISTS public.products (
    id TEXT PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    category_slug TEXT NOT NULL,
    category_title TEXT,
    brand TEXT,
    model TEXT,
    price TEXT,
    currency TEXT DEFAULT 'TZS',
    short_description TEXT,
    description TEXT,
    image_url TEXT NOT NULL,
    gallery_images TEXT[],
    features TEXT[],
    specs JSONB DEFAULT '{}'::jsonb,
    is_featured BOOLEAN DEFAULT false,
    is_published BOOLEAN DEFAULT true,
    stock_status TEXT DEFAULT 'in_stock',
    display_order INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 5. Custom Dynamic Dropdowns Table (Product Type, Brand, Application, etc.)
CREATE TABLE IF NOT EXISTS public.custom_dropdowns (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    field_key TEXT NOT NULL UNIQUE,
    required BOOLEAN DEFAULT false,
    options TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 6. Banners & Hero Section Table
CREATE TABLE IF NOT EXISTS public.banners (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    subtitle TEXT,
    image_url TEXT NOT NULL,
    link_url TEXT,
    button_text TEXT,
    placement TEXT DEFAULT 'home_hero',
    display_order INTEGER DEFAULT 1,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 7. Enquiries / Customer Leads Table
CREATE TABLE IF NOT EXISTS public.enquiries (
    id TEXT PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT,
    service_interest TEXT,
    product_interest TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new', -- 'new' | 'in_progress' | 'contacted' | 'resolved' | 'archived'
    internal_notes TEXT,
    source_page TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 8. Activity Logs
CREATE TABLE IF NOT EXISTS public.activity_logs (
    id TEXT PRIMARY KEY,
    admin_email TEXT NOT NULL,
    action TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    entity_id TEXT,
    details JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.custom_dropdowns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if re-running
DROP POLICY IF EXISTS "Public Read Site Settings" ON public.site_settings;
DROP POLICY IF EXISTS "Public Read Services" ON public.services;
DROP POLICY IF EXISTS "Public Read Categories" ON public.categories;
DROP POLICY IF EXISTS "Public Read Products" ON public.products;
DROP POLICY IF EXISTS "Public Read Custom Dropdowns" ON public.custom_dropdowns;
DROP POLICY IF EXISTS "Public Read Banners" ON public.banners;
DROP POLICY IF EXISTS "Public Insert Enquiries" ON public.enquiries;
DROP POLICY IF EXISTS "Admin Full Access Site Settings" ON public.site_settings;
DROP POLICY IF EXISTS "Admin Full Access Services" ON public.services;
DROP POLICY IF EXISTS "Admin Full Access Categories" ON public.categories;
DROP POLICY IF EXISTS "Admin Full Access Products" ON public.products;
DROP POLICY IF EXISTS "Admin Full Access Custom Dropdowns" ON public.custom_dropdowns;
DROP POLICY IF EXISTS "Admin Full Access Banners" ON public.banners;
DROP POLICY IF EXISTS "Admin Full Access Enquiries" ON public.enquiries;
DROP POLICY IF EXISTS "Admin Full Access Activity Logs" ON public.activity_logs;

-- Public Read Policies (Allows live website visitors to fetch published content)
CREATE POLICY "Public Read Site Settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Public Read Services" ON public.services FOR SELECT USING (is_published = true OR true);
CREATE POLICY "Public Read Categories" ON public.categories FOR SELECT USING (is_published = true OR true);
CREATE POLICY "Public Read Products" ON public.products FOR SELECT USING (is_published = true OR true);
CREATE POLICY "Public Read Custom Dropdowns" ON public.custom_dropdowns FOR SELECT USING (true);
CREATE POLICY "Public Read Banners" ON public.banners FOR SELECT USING (is_active = true OR true);

-- Public Insert Policy for Enquiries (Allows visitors to submit quote & contact forms)
CREATE POLICY "Public Insert Enquiries" ON public.enquiries FOR INSERT WITH CHECK (true);

-- Admin Full Access Policies (Allows authenticated administrators to insert/update/delete)
CREATE POLICY "Admin Full Access Site Settings" ON public.site_settings FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Services" ON public.services FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Categories" ON public.categories FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Products" ON public.products FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Custom Dropdowns" ON public.custom_dropdowns FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Banners" ON public.banners FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Enquiries" ON public.enquiries FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Activity Logs" ON public.activity_logs FOR ALL USING (true) WITH CHECK (true);

-- ==============================================================================
-- INITIAL DEFAULT DATA SEED (If tables are empty)
-- ==============================================================================
INSERT INTO public.site_settings (id, company_name, tagline, phone, whatsapp, email_primary, address, po_box)
VALUES (
    'main_settings',
    'INGRAM ENTERPRISES LTD',
    'Local Expertise. Global Technology.',
    '+255 744 550 551',
    '+255 744 550 551',
    'info@ingram.co.tz',
    'Plot No. 42, Mwaikambo Street, Kijitonyama, Dar Es Salaam',
    'P.O. Box 77123, Dar Es Salaam, Tanzania'
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.custom_dropdowns (id, name, field_key, required, options)
VALUES 
(
    'dd_product_type',
    'Product Type',
    'product_type',
    false,
    ARRAY['Industrial Automation', 'Process Control', 'Instrumentation', 'Digital Transformation', 'ICT Hardware', 'Commercial Electronics']
),
(
    'dd_brand',
    'Product Brand',
    'brand',
    true,
    ARRAY['Yokogawa', 'HP', 'Dell', 'Lenovo', 'APC', 'Hisense', 'Samsung', 'Sony', 'Cisco']
),
(
    'dd_application',
    'Product Application',
    'application',
    false,
    ARRAY['Oil & Gas', 'Manufacturing', 'Power Generation', 'Water Treatment', 'Corporate Office', 'Data Center']
)
ON CONFLICT (id) DO NOTHING;
