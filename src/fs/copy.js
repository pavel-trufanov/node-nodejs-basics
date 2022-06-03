import {cp, constants, access} from 'fs';
import * as path from 'path';
import {fileSystemError, rootDir} from "../common/properties.js";

export const copy = async () => {
    const srcPath = path.join(rootDir, 'src', 'fs', 'files');
    const destPath = path.join(rootDir, 'src', 'fs', 'files_copy');
    access(srcPath, constants.F_OK, (err) => {
        if (err) {
            throw fileSystemError;
        }
        cp(srcPath, destPath, {errorOnExist: true, recursive: true, force: false}, (err) => {
            if (err) throw fileSystemError;
        });
    });
};
