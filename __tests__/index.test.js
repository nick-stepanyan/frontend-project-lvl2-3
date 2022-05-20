import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFixture = (file) => readFileSync(getFixturePath(file), 'utf8');

const stylishResult = readFixture('expected.txt');
const plainResult = readFixture('expectedPlain.txt');
const jsonResult = readFixture('expectedJson.txt');

describe('Gendiff_test', () => {
  test.each(['json', 'yml'])('calculate differences', (extenshion) => {
    const filepath1 = getFixturePath(`file1.${extenshion}`);
    const filepath2 = getFixturePath(`file2.${extenshion}`);

    expect(genDiff(filepath1, filepath2)).toEqual(stylishResult);
    expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(stylishResult);
    expect(genDiff(filepath1, filepath2, 'plain')).toEqual(plainResult);
    expect(genDiff(filepath1, filepath2, 'json')).toEqual(jsonResult);
  });
});
