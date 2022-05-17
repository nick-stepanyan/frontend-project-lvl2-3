import { readFileSync } from 'fs';
import path from 'path';
import parsers from './parsers.js';
import buildDiff from './diffGenerator.js';
import format from './formater/index.js';

const readFileData = (filepath) => readFileSync(path.resolve(process.cwd(), filepath));
const getExtension = (filepath) => path.extname(filepath);

const gendiff = (filepath1, filepath2, option = 'stylish') => {
  const data1 = readFileData(filepath1);
  const data2 = readFileData(filepath2);
  const fileExtension1 = getExtension(filepath1).slice(1);
  const fileExtension2 = getExtension(filepath2).slice(1);
  const diff = buildDiff(parsers(data1, fileExtension1), parsers(data2, fileExtension2));
  return format(diff, option);
};
export default gendiff;
