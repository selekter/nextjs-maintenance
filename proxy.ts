import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  // 1. ดึง Token มาเช็ค (ต้องใช้ await เพราะเป็น Async)
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  // 2. ถ้ามี Token แล้ว (Login แล้ว) แต่พยายามเข้าหน้า Login อีก ให้เด้งไป Dashboard (Optional)
  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // 3. ถ้าไม่มี Token และพยายามเข้าหน้าที่มีการป้องกัน (Matcher กรองมาแล้ว)
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/trucks/create/:path*",
    "/dashboard/drivers/create/:path*",
    "/dashboard/reports/:id/edit/:path*",
    "/dashboard/reports/create/:path*",
  ],
};
