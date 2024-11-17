import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const library = await getCollection("library");

  return new Response(JSON.stringify(library), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
