// auth.ts
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "./libs/db"; // ดึงการเชื่อมต่อ DB ของคุณมา
import NextAuth from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // 1. หา User จาก Email ใน DB
        const [rows]: any = await db.execute(
          "SELECT * FROM users WHERE email = ?",
          [credentials.email],
        );
        const user = rows[0];

        if (!user) return null;

        // 2. ตรวจสอบรหัสผ่านที่เข้ารหัสไว้
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password as string,
          user.password,
        );

        if (isPasswordCorrect) {
          return { id: user.id, name: user.name, email: user.email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // กำหนดหน้า Login ของเราเอง
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = Number(user.id);
      }

      console.log("TOKEN", token);

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as number;
      }

      console.log("SESSION TOEKN", token);

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
};
