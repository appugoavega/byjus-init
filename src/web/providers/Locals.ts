/**
 * Define App Locals & Configs
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import { Application } from 'express';
import * as path from 'path';
import dotenv from 'dotenv';

class Locals {
	/**
	 * Makes env configs available for your app
	 * throughout the app's runtime
	 */
	public static config(): any {
		dotenv.config({ path: path.join(__dirname, '../../../.env') });

		const port = process.env.PORT || 4040;
		const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
		const appSecret = process.env.APP_SECRET || 'This is your responsibility!';
		const name = process.env.APP_NAME || 'NodeTS Dashboard';
		const isCORSEnabled = process.env.CORS_ENABLED || true;
		const jwtExpiresIn = process.env.JWT_EXPIRES_IN || 3;
		const apiPrefix = process.env.API_PREFIX || 'api';

		return {
			appSecret,
			apiPrefix,
			isCORSEnabled,
			jwtExpiresIn,
			name,
			port,
			url
		};
	}

	/**
	 * Injects your config to the app's locals
	 */
	public static init (_express: Application): Application {
		_express.locals.app = this.config();
		return _express;
	}
}

export default Locals;