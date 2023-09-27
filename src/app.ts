import express, { Application } from 'express';
import globalErrorHandler from './app/middleweres/globalErrorHandler';
import router from './app/router';
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

export default app;
