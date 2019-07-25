import { Request, Response } from 'express';
import { Locals } from '../providers/Locals';

class Home {
    static index = (request: Request, response: Response): any => {
        response.json({
            message: Locals.config().NAME
        });
    };
}

export { Home };
