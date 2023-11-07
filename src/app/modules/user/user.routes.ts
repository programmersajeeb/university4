import express from 'express';
import { userController } from './user.controller';
import { userValidation } from './user.validation';
import validateRequest from '../../middleweres/validateRequest';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(userValidation.createUserZodSchema),
  userController.createStudent,
);

export const userRouter = router;
