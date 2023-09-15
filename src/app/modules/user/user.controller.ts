import { NextFunction, Request, Response } from 'express';
import userService from './user.service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req.body;
    const result = await userService.createUser(user);
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    res.status(200).json({ errorrrrrr: error });
    next();
  }
};

export default {
  createUser,
};
