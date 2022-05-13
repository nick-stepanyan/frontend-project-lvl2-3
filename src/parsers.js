import path from 'path';
import { load } from 'js-yaml';

const parsers = (filepath, name) => {
  const format = path.extname(name);
  if (format === '.json') {
    return JSON.parse(filepath);
  }
  if (format === '.yml' || format === '.yaml') {
    return load(filepath);
  }
  return null;
};

export default parsers;
