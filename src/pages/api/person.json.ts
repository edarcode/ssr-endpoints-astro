import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const edar = {
    name: "edar",
    age: 28,
  };

  return new Response(JSON.stringify(edar), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
