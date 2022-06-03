import { appendFile } from 'node:fs';
import { access, constants } from 'fs';
import * as path from 'path';
import {fileSystemError, rootDir} from "../common/properties.js";

export const create = async () => {
    const filePath = path.join(rootDir, 'src', 'fs', 'files', 'fresh.txt');
    access(filePath, constants.F_OK, (err) => {
        if (err) {
            appendFile(filePath, 'I am fresh and young', (err) => {
                if (err) throw err;
            });
        } else {
            throw fileSystemError;
        }
    });
};
