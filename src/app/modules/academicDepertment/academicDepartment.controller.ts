import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { departmentService } from './academicDepartment.service';
import { IAcademicDepertment } from './academicDepartment.interface';

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { ...departmentData } = req.body;
    const result = await departmentService.createDepartment(departmentData);

    sendResponse<IAcademicDepertment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic department is created successfully',
      data: result,
    });
  },
);

const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await departmentService.getSingleDepartment(id);

  sendResponse<IAcademicDepertment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single academic department retrive',
    data: result,
  });
});

const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await departmentService.deleteDepartment(id);

  sendResponse<IAcademicDepertment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete academic department',
    data: result,
  });
});

const updateDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;

  const result = await departmentService.updateDepartment(id, updatedData);

  sendResponse<IAcademicDepertment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic department updated successfully',
    data: result,
  });
});

export const departmentController = {
  createAcademicDepartment,
  getSingleDepartment,
  deleteDepartment,
  updateDepartment,
};
