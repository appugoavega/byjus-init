import Express from './providers/Express';

// Start function
export const loadServer = (): void => {
    Express.init();
};
