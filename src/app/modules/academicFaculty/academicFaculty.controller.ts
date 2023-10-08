import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { facultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IAcademicFaculty } from './academicFaculty.interface';

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { ...facultyData } = req.body;
    const result = await facultyService.createFaculty(facultyData);

    sendResponse<IAcademicFaculty | null /* add null type */>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic faculty created successfully',
      data: result,
    });
  },
);

export const facultyController = {
  createAcademicFaculty,
};
