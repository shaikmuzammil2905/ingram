"use client";

import React from "react";
import CategoryShowcase from "@/components/catalog/CategoryShowcase";
import { SOFTWARE_CATEGORIES } from "@/data/catalog";

export default function MicrosoftProductsPage() {
  const category = SOFTWARE_CATEGORIES.find((c) => c.slug === "microsoft-products")!;

  return (
    <CategoryShowcase
      category={category}
      parentCategoryName="Software Solutions"
      parentCategoryHref="/software"
    />
  );
}
