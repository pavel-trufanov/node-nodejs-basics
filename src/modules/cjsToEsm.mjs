import path from "path";
import {fileURLToPath} from 'url';
import { release, version } from 'os';
import http from 'http';
const { createServer: createServerHttp } = http;
import('./files/c.js');
import a from './files/a.json' assert {type: 'json'};
import b from './files/b.json' assert {type: 'json'};

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.resolve()}`);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

