import express, { Application } from 'express';
import globalErrorHandler from './app/middleweres/globalErrorHandler';
import { userRouter } from './app/modules/user/user.route';
// import ApiError from './errors/ApiError';
const app: Application = express();

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.use('/api/v1/users', userRouter);

// testing
/* app.get('/', (req: Request, res: Response, next: NextFunction) => {
  throw new ApiError(400, 'neo error khaoa shuru');
  next('ore abar error');
}); */

// global error handler
app.use(globalErrorHandler);

export default app;
