import stylish from './stylish.js';

const format = (diff, typeFormat) => {
  switch (typeFormat) {
    case 'stylish':
      return stylish(diff);
    default:
      return `Unknown format to generate a tree: '${typeFormat}'!`;
  }
};
export default format;
