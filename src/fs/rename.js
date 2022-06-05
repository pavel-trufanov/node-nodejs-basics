import {access, constants, rename as fileRename} from 'fs';
import path from "path";
import {fileSystemError, rootDir} from "../common/properties.js";

export const rename = async () => {
    const fileToRename = path.join(rootDir, 'src', 'fs', 'files', 'wrongFilename.txt');
    const newFile = path.join(rootDir, 'src', 'fs', 'files', 'properFileName.md');
    access(fileToRename, constants.F_OK, (err) => {
        if (err) throw fileSystemError;
        access(newFile, constants.F_OK, (err) => {
            if (err) {
                fileRename(fileToRename, newFile, (err) => {
                    if (err) throw err;
                });
            } else {
                throw fileSystemError;
            }
        });
    });
};
