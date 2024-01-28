import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.redirect(new URL("/", request.url)); // bila request/buka url cth '/about' kita terus redirect ke url '/'
  }
}

// redirect or rewrite
