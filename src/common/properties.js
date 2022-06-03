import {dirname} from 'path';
import {fileURLToPath} from "url";

export const rootDir = dirname(dirname(dirname(fileURLToPath(import.meta.url))));
export const fileSystemError = Error('FS operation failed');
