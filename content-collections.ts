import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const articles = defineCollection({
  name: "article",
  directory: "src/articles",
  include: "**/*.md",
  schema: z.object({
    title: z.string().nonempty().nonoptional(),
    slug: z.string().nonempty().nonoptional(),
    article_type: z
      .enum(["guide", "build", "other"])
      .default("other")
      .nonoptional(),
  }),
});

export default defineConfig({
  collections: [articles],
});
