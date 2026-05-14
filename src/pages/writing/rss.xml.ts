import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("writing");
  const sorted = [...posts].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  // RSS feeds need absolute URLs everywhere — readers can't resolve
  // relative paths. Build the prefixed home URL by combining
  // context.site with BASE_URL, then derive item links from there.
  const siteHome = new URL(
    import.meta.env.BASE_URL,
    context.site,
  ).toString();

  return rss({
    title: "Shayne Geilman · Writing",
    description:
      "Notes on the literacies engineering needs in the LLM era: critical asking, prompt design as a craft, agentic workflows, and what carries over from research editing into engineering.",
    site: siteHome,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: new URL(`writing/${post.id}/`, siteHome).toString(),
    })),
  });
}
