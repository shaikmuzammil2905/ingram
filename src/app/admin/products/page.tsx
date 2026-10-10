"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Package,
  Plus,
  Edit2,
  Trash2,
  Search,
  CheckCircle,
  X,
  Save,
  ExternalLink,
  SlidersHorizontal,
  Tag,
} from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import CloudinaryUploadButton from "@/components/admin/CloudinaryUploadButton";
import { supabase, DbProduct } from "@/lib/supabase";
import { ELECTRONICS_PRODUCTS } from "@/data/catalog";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<DbProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [editingProduct, setEditingProduct] = useState<Partial<DbProduct> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("display_order", { ascending: true });

      if (!error && data && data.length > 0) {
        setProducts(data);
      } else {
        // Fallback default electronics products
        const defaults: DbProduct[] = ELECTRONICS_PRODUCTS.map((p, idx) => ({
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
        setProducts(defaults);
      }
    } catch (err) {
      console.warn("Fetch products fallback:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct?.name || !editingProduct?.slug) return;

    setSaving(true);
    try {
      const payload = {
        ...editingProduct,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from("products").upsert([payload], { onConflict: "id" });
      if (error) {
        console.warn("Supabase upsert warning:", error.message);
      }

      setEditingProduct(null);
      setIsNew(false);
      fetchProducts();
    } catch (err) {
      console.error("Save product error:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await supabase.from("products").delete().eq("id", id);
      fetchProducts();
    } catch (err) {
      console.error("Delete product error:", err);
    }
  };

  const categories = Array.from(new Set(products.map((p) => p.category_slug)));

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.brand && p.brand.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.model && p.model.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCat = categoryFilter === "all" || p.category_slug === categoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Package className="w-3.5 h-3.5" />
              <span>Products & Showroom Catalog</span>
            </div>
            <h1 className="text-2xl font-extrabold text-brand-navy">Product Catalog Management</h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Manage live showroom items, ICT hardware models, specifications, and verified pricing.
            </p>
          </div>

          <button
            onClick={() => {
              setIsNew(true);
              setEditingProduct({
                id: `prod_${Date.now()}`,
                slug: "",
                name: "",
                category_slug: "televisions",
                category_title: "Smart TVs & Commercial Displays",
                brand: "Hisense",
                model: "",
                price: "",
                currency: "TZS",
                short_description: "",
                description: "",
                image_url: "/images/electronics/tv-4k.jpg",
                is_published: true,
                stock_status: "in_stock",
                display_order: products.length + 1,
              });
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </button>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by product name, brand, or model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 focus:outline-none focus:border-brand-purple"
          >
            <option value="all">All Categories ({products.length})</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.replace("-", " ").toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Products Table / Grid */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price / Currency</th>
                  <th className="p-4">Stock Status</th>
                  <th className="p-4">Visibility</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {filteredProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-lg bg-gray-100 overflow-hidden shrink-0 border border-gray-200">
                          {p.image_url ? (
                            <Image src={p.image_url} alt={p.name} fill className="object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">N/A</div>
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{p.name}</div>
                          <div className="text-[11px] text-gray-500">
                            {p.brand && <span className="font-semibold">{p.brand}</span>}
                            {p.model && <span className="ml-1 font-mono">({p.model})</span>}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="p-4">
                      <span className="inline-block px-2.5 py-1 bg-gray-100 rounded-md text-xs font-semibold text-gray-700">
                        {p.category_title || p.category_slug}
                      </span>
                    </td>

                    <td className="p-4 font-mono font-bold text-gray-900">
                      {p.price ? (
                        <span>
                          {p.currency || "TZS"} {p.price}
                        </span>
                      ) : (
                        <span className="text-gray-400 font-sans text-xs italic">Quotation Basis</span>
                      )}
                    </td>

                    <td className="p-4">
                      <span
                        className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                          p.stock_status === "in_stock"
                            ? "bg-green-100 text-green-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {p.stock_status === "in_stock" ? "In Stock" : "On Order"}
                      </span>
                    </td>

                    <td className="p-4">
                      <span
                        className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                          p.is_published ? "bg-green-500 text-white" : "bg-gray-400 text-white"
                        }`}
                      >
                        {p.is_published ? "Live" : "Draft"}
                      </span>
                    </td>

                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href={`/electronics/products/${p.slug}`}
                          target="_blank"
                          className="p-1.5 text-gray-400 hover:text-brand-purple rounded-lg transition-colors"
                          title="View on live website"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => {
                            setIsNew(false);
                            setEditingProduct(p);
                          }}
                          className="p-1.5 text-brand-purple hover:bg-brand-purple-tint rounded-lg transition-colors"
                          title="Edit product"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(p.id)}
                          className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit / Create Product Modal */}
        {editingProduct && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-brand-navy">
                  {isNew ? "Add New Product" : `Edit Product: ${editingProduct.name}`}
                </h2>
                <button
                  onClick={() => setEditingProduct(null)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-gray-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Product Name
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProduct.name || ""}
                      onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                      placeholder="e.g. 65 Inch 4K UHD Smart TV"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Product Slug
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProduct.slug || ""}
                      onChange={(e) => setEditingProduct({ ...editingProduct, slug: e.target.value })}
                      placeholder="e.g. 65-inch-4k-uhd-smart-tv"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Category Slug
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProduct.category_slug || ""}
                      onChange={(e) => setEditingProduct({ ...editingProduct, category_slug: e.target.value })}
                      placeholder="e.g. televisions"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Brand
                    </label>
                    <input
                      type="text"
                      value={editingProduct.brand || ""}
                      onChange={(e) => setEditingProduct({ ...editingProduct, brand: e.target.value })}
                      placeholder="e.g. Hisense / HP / Dell"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Model Number
                    </label>
                    <input
                      type="text"
                      value={editingProduct.model || ""}
                      onChange={(e) => setEditingProduct({ ...editingProduct, model: e.target.value })}
                      placeholder="e.g. 65A6K"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Price (Leave empty if Quotation basis)
                    </label>
                    <input
                      type="text"
                      value={editingProduct.price || ""}
                      onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                      placeholder="e.g. 1,450,000"
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Stock Availability
                    </label>
                    <select
                      value={editingProduct.stock_status || "in_stock"}
                      onChange={(e) => setEditingProduct({ ...editingProduct, stock_status: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                    >
                      <option value="in_stock">In Stock (Available)</option>
                      <option value="available_on_order">Available on Order</option>
                      <option value="out_of_stock">Out of Stock</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Short Description
                  </label>
                  <textarea
                    rows={2}
                    value={editingProduct.short_description || ""}
                    onChange={(e) => setEditingProduct({ ...editingProduct, short_description: e.target.value })}
                    placeholder="Brief summary for product card"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple"
                  />
                </div>

                {/* Cloudinary Image Upload */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Product Main Image (Cloudinary)
                  </label>
                  <CloudinaryUploadButton
                    currentImageUrl={editingProduct.image_url}
                    folder="ingram_products"
                    onImageUploaded={(url) => setEditingProduct({ ...editingProduct, image_url: url })}
                  />
                </div>

                {/* Published Toggle */}
                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="productPublished"
                    checked={editingProduct.is_published ?? true}
                    onChange={(e) => setEditingProduct({ ...editingProduct, is_published: e.target.checked })}
                    className="w-4 h-4 text-brand-purple rounded"
                  />
                  <label htmlFor="productPublished" className="text-xs font-bold text-gray-800">
                    Publish in Live Showroom / Catalog
                  </label>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    className="px-4 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-2.5 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{saving ? "Saving to Supabase..." : "Save Product"}</span>
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
