import stylish from './stylish.js';
import plain from './plain.js';

const format = (diff, typeFormat) => {
  switch (typeFormat) {
    case 'stylish':
      return stylish(diff);
    case 'plain':
      return plain(diff);
    default:
      return `Unknown format to generate a tree: '${typeFormat}'!`;
  }
};
export default format;
