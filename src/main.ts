import * as web from "./web";
import "reflect-metadata";
import { createConnection } from "typeorm";

async function main() {
    try {
        const connection = await createConnection();
        connection.synchronize(true);
        console.log('\x1b[32m%s\x1b[0m',`connection created`);
        await web.loadServer();
    } catch (error) {
        console.log(error, 'sds');
    }
}

main().catch(error => console.error(error));
