import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ appId: string }> }
) {
  const { appId } = await params;

  const products = [
    {
      id: "69b0da4d654737a939df723e",
      name: "Merit Course Enrollment",
      description: "Unlock full access to any course on Merit.",
      price_in_pi: 5,
      total_quantity: 1000000,
      is_active: true,
      created_at: new Date().toISOString(),
    },
  ];

  return NextResponse.json({ products }, { status: 200 });
}
