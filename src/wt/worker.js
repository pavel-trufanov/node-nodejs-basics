import {parentPort, workerData, isMainThread} from 'worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

if (!isMainThread) {
    parentPort.on("message", () => {
        workerData.value = nthFibonacci(workerData.num);
        workerData.status = 'resolved';
        sendResult();
    });
    parentPort.on('messageerror', () => {
        workerData.value = null;
        workerData.status = 'error';
        sendResult();
    });
}

export const sendResult = () => {
    parentPort.postMessage({status: workerData.status, data: workerData.value});
};
