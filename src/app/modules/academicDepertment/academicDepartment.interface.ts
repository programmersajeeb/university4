import { Model, Types } from 'mongoose';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';

export type IAcademicDepertment = {
  title: string;
  academicFaculty: Types.ObjectId | IAcademicFaculty;
};

export type AcademicDepertmentModel = Model<
  IAcademicDepertment,
  Record<string, unknown>
>;

export type IAcademicDepertmentFilter = {
  searchTerm?: string;
  academicFaculty?: Types.ObjectId;
};
