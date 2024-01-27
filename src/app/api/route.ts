/**
- Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

- NextResponse (json()): Produce a response with the given JSON body -> https://nextjs.org/docs/app/api-reference/functions/next-response#json

- go url: http://localhost:3000/api
*/

// Route Handler: https://www.youtube.com/watch?v=OlzlNAbDo_k&list=PLmF_zPV9ZcP2aYRuoEsMla5gqNjxP-V20&index=25&ab_channel=VIPCODESTUDIO
// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: 200, message: "Hello World" });
}
