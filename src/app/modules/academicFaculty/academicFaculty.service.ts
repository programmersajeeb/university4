import { SortOrder } from 'mongoose';
import { paginationHelper } from '../../../helpers/paginationHelpers';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import {
  IAcademicFaculty,
  IAcademicFacultyFilters,
} from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';
import { facultySearchableField } from './academicFaculty.constant';

const createFaculty = async (
  payload: IAcademicFaculty,
): Promise<IAcademicFaculty | null> /* add null type */ => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllfaculty = async (
  filters: IAcademicFacultyFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<IAcademicFaculty[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculateHelper(paginationOptions);

  const sortCondition: { [key: string]: SortOrder } = {};
  /* this is call map typing */

  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  // const whereCondition =
  const { searchTerm, ...filterData } = filters;
  console.log(searchTerm);

  const andCondition = [];

  // partial search condition
  if (searchTerm) {
    andCondition.push({
      $or: facultySearchableField.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  // filter search condition
  if (Object.keys(filterData).length) {
    andCondition.push({
      $and: Object.entries(filterData).map(([keys, value]) => ({
        [keys]: value,
      })),
    });
  }

  /*  const andCondition = [
    {
      $or: [
        {
          title: {
            $regex: searchTerm,
            $options: 'i',
          },
        },
      ],
    },
  ]; */
  const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {};

  const result = await AcademicFaculty.find(whereCondition)
    .sort(sortCondition)
    .limit(limit)
    .skip(skip);
  const total = await AcademicFaculty.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleFaculty = async (
  id: string,
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

const updateFaculty = async (id: string, data: Partial<IAcademicFaculty>) => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};

const deleteFaculty = async (id: string) => {
  const result = await AcademicFaculty.findByIdAndDelete(id);
  return result;
};

export const facultyService = {
  createFaculty,
  getAllfaculty,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
};
