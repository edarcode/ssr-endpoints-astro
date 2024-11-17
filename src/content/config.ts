import { defineCollection, z } from "astro:content";

const libraryCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      img: image(),
    }),
});

export const collections = {
  library: libraryCollection,
};
