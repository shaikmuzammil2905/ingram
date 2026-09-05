import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ingram.co.tz";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/industrial-automation",
    "/services/process-control",
    "/services/instrumentation",
    "/services/digital-transformation",
    "/solutions",
    "/partners",
    "/industries",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
