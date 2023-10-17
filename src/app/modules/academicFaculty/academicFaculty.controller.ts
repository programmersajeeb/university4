import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { facultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IAcademicFaculty } from './academicFaculty.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/paginationFields';
import { facultyFilterableField } from './academicFaculty.constant';

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { ...facultyData } = req.body;
    const result = await facultyService.createFaculty(facultyData);

    sendResponse<IAcademicFaculty>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty created successfully',
      data: result,
    });
  },
);

const getAllfaculty = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.body, facultyFilterableField);
  console.log('khoja shuru sarchterm', filters);
  const paginationOptions = pick(req.query, paginationFields);

  const results = await facultyService.getAllfaculty(
    filters,
    paginationOptions,
  );

  sendResponse<IAcademicFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty retrive successfully !',
    meta: results.meta,
    data: results.data,
  });
});

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await facultyService.getSingleFaculty(id);

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get single faculty data',
    data: result,
  });
});

const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await facultyService.updateFaculty(id, updatedData);

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty updated successfully',
    data: result,
  });
});

const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = facultyService.deleteFaculty(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty deleted successfully',
    data: result,
  });
});

export const facultyController = {
  createAcademicFaculty,
  getAllfaculty,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
};
