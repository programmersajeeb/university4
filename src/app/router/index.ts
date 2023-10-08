import express from 'express';
import { userRouter } from '../modules/user/user.route';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
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
  {
    path: '/academic-faculty',
    route: academicFacultyRoutes,
  },
];

moduleRoute.forEach(route => router.use(route.path, route.route));

export default router;
