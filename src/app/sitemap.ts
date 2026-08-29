import type { MetadataRoute } from "next";

const baseUrl = "https://robineb.de";

export default function sitemap(): MetadataRoute.Sitemap {
  // Impressum und Datenschutz sind bewusst noindex und gehören
  // deshalb nicht in die Sitemap.
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
