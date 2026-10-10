"use client";

import React from "react";
import CategoryShowcase from "@/components/catalog/CategoryShowcase";
import { OFFICE_EQUIPMENT_CATEGORIES } from "@/data/catalog";

export default function FileRacksPage() {
  const category = OFFICE_EQUIPMENT_CATEGORIES.find((c) => c.slug === "file-racks")!;

  return (
    <CategoryShowcase
      category={category}
      parentCategoryName="Office Equipment"
      parentCategoryHref="/office-equipment"
    />
  );
}
