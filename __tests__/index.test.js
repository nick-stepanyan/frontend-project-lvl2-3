import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);

const expectedJson = readFileSync(getFixturePath('expectedJson.txt'), 'utf8');
const pathFileJsonOne = getFixturePath('file1.json');
const pathFileJsonTwo = getFixturePath('file2.json');

test('Comparison of flat files (JSON)', () => {
  expect(gendiff(pathFileJsonOne, pathFileJsonTwo)).toBe(expectedJson);
});
