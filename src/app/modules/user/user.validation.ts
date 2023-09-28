import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    // নতুন যুক্ত করা হইল এই লাইন
    user: z.object({
      role: z.string({
        required_error: 'Role is required',
      }),
      password: z.string().optional(),
    }),
  }),
});

export const userValidation = {
  createUserZodSchema,
};
