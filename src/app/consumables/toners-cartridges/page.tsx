"use client";

import React from "react";
import CategoryShowcase from "@/components/catalog/CategoryShowcase";
import { CONSUMABLES_CATEGORIES } from "@/data/catalog";

export default function TonersCartridgesPage() {
  const category = CONSUMABLES_CATEGORIES.find((c) => c.slug === "toners-cartridges")!;

  return (
    <CategoryShowcase
      category={category}
      parentCategoryName="Consumables"
      parentCategoryHref="/consumables"
    />
  );
}
