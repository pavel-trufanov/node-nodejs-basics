import path from "path";
import {rootDir} from "../common/properties.js";
import {readFile} from 'fs';

const {
    createHash
} = await import('crypto');

export const calculateHash = async () => {
    const fileToProcess = path.join(rootDir, 'src', 'hash', 'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    readFile(fileToProcess, 'utf8', (err, data) => {
        hash.update(data);
        console.log(`${hash.digest('hex')}`);
    });
};
