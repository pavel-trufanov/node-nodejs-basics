import path from "path";
import {fileSystemError, rootDir} from "../common/properties.js";
import {access, constants, readdir} from "fs";

export const list = async () => {
    const filesDir = path.join(rootDir, 'src', 'fs', 'files');
    access(filesDir, constants.F_OK, (err) => {
        if (err) throw fileSystemError;
        readdir(filesDir, (err, files) => {
            if (err) throw err;
            files.forEach(file => {
                console.log(file);
            });
        });
    });
};
