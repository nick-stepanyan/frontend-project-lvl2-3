import { readFileSync } from 'fs';
import { resolve } from 'path';

const convert = (filepath) => {
  const fileData = readFileSync(resolve(process.cwd(), filepath));
  return JSON.parse(fileData);
};

export default convert;
