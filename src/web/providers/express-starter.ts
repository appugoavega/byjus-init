import * as bodyParser from 'body-parser';
import express from 'express';
import { Locals } from './locals';
import { Routes } from './routes';

class ExpressStarter {
    /**
     * Create the express object
     */

    express: express.Application;

    /**
     * Initializes the express server
     */
    constructor() {
        this.express = express();
        this.express.use(bodyParser.json());
        this.mountRoutes();
    }

    /**
     * Starts the express server
     */
    init(): void {
        const port: number = Locals.config().PORT;

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

    /**
     * Mounts all the defined routes
     */
    private mountRoutes(): void {
        this.express = Routes.mountApi(this.express);
    }
}

/** Export the express module */
const expressStarter = new ExpressStarter();
export { expressStarter };
