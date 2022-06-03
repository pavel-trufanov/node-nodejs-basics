
export const parseEnv = () => {
    const result = [];
    for (const key in process.env) {
        if (key.startsWith('RSS_')) {
            result.push(`${key}=${process.env[key]}`);
        }
    }
    if (result.length > 0) {
        console.log(result.join('; '));
    }
};
