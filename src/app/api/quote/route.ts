import { NextResponse } from "next/server";

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  suburb?: string;
  service?: string;
  message?: string;
  company_website?: string; // honeypot
};

export async function POST(req: Request) {
  let data: QuotePayload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: bots fill every field. Pretend success so they move on.
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const name = (data.name ?? "").trim();
  const phone = (data.phone ?? "").trim();
  const message = (data.message ?? "").trim();
  if (!name || !phone || !message) {
    return NextResponse.json(
      { error: "Name, phone and message are required" },
      { status: 400 }
    );
  }

  const enquiry = {
    name: name.slice(0, 200),
    phone: phone.slice(0, 50),
    email: (data.email ?? "").trim().slice(0, 200),
    suburb: (data.suburb ?? "").trim().slice(0, 100),
    service: (data.service ?? "").trim().slice(0, 100),
    message: message.slice(0, 5000),
    submittedAt: new Date().toISOString(),
    source: "paintlink.co.nz",
  };

  const webhookUrl = process.env.QUOTE_WEBHOOK_URL;

  if (!webhookUrl) {
    // No webhook configured yet (see docs/form-setup.md) — log so nothing is lost in dev.
    console.log("[quote] QUOTE_WEBHOOK_URL not set. Enquiry:", enquiry);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enquiry),
      // Apps Script responds with a redirect; follow it so we see the final status.
      redirect: "follow",
    });
    if (!res.ok) {
      throw new Error(`Webhook responded ${res.status}`);
    }
  } catch (err) {
    console.error("[quote] Failed to forward enquiry:", err, enquiry);
    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
