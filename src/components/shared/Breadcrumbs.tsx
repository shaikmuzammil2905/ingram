import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({
  items,
  theme = "dark",
}: {
  items: BreadcrumbItem[];
  theme?: "light" | "dark";
}) {
  const isLight = theme === "light";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-2 text-xs py-2 ${
        isLight ? "text-gray-500" : "text-purple-200"
      }`}
    >
      <Link
        href="/"
        className={`flex items-center gap-1 transition-colors ${
          isLight ? "hover:text-brand-purple" : "hover:text-white"
        }`}
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight
            className={`w-3.5 h-3.5 ${
              isLight ? "text-gray-400" : "text-purple-300/70"
            }`}
          />
          {item.href ? (
            <Link
              href={item.href}
              className={`transition-colors ${
                isLight ? "hover:text-brand-purple" : "hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={`font-semibold ${
                isLight ? "text-gray-900" : "text-white"
              }`}
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
