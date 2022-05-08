import parsers from './parsers.js';
import buildDiff from './diffGenerator.js';
import format from './formater/index.js';

const gendiff = (filepath1, filepath2, option = 'stylish') => {
  const diff = buildDiff(parsers(filepath1), parsers(filepath2));
  return format(diff, option);
};
export default gendiff;
