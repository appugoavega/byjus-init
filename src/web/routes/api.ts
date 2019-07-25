import { Request, Response } from "express";
import { Router } from 'express';
import { Home } from '../controllers/home-controller';

const apiRouter = Router();

apiRouter.get('/test', (request: Request, response: Response) => {
    response.json({ key: 'value test' });
});

apiRouter.get('/Home', Home.index);

export { apiRouter };
