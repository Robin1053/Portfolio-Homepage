import type { MetadataRoute } from "next";

const baseUrl = "https://robineb.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/impressum`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/datenschutz`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
