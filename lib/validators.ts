import { z } from "zod";
export const schoolSchema = z.object({
  name: z.string().min(2).max(200),
  address: z.string().min(5).max(500),
  city: z.string().min(2).max(120),
  state: z.string().min(2).max(120),
  contact: z.string().regex(/^\+?[0-9\- ]{7,20}$/i, "Invalid contact number"),
  email_id: z.string().email(),
  image: z.string().optional(),
});
export type SchoolInput = z.infer<typeof schoolSchema>;
