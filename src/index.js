import { readFileSync } from 'fs';
import path from 'path';
import parsers from './parsers.js';
import buildDiff from './diffGenerator.js';
import format from './formater/index.js';

const readFileData = (filepath) => readFileSync(path.resolve(process.cwd(), filepath));

const gendiff = (filepath1, filepath2, option = 'stylish') => {
  const fileData1 = readFileData(filepath1);
  const fileData2 = readFileData(filepath2);
  const diff = buildDiff(parsers(fileData1, filepath1), parsers(fileData2, filepath2));
  return format(diff, option);
};
export default gendiff;
