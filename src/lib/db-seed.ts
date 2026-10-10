import { supabase, DbService, DbProduct, DbCategory, DbEnquiry, DbSiteSettings } from "./supabase";
import { PRIMARY_SERVICES, COMPANY_INFO } from "@/data/company";
import {
  ICT_HARDWARE_CATEGORIES,
  SOFTWARE_CATEGORIES,
  ELECTRONICS_PRODUCTS,
  OFFICE_EQUIPMENT_CATEGORIES,
  CONSUMABLES_CATEGORIES,
  ELECTRONICS_CATEGORIES,
} from "@/data/catalog";

/**
 * Ensures initial default data is populated into Supabase tables if empty
 */
export async function seedInitialDatabaseIfEmpty() {
  try {
    // 1. Check services
    const { data: existingServices, error: servError } = await supabase
      .from("services")
      .select("id")
      .limit(1);

    if (!servError && (!existingServices || existingServices.length === 0)) {
      const initialServices: Partial<DbService>[] = PRIMARY_SERVICES.map((s, idx) => ({
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

      await supabase.from("services").upsert(initialServices, { onConflict: "id" });
    }

    // 2. Check categories
    const { data: existingCategories, error: catError } = await supabase
      .from("categories")
      .select("id")
      .limit(1);

    if (!catError && (!existingCategories || existingCategories.length === 0)) {
      const allCats: Partial<DbCategory>[] = [];
      let order = 1;

      // ICT Hardware
      ICT_HARDWARE_CATEGORIES.forEach((c) => {
        allCats.push({
          id: c.id,
          slug: c.slug,
          title: c.title,
          subtitle: c.subtitle,
          description: c.description,
          section_type: "ict-hardware",
          image_url: c.bannerImage,
          display_order: order++,
          is_published: true,
        });
      });

      // Software
      SOFTWARE_CATEGORIES.forEach((c) => {
        allCats.push({
          id: c.id,
          slug: c.slug,
          title: c.title,
          subtitle: c.subtitle,
          description: c.description,
          section_type: "software",
          image_url: c.bannerImage,
          display_order: order++,
          is_published: true,
        });
      });

      // Electronics
      ELECTRONICS_CATEGORIES.forEach((c) => {
        allCats.push({
          id: c.id,
          slug: c.slug,
          title: c.title,
          subtitle: `${c.count} verified products`,
          section_type: "electronics",
          image_url: c.image,
          display_order: order++,
          is_published: true,
        });
      });

      // Office Equipment
      OFFICE_EQUIPMENT_CATEGORIES.forEach((c) => {
        allCats.push({
          id: c.id,
          slug: c.slug,
          title: c.title,
          subtitle: c.subtitle,
          description: c.description,
          section_type: "office-equipment",
          image_url: c.bannerImage,
          display_order: order++,
          is_published: true,
        });
      });

      // Consumables
      CONSUMABLES_CATEGORIES.forEach((c) => {
        allCats.push({
          id: c.id,
          slug: c.slug,
          title: c.title,
          subtitle: c.subtitle,
          description: c.description,
          section_type: "consumables",
          image_url: c.bannerImage,
          display_order: order++,
          is_published: true,
        });
      });

      await supabase.from("categories").upsert(allCats, { onConflict: "id" });
    }

    // 3. Check products
    const { data: existingProducts, error: prodError } = await supabase
      .from("products")
      .select("id")
      .limit(1);

    if (!prodError && (!existingProducts || existingProducts.length === 0)) {
      const initialProducts: Partial<DbProduct>[] = ELECTRONICS_PRODUCTS.map((p, idx) => ({
        id: p.id,
        slug: p.slug,
        name: p.name,
        category_slug: p.categorySlug,
        category_title: p.category,
        brand: p.brand,
        model: p.model,
        price: p.price,
        currency: "TZS",
        short_description: p.shortDescription,
        description: Array.isArray(p.description) ? p.description.join("\n\n") : p.description,
        image_url: p.image,
        gallery_images: p.gallery || [p.image],
        features: p.features,
        specs: p.specifications,
        is_featured: false,
        is_published: true,
        stock_status: p.inStock ? "in_stock" : "available_on_order",
        display_order: idx + 1,
      }));

      await supabase.from("products").upsert(initialProducts, { onConflict: "id" });
    }

    // 4. Check site_settings
    const { data: existingSettings, error: setError } = await supabase
      .from("site_settings")
      .select("id")
      .limit(1);

    if (!setError && (!existingSettings || existingSettings.length === 0)) {
      const initialSettings: Partial<DbSiteSettings> = {
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
      };

      await supabase.from("site_settings").upsert([initialSettings], { onConflict: "id" });
    }
  } catch (err) {
    console.warn("Database auto-seed check skipped or already configured:", err);
  }
}

/**
 * Submit an enquiry to Supabase with fallback
 */
export async function submitEnquiryToSupabase(enquiry: Omit<DbEnquiry, "id" | "created_at" | "status">) {
  try {
    const payload = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      full_name: enquiry.full_name,
      email: enquiry.email,
      phone: enquiry.phone,
      company: enquiry.company || "",
      service_interest: enquiry.service_interest || "",
      product_interest: enquiry.product_interest || "",
      message: enquiry.message,
      source_page: enquiry.source_page || window.location.pathname,
      status: "new",
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase.from("enquiries").insert([payload]).select();
    if (error) {
      console.warn("Supabase enquiry insert notification:", error.message);
    }
    return { success: !error, data };
  } catch (err: any) {
    console.warn("Enquiry submission fallback:", err);
    return { success: false, error: err.message };
  }
}
