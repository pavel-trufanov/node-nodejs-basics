export const parseArgs = () => {
    const propPrefix = '--';
    const result = [];
    process.argv.forEach(function (key, i) {
        if (key.startsWith(propPrefix)) {
            const propName = key.substring(propPrefix.length);
            const nextArg = process.argv[i + 1];
            let value;
            if (nextArg && !nextArg.startsWith(propPrefix)) {
                value = nextArg;
            }
            result.push(`${propName} is ${value}`);
        }
    });
    if (result.length > 0) {
        console.log(result.join(', '));
    }
};
