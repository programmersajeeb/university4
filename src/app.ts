import express, { Application, NextFunction, Request, Response } from 'express';
import globalErrorHandler from './app/middleweres/globalErrorHandler';
import router from './app/router';
import httpStatus from 'http-status';
// import ApiError from './errors/ApiError';
const app: Application = express();

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.use('/api/v1', router);

// testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('testing error logger');
// });

// global error handler
app.use(globalErrorHandler);

// handle not fount route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'Api route not found',
      },
    ],
  });
  next();
});

export default app;
