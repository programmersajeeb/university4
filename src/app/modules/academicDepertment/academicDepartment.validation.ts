import { z } from 'zod';

const creatDepartmentZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    academicFaculty: z.string({
      required_error: 'Academic faculty is required',
    }),
  }),
});

const updateDepartmentZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    academicFaculty: z.string().optional(),
  }),
});

export const academicDepartmentvalidation = {
  creatDepartmentZodSchema,
  updateDepartmentZodSchema,
};
