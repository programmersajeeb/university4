import ApiError from '../../../errors/ApiError';
import { academicSemesterCodeMapper } from './academicSemester.const';
import { IAcademicSemester } from './academicSemester.interface';
import { academicSemester } from './academicSemester.model';
import httpStatus from 'http-status';

const createSemester = async (
  payload: IAcademicSemester,
): Promise<IAcademicSemester> => {
  // code and title check
  if (academicSemesterCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code');
  }
  // মডেল কে কল দিতে হবে ডাটাবেজ একশন ঘটানোর জন্য
  const result = await academicSemester.create(payload);
  return result;
};

export const academicSemesterService = {
  createSemester,
};
