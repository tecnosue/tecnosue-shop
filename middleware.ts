import { NextRequest, NextResponse } from "next/server";

import * as jose from "jose";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/checkout")) {
    const token = req.cookies.get("token");

    try {
      await jose.jwtVerify(
        token?.value || "",
        new TextEncoder().encode(process.env.JWT_SECRET_SEED || "")
      );
      return NextResponse.next();
    } catch (error) {
      console.error(`JWT Invalid or not signed in`, { error });
      const { protocol, host, pathname } = req.nextUrl;
      return NextResponse.redirect(
        `${protocol}//${host}/auth/login?previousPath=${pathname}`
      );
    }
  }
}

export const config = {
  matcher: ["/checkout/:path*"],
};
