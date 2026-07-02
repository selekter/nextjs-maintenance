"use server";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import z from "zod";

const RegisterSchema = z
  .object({
    email: z.email(),
    name: z.string(),
    password: z.string().min(6),
    confirmPassword: z.string().min(1, { message: "กรุณายืนยันรหัสผ่าน" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "รหัสผ่านไม่ตรงกัน",
    path: ["confirmPassword"],
  });

export async function Register(prevState: any, formData: FormData) {
  const values = Object.fromEntries(formData);
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { errors: z.flattenError(validatedFields.error).fieldErrors };
  }

  const { email, name, password } = validatedFields.data;

  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });
  } catch (error: any) {
    return {
      error: error.message || "เกิดข้อผิดพลาดในการสมัครสมาชิก",
    };
  }
  redirect("/login");
}
