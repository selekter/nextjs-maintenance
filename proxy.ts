import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
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
