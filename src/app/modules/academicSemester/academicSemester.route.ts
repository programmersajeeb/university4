import express from 'express';
import validateRequest from '../../middleweres/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';
const router = express.Router();

router.post(
  'create-semester',
  validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
);
