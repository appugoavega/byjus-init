import { Application } from 'express';
import { apiRouter } from '../routes/api';
import { Locals } from './Locals';

class Routes {
    static mountApi(_express: Application): Application {
        const apiPrefix = Locals.config().apiPrefix;

        return _express.use(`/${apiPrefix}`, apiRouter);
    }
}

export { Routes };
