import { readFileSync } from 'fs';
import path from 'path';

const convert = (filepath) => {
    const absolutePath = path.resolve(filepath);
    const fileData = readFileSync(absolutePath, 'utf8');
    return JSON.parse(fileData);
};

export default convert;