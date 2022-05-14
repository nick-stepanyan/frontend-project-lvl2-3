import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const expected = (file) => readFileSync(getFixturePath(file), 'utf8');

describe('Gendiff_test', () => {
  test.each([
    [getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish', expected('expected.txt')],
    [getFixturePath('filepath1.yml'), getFixturePath('filepath2.yml'), 'stylish', expected('expected.txt')],
    [getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain', expected('expectedFlat.txt')],
    [getFixturePath('filepath1.yml'), getFixturePath('filepath2.yml'), 'plain', expected('expectedFlat.txt')],
    [getFixturePath('file1.json'), getFixturePath('file2.json'), 'json', expected('expectedJson.txt')],
    [getFixturePath('filepath1.yml'), getFixturePath('filepath2.yml'), 'json', expected('expectedJson.txt')],
  ])('calculate differences', (file1, file2, format, expectedResult) => {
    expect(gendiff(file1, file2, format)).toEqual(expectedResult);
  });
});
