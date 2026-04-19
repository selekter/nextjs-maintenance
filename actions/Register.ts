"use server";

import { prisma } from "@/libs/prisma";
import bcrypt from "bcryptjs";
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

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { errors: z.flattenError(validatedFields.error).fieldErrors };
  }

  const { email, name, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await prisma.users.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "Email นี้ถูกใช้งานแล้ว" };
  }

  await prisma.users.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  redirect("/login");
};
