/**
- Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

- NextResponse (json()): Produce a response with the given JSON body -> https://nextjs.org/docs/app/api-reference/functions/next-response#json

- go url: http://localhost:3000/api
*/

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: 200, message: "Success" });
}
