// Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// goto /app/(auth)/login.tsx : nk amik data dan memasukkan sbg POST di /api/auth/login.ts
// bila console -> network = boleh nampak header|response data

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // console.log(req);
  // console.log(req.json()); // bentuknya Promise{...}, jadi takleh nak console.log
  const req = await request.json();
  console.log(req); // dapat data dari Request Payload: { email: 'amirah@todak.com', password: '1234' }

  return NextResponse.json({
    status: 200,
    message: "Login Success",
    data: req,
  });
}


