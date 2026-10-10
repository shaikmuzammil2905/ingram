"use client";

import React from "react";
import CategoryShowcase from "@/components/catalog/CategoryShowcase";
import { ICT_HARDWARE_CATEGORIES } from "@/data/catalog";

export default function PowerBackupPage() {
  const category = ICT_HARDWARE_CATEGORIES.find((c) => c.slug === "power-backup")!;

  return (
    <CategoryShowcase
      category={category}
      parentCategoryName="ICT Hardware"
      parentCategoryHref="/ict-hardware"
    />
  );
}
