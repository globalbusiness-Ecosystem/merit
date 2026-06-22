import { NextRequest, NextResponse } from "next/server";

const PI_API_BASE = "https://api.minepi.com";
const EXPECTED_AMOUNT = 5;

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
    // Fetch payment details from Pi servers to verify amount before approving
    const getRes = await fetch(`${PI_API_BASE}/v2/payments/${paymentId}`, {
      headers: { Authorization: `Key ${apiKey}` },
    });

    if (!getRes.ok) {
      const errText = await getRes.text();
      console.error("Failed to fetch payment for approval:", getRes.status, errText);
      return NextResponse.json({ error: "Failed to fetch payment" }, { status: 400 });
    }

    const payment = await getRes.json();

    if (typeof payment.amount !== "number" || payment.amount !== EXPECTED_AMOUNT) {
      console.error("Amount mismatch on approve:", payment.amount, "expected", EXPECTED_AMOUNT);
      return NextResponse.json({ error: "Payment amount mismatch" }, { status: 400 });
    }

    // Approve the payment with Pi servers
    const approveRes = await fetch(`${PI_API_BASE}/v2/payments/${paymentId}/approve`, {
      method: "POST",
      headers: { Authorization: `Key ${apiKey}` },
    });

    if (!approveRes.ok) {
      const errText = await approveRes.text();
      console.error("Pi approve call failed:", approveRes.status, errText);
      return NextResponse.json({ error: "Approval failed" }, { status: 400 });
    }

    const approvedPayment = await approveRes.json();
    return NextResponse.json(approvedPayment, { status: 200 });
  } catch (err) {
    console.error("Approve route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
