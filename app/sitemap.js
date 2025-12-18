import { glob } from "glob";

const BASE_URL = "https://uelement.in";

export default async function sitemap() {
  // Find all page files
  const pages = await glob("app/**/page.{js,jsx,ts,tsx}", {
    ignore: [
      "app/**/_*/**",
      "app/**/(*)/**",
      "app/api/**",
    ],
  });

  const urls = pages.map((file) => {
    let route = file
      .replace(/^app/, "")
      .replace(/\/page\.(js|jsx|ts|tsx)$/, "");

    // Route groups () should not appear in URL
    route = route.replace(/\(.*?\)/g, "");

    // Root page
    if (route === "") route = "/";

    return {
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "/" ? 1.0 : 0.8,
    };
  });

  return urls;
}
