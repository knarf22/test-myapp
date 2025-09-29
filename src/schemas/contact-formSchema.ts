import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(6, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  message: z.string().min(1, "Message is required"),
});

export type FormDataProps = z.infer<typeof contactFormSchema>;
