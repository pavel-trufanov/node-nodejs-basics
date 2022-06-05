import path from "path";
import {fileSystemError, rootDir} from "../common/properties.js";
import {readFile} from 'fs';

export const read = async () => {
    const fileToRead = path.join(rootDir, 'src', 'fs', 'files', 'fileToRead.txt');
    readFile(fileToRead, 'utf8', (err, data) => {
        if (err) throw fileSystemError;
        console.log(data);
    });
};
