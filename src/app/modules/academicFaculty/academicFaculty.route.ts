import express from 'express';
import { facultyController } from './academicFaculty.controller';
import { academicFacultyValidation } from './academicFaculty.validation';
import validateRequest from '../../middleweres/validateRequest';
const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(academicFacultyValidation.academicFacultyZodSchema),
  facultyController.createAcademicFaculty,
);

export const academicFacultyRoutes = router;
