
import { expressStarter } from './providers/express-starter';

// Start function
export const loadServer = (): void => {
    expressStarter.init();
};
