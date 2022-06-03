import { unlink } from 'fs';
import path from "path";
import {fileSystemError, rootDir} from "../common/properties.js";

export const remove = async () => {
    const fileToRemove = path.join(rootDir, 'src', 'fs', 'files', 'fileToRemove.txt');
    unlink(fileToRemove, (err) => {
        if (err) throw fileSystemError;
    });
};
