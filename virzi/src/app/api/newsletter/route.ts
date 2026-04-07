import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string };
  if (!body.email || !body.email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  return NextResponse.json(
    {
      success: true,
      message:
        "Subscribed. This endpoint is CMS/CRM-ready for providers like ConvertKit, Beehiiv, or Mailchimp.",
    },
    { status: 200 },
  );
}
