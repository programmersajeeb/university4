import { Schema, model } from 'mongoose';
import {
  IAcademicSemester,
  academicSemesterModel,
} from './academicSemester.interface';

const AcademicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
    },
    endMonth: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const academicSemester = model<IAcademicSemester, academicSemesterModel>(
  'academicSemester',
  AcademicSemesterSchema,
);
