import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // http://localhost:3000/api/revalidate?=products
  const tag = request.nextUrl.searchParams.get("tag");
  // http://localhost:3000/api/revalidate?=products&secret=12345678
  const secret = request.nextUrl.searchParams.get("secret");

  // secret simpan dalam .env
  if (secret !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json(
      { status: 401, message: "Invalid secret" },
      { status: 401 }
    );
  }

  if (!tag) {
    return NextResponse.json(
      { status: 400, message: "Missing tag param" },
      { status: 401 }
    );
  }

  revalidateTag(tag);

  return NextResponse.json({ revalidate: true, now: Date.now() });
}
