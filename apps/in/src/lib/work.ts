import type { CaseMeta } from "@/components/work/case-card";
import { getCollection } from "astro:content";

export async function getWorkPages(): Promise<CaseMeta[]> {
  const allWork = await getCollection("work");
  return allWork
    .map((page) => ({
      url: `/work/${page.id}`,
      title: page.data.title,
      description: page.data.description,
      client: page.data.client,
      sector: page.data.sector,
      tags: page.data.tags,
      gradient: page.data.gradient,
      order: page.data.order,
    }))
    .sort((a, b) => a.order - b.order);
}
