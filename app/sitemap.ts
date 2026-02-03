import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aisha-academy.com";

  // List of all routes in our application
  const routes = [
    "",
    "/about",
    "/admissions",
    "/enroll",
    "/contact",
    "/online-classes",
    "/physical-classes",
    "/pricing",
    "/programs",
    "/schedule",
    "/privacy-policy",
    "/terms-conditions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
