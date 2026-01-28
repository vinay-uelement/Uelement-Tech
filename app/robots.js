export const dynamic = "force-static";
export const revalidate = 86400; // regenerate daily when running in ISR environments

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
    ],
    sitemap: "https://uelement.in/sitemap.xml",
  };
}
