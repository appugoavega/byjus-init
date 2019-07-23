import Locals from '../providers/Locals';
import { Request, Response, NextFunction } from 'express';

class Home {
	public static index(request: Request, response: Response, next: NextFunction): any {
		response.json({
			message: Locals.config().name
        });
        console.log('Home controller',request);
	}
}

export default Home;