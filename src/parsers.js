import { load } from 'js-yaml';

const parseData = (data, parserType) => {
  switch (parserType) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
      return load(data);
    case 'yaml':
      return load(data);
    default:
      throw new Error(`${parserType} - invalid type of parser!`);
  }
};
export default parseData;
