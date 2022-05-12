import gendiff from './src/index.js';

const differenceCalculator = (file1, file2, option) => gendiff(file1, file2, option);
export default differenceCalculator;
