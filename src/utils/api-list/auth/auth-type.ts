import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
  password: z.string().min(6, { message: "Password is required" }),
});

export const registerSchema = z
  .object({
    name: z.string().min(1, { message: "Full name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Not a valid email"),
    password: z.string().min(6, { message: "Password is required" }),
    repassword: z.string().min(6, { message: "Password is required" }), // Untuk memeriksa password yang dimasukkan sudah benar atau belum
    date_of_birth: z.date({ required_error: "Date of Birth is Required" }),
    gender: z.string().min(1, { message: "Gender is required" }),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Your password doesn't match",
    path: ["repassword"],
  });

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
