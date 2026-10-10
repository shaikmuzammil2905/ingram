"use client";

import React from "react";
import CategoryShowcase from "@/components/catalog/CategoryShowcase";
import { OFFICE_EQUIPMENT_CATEGORIES } from "@/data/catalog";

export default function ComputerTablesPage() {
  const category = OFFICE_EQUIPMENT_CATEGORIES.find((c) => c.slug === "computer-tables")!;

  return (
    <CategoryShowcase
      category={category}
      parentCategoryName="Office Equipment"
      parentCategoryHref="/office-equipment"
    />
  );
}
