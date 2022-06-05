import path from "path";
import {rootDir} from "../common/properties.js";
import {createGunzip} from "zlib";
import {createReadStream, createWriteStream} from "fs";
import {pipeline} from "stream";

export const decompress = async () => {
    const decompressedFile = path.join(rootDir, 'src', 'zip', 'files', 'fileToCompress.txt');
    const archiveFile = path.join(rootDir, 'src', 'zip', 'files', 'archive.gz');

    const gunzip = createGunzip();
    const readStream = createReadStream(archiveFile);
    const writeStream = createWriteStream(decompressedFile);
    pipeline(readStream, gunzip, writeStream, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};
