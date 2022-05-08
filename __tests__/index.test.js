import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const option = 'stylish';

test('Comparison of flat files (JSON)', () => {
  const expectedJson = readFileSync(getFixturePath('expectedJson.txt'), 'utf8');
  const pathFileJsonOne = getFixturePath('file1.json');
  const pathFileJsonTwo = getFixturePath('file2.json');
  expect(gendiff(pathFileJsonOne, pathFileJsonTwo, option)).toEqual(expectedJson);
});

test('Comparison of flat files (yaml)', () => {
  const expectedJson = readFileSync(getFixturePath('expectedYml.txt'), 'utf8');
  const pathFileJsonOne = getFixturePath('filepath1.yml');
  const pathFileJsonTwo = getFixturePath('filepath2.yml');
  expect(gendiff(pathFileJsonOne, pathFileJsonTwo, option)).toEqual(expectedJson);
});

test('Recursive comparison (JSON)', () => {
  const expectedJson = readFileSync(getFixturePath('expectedJsonBig.txt'), 'utf8');
  const pathFileJsonOne = getFixturePath('fileBig1.json');
  const pathFileJsonTwo = getFixturePath('fileBig2.json');
  expect(gendiff(pathFileJsonOne, pathFileJsonTwo, option)).toEqual(expectedJson);
});

test('Recursive comparison (yaml)', () => {
  const expectedJson = readFileSync(getFixturePath('expectedYmlBig.txt'), 'utf8');
  const pathFileJsonOne = getFixturePath('filepathBig1.yml');
  const pathFileJsonTwo = getFixturePath('filepathBig2.yml');
  expect(gendiff(pathFileJsonOne, pathFileJsonTwo, option)).toEqual(expectedJson);
});
