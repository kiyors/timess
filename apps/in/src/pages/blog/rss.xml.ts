import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: string }) {
  const blog = await getCollection("blog");
  return rss({
    title: "Indiefluence Blog",
    description: "Thoughts, ideas, and stories from our team.",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date ? new Date(post.data.date) : new Date(),
      description: post.data.description,
      link: `/blog/${post.id}/`,
      author: post.data.author || "Indiefluence Team",
    })),
    customData: `<language>en</language>`,
  });
}
