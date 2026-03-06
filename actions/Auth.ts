// "use server";

// import { signIn } from "@/auth";

// export async function authenticate(formData: FormData) {
//   const data = Object.fromEntries(formData);
//   try {
//     await signIn("credentials", {
//       ...data,
//       redirect: true,
//       callbackUrl: "/dashboard",
//     });
//   } catch (error: any) {
//     return "อีเมลหรือรหัสผ่านไม่ถูกต้อง";
//   }
// }
