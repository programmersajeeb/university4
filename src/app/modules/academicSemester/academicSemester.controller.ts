import { NextFunction, Request, Response } from 'express';
import { academicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IAcademicSemester } from './academicSemester.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/paginationFields';
import { filterableField } from './academicSemester.const';

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body;
  const result =
    await academicSemesterService.createSemester(academicSemesterData);

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is created successfully',
    data: result,
  });
  // এখান থেকে সরিয়ে ফেলা হয়েছে  এরর আসছিল জন্যে
  // next();
});

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, filterableField);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await academicSemesterService.getAllSemesters(
      filters,
      paginationOptions,
    );

    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semesters retrive !',
      meta: result.meta,
      data: result.data,
    });
    next();
  },
);

const getSingleSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await academicSemesterService.getSingleSemester(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester retrive !',
      data: result,
    });
    next();
  },
);

const updateSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const updatedData = req.body;

    const result = await academicSemesterService.updateSemester(
      id,
      updatedData,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester retrive hoyeo holo na !',
      data: result,
    });
    next();
  },
);

export const academicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
};
