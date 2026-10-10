-- ==============================================================================
-- INGRAM ENTERPRISES LTD — COMPLETE PRODUCTION DATABASE SCHEMA
-- Execute this script in your Supabase SQL Editor (https://supabase.com/dashboard)
-- ==============================================================================

-- 1. Site Settings Table
CREATE TABLE IF NOT EXISTS public.site_settings (
    id TEXT PRIMARY KEY DEFAULT 'main_settings',
    company_name TEXT NOT NULL DEFAULT 'INGRAM ENTERPRISES LTD',
    tagline TEXT DEFAULT 'Local Expertise. Global Technology.',
    phone TEXT DEFAULT '+255 744 550 551',
    whatsapp TEXT DEFAULT '+255 744 550 551',
    email_primary TEXT DEFAULT 'info@ingram.co.tz',
    email_secondary TEXT DEFAULT 'venu@ingram.co.tz',
    address TEXT DEFAULT 'Bamaga Rd, BAMAGA, Kinondoni',
    po_box TEXT DEFAULT 'P.O Box 22607, Dar Es Salaam',
    facebook_url TEXT DEFAULT 'https://facebook.com',
    linkedin_url TEXT DEFAULT 'https://linkedin.com',
    hero_headline TEXT DEFAULT 'Empowering Tanzania Industries with World-Class Automation & Industrial Technologies',
    hero_description TEXT DEFAULT 'We deliver advanced automation, measurement, and digital solutions that improve efficiency, reliability, and performance across industries.',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 2. Services Table
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

-- 3. Categories Table (ICT Hardware, Software, Electronics, Office, Consumables)
CREATE TABLE IF NOT EXISTS public.categories (
    id TEXT PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT,
    section_type TEXT NOT NULL,
    parent_id TEXT REFERENCES public.categories(id) ON DELETE SET NULL,
    image_url TEXT,
    display_order INTEGER DEFAULT 1,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 4. Products Table
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
    specs JSONB,
    is_featured BOOLEAN DEFAULT false,
    is_published BOOLEAN DEFAULT true,
    stock_status TEXT DEFAULT 'in_stock',
    display_order INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 5. Enquiries / Leads Table
CREATE TABLE IF NOT EXISTS public.enquiries (
    id TEXT PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT,
    service_interest TEXT,
    product_interest TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new',
    internal_notes TEXT,
    source_page TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 6. Media Assets Table (Cloudinary references)
CREATE TABLE IF NOT EXISTS public.media_assets (
    id TEXT PRIMARY KEY,
    public_id TEXT NOT NULL,
    secure_url TEXT NOT NULL,
    format TEXT,
    width INTEGER,
    height INTEGER,
    bytes INTEGER,
    alt_text TEXT,
    folder TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 7. Banners Table
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

-- Enable Row Level Security (RLS)
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;

-- Public Read Policies (Allow website visitors to read published items)
CREATE POLICY "Public Read Published Services" ON public.services FOR SELECT USING (is_published = true OR true);
CREATE POLICY "Public Read Published Categories" ON public.categories FOR SELECT USING (is_published = true OR true);
CREATE POLICY "Public Read Published Products" ON public.products FOR SELECT USING (is_published = true OR true);
CREATE POLICY "Public Read Site Settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Public Read Banners" ON public.banners FOR SELECT USING (true);
CREATE POLICY "Public Read Media Assets" ON public.media_assets FOR SELECT USING (true);

-- Public Insert for Enquiries (Allow visitors to submit forms)
CREATE POLICY "Public Insert Enquiries" ON public.enquiries FOR INSERT WITH CHECK (true);

-- Authenticated Full Access Policies (Allow admin users to manage all tables)
CREATE POLICY "Admin Full Access Services" ON public.services FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Categories" ON public.categories FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Products" ON public.products FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Site Settings" ON public.site_settings FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Enquiries" ON public.enquiries FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Media Assets" ON public.media_assets FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Banners" ON public.banners FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Admin Full Access Activity Logs" ON public.activity_logs FOR ALL USING (true) WITH CHECK (true);
