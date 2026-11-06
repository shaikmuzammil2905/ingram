import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { getDefaultServices, getDefaultProducts, getDefaultCategories, getDefaultBanners, getDefaultSettings } from "@/context/WebsiteContentContext";

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "live_store.json");

interface MasterStore {
  services: any[];
  products: any[];
  categories: any[];
  banners: any[];
  settings: any;
  enquiries: any[];
  customDropdowns: any[];
  navigationMenu: any[];
  updatedAt: string;
}

// Initial state builder
function getInitialStore(): MasterStore {
  return {
    services: getDefaultServices(),
    products: getDefaultProducts(),
    categories: getDefaultCategories(),
    banners: getDefaultBanners(),
    settings: getDefaultSettings(),
    enquiries: [],
    customDropdowns: [
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
    ],
    navigationMenu: [
      { id: "nav_1", label: "Home", href: "/", order: 1, is_active: true },
      { id: "nav_2", label: "Services", href: "/services", order: 2, is_active: true },
      { id: "nav_3", label: "Products", href: "/electronics", order: 3, is_active: true },
      { id: "nav_4", label: "About Us", href: "/about", order: 4, is_active: true },
      { id: "nav_5", label: "Contact", href: "/contact", order: 5, is_active: true },
    ],
    updatedAt: new Date().toISOString(),
  };
}

async function readStore(): Promise<MasterStore> {
  try {
    const raw = await fs.readFile(DATA_FILE_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    // If file does not exist, initialize and persist
    const initial = getInitialStore();
    try {
      await fs.writeFile(DATA_FILE_PATH, JSON.stringify(initial, null, 2), "utf-8");
    } catch (writeErr) {
      console.warn("Could not write initial live_store.json:", writeErr);
    }
    return initial;
  }
}

async function writeStore(store: MasterStore): Promise<void> {
  store.updatedAt = new Date().toISOString();
  await fs.writeFile(DATA_FILE_PATH, JSON.stringify(store, null, 2), "utf-8");
}

// GET: Retrieve all master content or a specific key
export async function GET(request: NextRequest) {
  try {
    const store = await readStore();
    const { searchParams } = new URL(request.url);
    const section = searchParams.get("section");

    if (section && section in store) {
      return NextResponse.json({ success: true, data: (store as any)[section] });
    }

    return NextResponse.json({
      success: true,
      data: store,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to load store" },
      { status: 500 }
    );
  }
}

// POST: Save, update, or delete items across sections
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, section, data, id } = body;

    const store = await readStore();

    if (!section || !(section in store)) {
      return NextResponse.json({ success: false, error: `Invalid section: ${section}` }, { status: 400 });
    }

    // 1. Settings object replace/merge
    if (section === "settings") {
      store.settings = { ...store.settings, ...data };
      await writeStore(store);
      return NextResponse.json({ success: true, data: store.settings });
    }

    // 2. Collection operations (services, products, categories, banners, enquiries, customDropdowns, navigationMenu)
    const list = ((store as any)[section] as any[]) || [];

    if (action === "save" || action === "upsert") {
      const targetId = data.id || `${section.slice(0, 4)}_${Date.now()}`;
      const itemToSave = { ...data, id: targetId, updated_at: new Date().toISOString() };
      const index = list.findIndex((item) => item.id === targetId);

      if (index >= 0) {
        list[index] = { ...list[index], ...itemToSave };
      } else {
        list.push(itemToSave);
      }
      (store as any)[section] = list;
      await writeStore(store);
      return NextResponse.json({ success: true, item: itemToSave, count: list.length });
    }

    if (action === "delete") {
      if (!id) {
        return NextResponse.json({ success: false, error: "Missing id for delete" }, { status: 400 });
      }
      (store as any)[section] = list.filter((item) => item.id !== id);
      await writeStore(store);
      return NextResponse.json({ success: true, deletedId: id });
    }

    if (action === "bulk_update") {
      if (Array.isArray(data)) {
        (store as any)[section] = data;
        await writeStore(store);
        return NextResponse.json({ success: true, count: data.length });
      }
    }

    return NextResponse.json({ success: false, error: "Unsupported action" }, { status: 400 });
  } catch (error: any) {
    console.error("Store POST error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update store" },
      { status: 500 }
    );
  }
}

