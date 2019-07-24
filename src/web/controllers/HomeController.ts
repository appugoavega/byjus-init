import Locals from '../providers/Locals';
import { Request, Response } from 'express';

class Home {
    public static index = (request: Request, response: Response): any => {
        response.json({
            message: Locals.config().name
        });
    }
}

export default Home;