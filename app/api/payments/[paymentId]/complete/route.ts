import { NextRequest, NextResponse } from "next/server";

const PI_API_BASE = "https://api.minepi.com";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ paymentId: string }> }
) {
  const { paymentId } = await params;
  const apiKey = process.env.PI_API_KEY;

  if (!apiKey) {
    console.error("PI_API_KEY is not set");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  try {
    const body = await request.json();
    const txid = body?.txid;

    if (!txid || typeof txid !== "string") {
      return NextResponse.json({ error: "txid is required" }, { status: 400 });
    }

    const completeRes = await fetch(`${PI_API_BASE}/v2/payments/${paymentId}/complete`, {
      method: "POST",
      headers: {
        Authorization: `Key ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ txid }),
    });

    if (!completeRes.ok) {
      const errText = await completeRes.text();
      console.error("Pi complete call failed:", completeRes.status, errText);
      return NextResponse.json({ error: "Completion failed" }, { status: 400 });
    }

    const completedPayment = await completeRes.json();
    return NextResponse.json(completedPayment, { status: 200 });
  } catch (err) {
    console.error("Complete route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
