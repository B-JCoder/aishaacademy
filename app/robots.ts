import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"], // Protecting sensitive or internal routes
    },
    sitemap: "https://aisha-academy.com/sitemap.xml",
  };
}
