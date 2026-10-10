"use client";

import React from "react";
import CategoryShowcase from "@/components/catalog/CategoryShowcase";
import { ICT_HARDWARE_CATEGORIES } from "@/data/catalog";

export default function LaptopsDesktopsPage() {
  const category = ICT_HARDWARE_CATEGORIES.find((c) => c.slug === "laptops-desktops")!;

  return (
    <CategoryShowcase
      category={category}
      parentCategoryName="ICT Hardware"
      parentCategoryHref="/ict-hardware"
    />
  );
}
