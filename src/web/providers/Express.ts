import express from 'express';
import Routes from './Routes';
import Locals from './Locals';

class Express {
	/**
	 * Create the express object
	 */
	public express: express.Application;

	/**
	 * Initializes the express server
	 */
	constructor () {
		this.express = express();

		// this.mountDotEnv();
		this.mountRoutes();
	}

	/**
	 * Mounts all the defined routes
	 */
	private mountRoutes (): void {
		this.express = Routes.mountApi(this.express);
	}

	/**
	 * Starts the express server
	 */
	public init (): void {
		const port: number = Locals.config().port;

		// Start the server on the specified port
		this.express.listen(port, (_error: any) => {
			if (_error) {
				console.log('Error: ', _error);
				return;
			}
			console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
			
			return;
		});
	}
}

/** Export the express module */
export default new Express();
