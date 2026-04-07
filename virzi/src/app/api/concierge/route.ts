import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    notes?: string;
  };

  if (!body.name || !body.email || !body.notes) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  return NextResponse.json(
    {
      success: true,
      message:
        "Request received. Connect this route to your CRM or concierge workflow.",
    },
    { status: 200 },
  );
}
