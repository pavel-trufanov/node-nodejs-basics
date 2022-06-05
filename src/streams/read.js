import path from "path";
import {rootDir} from "../common/properties.js";
import { createReadStream } from 'fs';

export const read = async () => {
    const fileToRead = path.join(rootDir, 'src', 'streams', 'files', 'fileToRead.txt');
    const readStream = createReadStream(fileToRead);
    readStream.on('readable', () => {
        let dataChunk = readStream.read();
        while (dataChunk) {
            process.stdout.write(dataChunk);
            dataChunk = readStream.read();
        }
    });
};
