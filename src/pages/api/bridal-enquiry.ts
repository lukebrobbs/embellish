import type { APIRoute } from "astro";

const requiredFields = ["name", "email", "date", "location", "partySize", "services"];

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();

  for (const field of requiredFields) {
    const value = formData.get(field);
    if (typeof value !== "string" || value.trim() === "") {
      return new Response(`Missing required field: ${field}`, { status: 400 });
    }
  }

  console.info("Bridal enquiry received", {
    name: formData.get("name"),
    email: formData.get("email"),
    date: formData.get("date"),
    location: formData.get("location"),
    partySize: formData.get("partySize"),
    services: formData.get("services"),
    notes: formData.get("notes"),
  });

  return redirect("/weddings?submitted=1", 303);
};
