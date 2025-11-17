export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://yourcompany.com/sitemap.xml",
  };
}
