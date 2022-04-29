import _ from 'lodash';

import convert from './convert.js';

const gendiff = (filepath1, filepath2) => {
    const file1 = convert(filepath1);
    const file2 = convert(filepath2);
    const arrKey1 = Object.keys(file1);
    const arrKey2 = Object.keys(file2);
    const arrKey = _.union(arrKey1, arrKey2).sort();
    let resultString = '';
    for (const key of arrKey) {
        if (!arrKey1.includes(key)) {
            resultString += (`  + ${key}: ${file2[key]},`);
        }
        else if (!arrKey2.includes(key)) {
            resultString += (`  - ${key}: ${file1[key]},`);
        }
        
        else if (file1[key] !== file2[key]) {
            resultString += (`  - ${key}: ${file1[key]},  + ${key}: ${file2[key]},`);
           // result.push(`  + ${key}: ${file2[key]}`);
        } else {
            resultString += (`    ${key}: ${file1[key]},`);
            }
    }
     const resultArr = resultString.split(',')
     const result = resultArr.join('\n');
    return `{\n${result}}`;
};

export default gendiff;