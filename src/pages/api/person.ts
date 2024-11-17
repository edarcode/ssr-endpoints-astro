import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  console.log(url.searchParams.get("name"));
  const edar = {
    name: "edar",
    age: 28,
  };

  return new Response(JSON.stringify(edar), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
