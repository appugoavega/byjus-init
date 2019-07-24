import { Request, Response} from "express";
import { Router } from 'express';
import HomeController from '../controllers/HomeController';

const router = Router();

router.get("/test", (request: Request, response: Response) => {
    response.json({key: 'value test'});
});

router.get('/Home', HomeController.index);

export default router;