import { IAcademicDepertment } from './academicDepartment.interface';
import { AcademicDepertment } from './academicDepartment.model';

const createDepartment = async (
  payload: IAcademicDepertment,
): Promise<IAcademicDepertment | null> => {
  const result = await AcademicDepertment.create(payload);
  return result;
};

const getSingleDepartment = async (
  id: string,
): Promise<IAcademicDepertment | null> => {
  const result = await AcademicDepertment.findById(id);
  return result;
};

const deleteDepartment = async (
  id: string,
): Promise<IAcademicDepertment | null> => {
  const result = await AcademicDepertment.findByIdAndDelete(id);
  return result;
};

const updateDepartment = async (
  id: string,
  payload: Partial<IAcademicDepertment>,
): Promise<IAcademicDepertment | null> => {
  const result = await AcademicDepertment.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const departmentService = {
  createDepartment,
  getSingleDepartment,
  deleteDepartment,
  updateDepartment,
};
