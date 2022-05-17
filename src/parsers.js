import { load } from 'js-yaml';

const parsers = (data, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
      return load(data);
    case 'yaml':
      return load(data);
    default:
      throw new Error('Unknown state!');
  }
};
export default parsers;
