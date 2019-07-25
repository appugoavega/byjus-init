// tslint:disable-next-line: no-import-side-effect
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as web from './web';

const init = async (): Promise<void> =>
    new Promise(async (resolve, reject) => {
        try {
            await createConnection();
            console.log('\x1b[32m%s\x1b[0m', 'connection created');
            web.loadServer();
            resolve();
        } catch (error) {
            console.log(error);
            reject(error);
        }

    });

void init();
