// import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/login"];
const publicRoutes = [...authRoutes];

export default async function middleware(req: NextRequest) {
  const token = cookies().get("session")?.value ?? null;

  const path = req.nextUrl.pathname;
  const isProtectedRoute = !publicRoutes.includes(path.toLowerCase());
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  const isAuthRoute = authRoutes.includes(path);
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
