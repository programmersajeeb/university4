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
router.get('/:id', facultyController.getSingleFaculty);
router.patch(
  '/:id',
  validateRequest(academicFacultyValidation.academicFacultyUpdateSchema),
  facultyController.updateFaculty,
);
router.delete('/:id', facultyController.deleteFaculty);
router.get('/', facultyController.getAllfaculty);

export const academicFacultyRoutes = router;
