import express from 'express';
import validateRequest from '../../middleweres/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';
import { academicSemesterController } from './academicSemester.controller';
const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  academicSemesterController.createSemester,
);

export const academicSemesterRoutes = router;
