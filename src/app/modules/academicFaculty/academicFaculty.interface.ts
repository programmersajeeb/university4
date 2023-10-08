import { Model } from 'mongoose';

export type IAcademicFaculty = {
  title: string;
};

export type FacultyModel = Model<IAcademicFaculty, Record<string, unknown>>;
// number changed by unknown
