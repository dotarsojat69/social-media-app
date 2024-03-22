import * as z from "zod";

export interface User {
  user_id: number;
  nama: string;
  email: string;
  password: string;
  tgl_lahir: Date;
  gender: string;
  picture: string;
  create_at: Date;
  posts: {
    post_id: number;
    caption: string;
    picture: string;
    created_at: Date;
    comments: number;
  }[];
}

export interface UserPosts {
  post_id: number;
  caption: string;
  picture: string;
  created_at: Date;
  comments: number;
}

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/svg", "image/jpeg", "image/jpg", "image/png"];

export const updateUserSchema = z.object({
  name: z.string().min(1, { message: "Full name is required" }).max(50),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email"),
  password: z.string(),
  image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".svg, .jpg, .jpeg, and .png files are accepted."
    )
    .optional()
    .or(z.literal("")),
});

export type UpdateUserSchema = z.infer<typeof updateUserSchema>;