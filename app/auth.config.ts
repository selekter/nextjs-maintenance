import type { NextAuthOptions } from "next-auth";
import { db } from "@/libs/db";

export const authConfig: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      // ✅ ตรวจสอบว่า user มีข้อมูล
      if (!user?.email) {
        return false;
      }

      // ✅ ตรวจสอบว่า user มีอยู่ใน database
      try {
        const [rows]: any = await db.execute(
          "SELECT id, email, name FROM users WHERE email = ? LIMIT 1",
          [user.email]
        );
        
        if (!rows || rows.length === 0) {
          return false; // ไม่พบ user ในระบบ
        }

        return true; // user ถูกต้อง
      } catch (error) {
        console.error("SignIn error:", error);
        return false;
      }
    },
  },
  providers: [],
};
