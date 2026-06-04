import { MetadataRoute } from "next";
import { projects } from "@/src/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sabihaaamir.vercel.app";

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
