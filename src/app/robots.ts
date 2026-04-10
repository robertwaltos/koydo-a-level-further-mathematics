import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://a-level-further-mathematics.koydo.app/sitemap.xml",
    host: "https://a-level-further-mathematics.koydo.app",
  };
}
