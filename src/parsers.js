import { readFileSync } from 'fs';
import path from 'path';
import { load } from 'js-yaml';

const parsers = (filepath) => {
  const fileData = readFileSync(path.resolve(process.cwd(), filepath));
  const format = path.extname(filepath);
  let result;
  if (format === '.json') {
    result = JSON.parse(fileData);
  } else if (format === '.yml') {
    result = load(fileData);
  }
  return result;
};

export default parsers;
