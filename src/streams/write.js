import path from "path";
import {rootDir} from "../common/properties.js";
import { createWriteStream } from 'fs';

export const write = async () => {
    const fileToWrite = path.join(rootDir, 'src', 'streams', 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(fileToWrite);
    process.stdin.on('data', (input) => {
        writeStream.write(input, 'utf-8');
    });
};
