import { IAcademicSemester } from './academicSemester.interface';
import { academicSemester } from './academicSemester.model';

const createSemester = async (
  payload: IAcademicSemester,
): Promise<IAcademicSemester> => {
  // মডেল কে কল দিতে হবে ডাটাবেজ একশন ঘটানোর জন্য
  const result = await academicSemester.create(payload);
  return result;
};

export const academicSemesterService = {
  createSemester,
};
