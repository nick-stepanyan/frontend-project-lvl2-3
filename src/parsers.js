import { readFileSync } from 'fs';
import path from 'path';
import { load } from 'js-yaml';

const parsers = (filepath) => {
  const fileData = readFileSync(path.resolve(process.cwd(), filepath));
  const format = path.extname(filepath);
  if (format === '.json') {
    return JSON.parse(fileData);
  }
  if (format === '.yml' || format === '.yaml') {
    return load(fileData);
  }
  return null;
};

export default parsers;
