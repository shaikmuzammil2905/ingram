"use client";

import React from "react";
import CategoryShowcase from "@/components/catalog/CategoryShowcase";
import { SOFTWARE_CATEGORIES } from "@/data/catalog";

export default function AutoCadPage() {
  const category = SOFTWARE_CATEGORIES.find((c) => c.slug === "autocad")!;

  return (
    <CategoryShowcase
      category={category}
      parentCategoryName="Software Solutions"
      parentCategoryHref="/software"
    />
  );
}
