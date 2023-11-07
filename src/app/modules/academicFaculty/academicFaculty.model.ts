import { Schema, model } from 'mongoose';
import { FacultyModel, IAcademicFaculty } from './academicFaculty.interface';

const facultySchema = new Schema<IAcademicFaculty, FacultyModel>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      // add unique option
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicFaculty = model<IAcademicFaculty, FacultyModel>(
  'academicFaculty',
  facultySchema,
);
