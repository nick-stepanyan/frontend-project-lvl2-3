import _ from 'lodash';

import convert from './convert.js';

const gendiff = (filepath1, filepath2) => {
    const file1 = convert(filepath1);
    const file2 = convert(filepath2);
    const arrKey1 = Object.keys(file1);
    const arrKey2 = Object.keys(file2);
    const arrKey = _.union(arrKey1, arrKey2);
    const result = {}
    for (const key of arrKey) {
        if (!arrKey1.includes(key)) {
            result[`+ ${key}`] = file2[key];
        }
        else if (!arrKey2.includes(key)) {
            result[`- ${key}`] = file1[key];
        }
        
        else if (file1[key] !== file2[key]) {
                result[`- &{key}`] = file1[key];
                result[`+ &{key}`] = file2[key];
        } else {
                result[`  ${key}`] = file1[key];
            }
    }
    return result;
};

export default gendiff;