import os from 'os';
import {Worker} from 'worker_threads';
import path from "path";
import {rootDir} from "../common/properties.js";

export const performCalculations = async () => {
    const workerScriptPath = path.join(rootDir, 'src', 'wt', 'worker.js');
    let number = 10;

    const numOfThreads = os.cpus().length;
    const promises = [];
    for (let i = 0; i < numOfThreads; i++) {
        promises.push(new Promise(function(resolve, reject) {
            const worker = new Worker(workerScriptPath, {workerData: {num: number++}});
            worker.postMessage("calculateResult");
            worker.once("message", result => {
                resolve(result);
            });
        }));
    }

    Promise.all(promises)
        .then(function(data) {
            console.log(data);
            process.exit();
        })
        .catch(function(error) {
            throw error;
        });
};
