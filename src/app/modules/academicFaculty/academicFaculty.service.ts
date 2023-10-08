import { IAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createFaculty = async (
  payload: IAcademicFaculty,
): Promise<IAcademicFaculty | null> /* add null type */ => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

export const facultyService = {
  createFaculty,
};
