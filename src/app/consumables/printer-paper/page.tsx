"use client";

import React from "react";
import CategoryShowcase from "@/components/catalog/CategoryShowcase";
import { CONSUMABLES_CATEGORIES } from "@/data/catalog";

export default function PrinterPaperPage() {
  const category = CONSUMABLES_CATEGORIES.find((c) => c.slug === "printer-paper")!;

  return (
    <CategoryShowcase
      category={category}
      parentCategoryName="Consumables"
      parentCategoryHref="/consumables"
    />
  );
}
