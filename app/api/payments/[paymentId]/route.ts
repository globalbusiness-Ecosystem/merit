import { NextRequest, NextResponse } from "next/server";

const PI_API_BASE = "https://api.testnet.minepi.com";

export async function GET(
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
    const res = await fetch(`${PI_API_BASE}/v2/payments/${paymentId}`, {
      headers: { Authorization: `Key ${apiKey}` },
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Failed to fetch payment:", res.status, errText);
      return NextResponse.json({ error: "Failed to fetch payment" }, { status: 400 });
    }

    const payment = await res.json();
    return NextResponse.json(payment, { status: 200 });
  } catch (err) {
    console.error("Get payment route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
