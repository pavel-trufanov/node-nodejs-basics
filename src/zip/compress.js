import { createGzip }  from 'zlib';
import { pipeline } from 'stream';
import {createReadStream, createWriteStream} from 'fs';
import path from "path";
import {rootDir} from "../common/properties.js";

export const compress = async () => {
    const fileToCompress = path.join(rootDir, 'src', 'zip', 'files', 'fileToCompress.txt');
    const archiveFile = path.join(rootDir, 'src', 'zip', 'files', 'archive.gz');

    const gzip = createGzip();
    const readStream = createReadStream(fileToCompress);
    const writeStream = createWriteStream(archiveFile);
    pipeline(readStream, gzip, writeStream, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};
