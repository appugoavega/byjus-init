import * as web from "./web";

async function main() {
    await web.loadServer();
}

main().catch(error => console.error(error));