import { NextRequest, NextResponse } from "next/server";

const PI_API_BASE = "https://api.minepi.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const piAuthToken = body?.pi_auth_token;

    if (!piAuthToken || typeof piAuthToken !== "string") {
      return NextResponse.json(
        { error: "pi_auth_token is required" },
        { status: 400 }
      );
    }

    // Verify the access token directly with Pi Network
    const meRes = await fetch(`${PI_API_BASE}/v2/me`, {
      headers: {
        Authorization: `Bearer ${piAuthToken}`,
      },
    });

    if (!meRes.ok) {
      const errText = await meRes.text();
      console.error("Pi /v2/me verification failed:", meRes.status, errText);
      return NextResponse.json(
        { error: "Invalid or expired Pi access token" },
        { status: 401 }
      );
    }

    const piUser = await meRes.json();

    // Build the LoginDTO shape expected by the frontend (pi-auth-context.tsx)
    const loginDTO = {
      id: piUser.uid,
      username: piUser.username,
      credits_balance: 0,
      terms_accepted: true,
      app_id: process.env.NEXT_PUBLIC_PI_APP_ID || "merit",
    };

    return NextResponse.json(loginDTO, { status: 200 });
  } catch (err) {
    console.error("Login route error:", err);
    return NextResponse.json(
      { error: "Internal server error during login" },
      { status: 500 }
    );
  }
}
