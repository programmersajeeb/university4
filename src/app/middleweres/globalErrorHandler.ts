import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next();
};

export default globalErrorHandler;
