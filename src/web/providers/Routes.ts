import { Application } from 'express';
import Locals from './Locals';
import apiRouter from '../routes/Api';

class Routes {
	public mountApi(_express: Application): Application {
		const apiPrefix = Locals.config().apiPrefix;

		return _express.use(`/${apiPrefix}`, apiRouter);
	}
}

export default new Routes;