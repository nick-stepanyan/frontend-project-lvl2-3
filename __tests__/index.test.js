import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);

test('Recursive comparison (JSON, yaml)', () => {
  const option = 'stylish';
  const expected = readFileSync(getFixturePath('expected.txt'), 'utf8');
  const pathFileJsonOne = getFixturePath('file1.json');
  const pathFileJsonTwo = getFixturePath('file2.json');
  const pathFileYamlOne = getFixturePath('filepath1.yml');
  const pathFileYamlTwo = getFixturePath('filepath2.yml');
  expect(gendiff(pathFileJsonOne, pathFileJsonTwo, option)).toEqual(expected);
  expect(gendiff(pathFileYamlOne, pathFileYamlTwo, option)).toEqual(expected);
});

test('Flat format (JSON)', () => {
  const option = 'plain';
  const expected = readFileSync(getFixturePath('expectedFlat.txt'), 'utf8');
  const pathFileJsonOne = getFixturePath('file1.json');
  const pathFileJsonTwo = getFixturePath('file2.json');
  const pathFileYamlOne = getFixturePath('filepath1.yml');
  const pathFileYamlTwo = getFixturePath('filepath2.yml');
  expect(gendiff(pathFileJsonOne, pathFileJsonTwo, option)).toEqual(expected);
  expect(gendiff(pathFileYamlOne, pathFileYamlTwo, option)).toEqual(expected);
});
