import dotenv from 'dotenv';
import { Application } from 'express';
import * as path from 'path';

class Locals {
    /**
     * Makes env configs available for your app
     * throughout the app's runtime
     */
    static config(): any {
        dotenv.config({ path: path.join(__dirname, '../../../.env') });

        const PORT = process.env.PORT || 4040;
        const URL = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
        const JWT_SECRET = process.env.JWT_SECRET || 'This is your responsibility!';
        const NAME = process.env.APP_NAME;
        const IS_CORS_ENABLED = process.env.CORS_ENABLED || true;
        const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
        const API_PREFIX = process.env.API_PREFIX || 'api';

        return {
            JWT_SECRET,
            API_PREFIX,
            IS_CORS_ENABLED,
            JWT_EXPIRES_IN,
            NAME,
            PORT,
            URL
        };
    }

    /**
     * Injects your config to the app's locals
     */
    static init(_express: Application): Application {
        _express.locals.app = this.config();

        return _express;
    }
}

export { Locals };