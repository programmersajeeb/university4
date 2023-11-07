import { SortOrder } from 'mongoose';
import { paginationHelper } from '../../../helpers/paginationHelpers';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { departmentSearchableField } from './academicDepartment.constant';
import {
  IAcademicDepertment,
  IAcademicDepertmentFilter,
} from './academicDepartment.interface';
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

const getAllDepartment = async (
  filters: IAcademicDepertmentFilter,
  pagination: IPaginationOptions,
) => {
  const { page, limit, skip, sortOrder, sortBy } =
    paginationHelper.calculateHelper(pagination);

  const { searchTerm, ...filterData } = filters;
  const andCondition = [];
  if (searchTerm) {
    andCondition.push({
      $or: departmentSearchableField.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filterData).length) {
    andCondition.push({
      $and: Object.entries(filterData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortCondition: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {};

  const result = await AcademicDepertment.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit);

  const total = await AcademicDepertment.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const departmentService = {
  createDepartment,
  getSingleDepartment,
  deleteDepartment,
  updateDepartment,
  getAllDepartment,
};
