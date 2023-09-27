import express from 'express';
import { userRouter } from '../modules/user/user.route';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
const router = express.Router();

const moduleRoute = [
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/academic-semester',
    route: academicSemesterRoutes,
  },
];

moduleRoute.forEach(route => router.use(route.path, route.route));

// router.use('/users', userRouter);
// router.use('/academic-semester', academicSemesterRoutes);
export default router;
