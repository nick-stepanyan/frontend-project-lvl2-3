import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);

test('Comparison of flat files (JSON)', () => {
  const expectedJson = readFileSync(getFixturePath('expectedJson.txt'), 'utf8');
  const pathFileJsonOne = getFixturePath('file1.json');
  const pathFileJsonTwo = getFixturePath('file2.json');
  expect(gendiff(pathFileJsonOne, pathFileJsonTwo)).toBe(expectedJson);
});

test('Comparison of flat files (yaml)', () => {
  const expectedJson = readFileSync(getFixturePath('expectedYml.txt'), 'utf8');
  const pathFileJsonOne = getFixturePath('filepath1.yml');
  const pathFileJsonTwo = getFixturePath('filepath2.yml');
  expect(gendiff(pathFileJsonOne, pathFileJsonTwo)).toBe(expectedJson);
});
