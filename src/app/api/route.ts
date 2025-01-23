import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    product: [
      {
        id: 1,
        name: "Product 1"
      },
      {
        id: 2,
        name: "Product 2"
      }
    ]
  });
}
