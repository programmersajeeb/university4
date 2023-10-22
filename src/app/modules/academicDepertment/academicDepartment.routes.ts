import express from 'express';
import validateRequest from '../../middleweres/validateRequest';
import { academicDepartmentvalidation } from './academicDepartment.validation';
import { departmentController } from './academicDepartment.controller';
const router = express.Router();

router.post(
  '/create-depertment',
  validateRequest(academicDepartmentvalidation.creatDepartmentZodSchema),
  departmentController.createAcademicDepartment,
);

router.get('/:id', departmentController.getSingleDepartment);
router.delete('/:id', departmentController.deleteDepartment);
router.patch(
  '/:id',
  validateRequest(academicDepartmentvalidation.updateDepartmentZodSchema),
  departmentController.updateDepartment,
);
router.get('/', departmentController.getAllDepartment);

export const academicDepartmentRoutes = router;
