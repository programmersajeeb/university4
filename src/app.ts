import express, { Application, Request, Response } from 'express';
import router from './app/modules/user/user.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.use('/api/v1/users', router);

// testing
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
