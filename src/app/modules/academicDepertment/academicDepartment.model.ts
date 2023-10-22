import { Schema, model } from 'mongoose';
import {
  AcademicDepertmentModel,
  IAcademicDepertment,
} from './academicDepartment.interface';

const academicDepertmentSchema = new Schema<
  IAcademicDepertment,
  AcademicDepertmentModel
>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const AcademicDepertment = model<
  IAcademicDepertment,
  AcademicDepertmentModel
>('AcademicDepertment', academicDepertmentSchema);
