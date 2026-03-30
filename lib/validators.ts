import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string({ message: 'Please enter your full name' }).trim(),
  email: z.email({ pattern: z.regexes.rfc5322Email, message: 'Please enter a valid email address' }).trim(),
  subject: z.string({ message: 'Please enter the subject of your email' }).trim(),
  message: z.string({ message: 'Please enter your message' }).trim(),
});

export type FormState =
  | { errors?: { name?: string[]; email?: string[], subject?: string[], message?: string[] }; message?: string }
  | undefined;