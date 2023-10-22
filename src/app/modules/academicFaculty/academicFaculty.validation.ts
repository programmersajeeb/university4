import { z } from 'zod';

const academicFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
  }),
});

const academicFacultyUpdateSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
  }),
});

export const academicFacultyValidation = {
  academicFacultyZodSchema,
  academicFacultyUpdateSchema,
};
