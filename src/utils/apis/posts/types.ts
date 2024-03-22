import * as z from "zod";

export interface DetailPost {
  id: number;
  caption: string;
  picture: string;
  created_at: Date;
  user: {
    user_id: number;
    name: string;
    picture: string;
  };
  comments: {
    post_id: number;
    text: string;
    created_at: string;
    user: {
      user_id: number;
      name: string;
      picture: string;
    };
  }[];
}

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/svg", "image/jpeg", "image/jpg", "image/png"];

export const postPayloadSchema = z.object({
  caption: z.string().min(3, { message: "Minimum 3 character" }).max(280),
  image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".svg .jpg, .jpeg, and .png files are accepted."
    )
    .optional()
    .or(z.literal("")),
});

export type PostPayloadSchema = z.infer<typeof postPayloadSchema>;
