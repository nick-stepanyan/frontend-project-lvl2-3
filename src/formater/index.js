import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const format = (diff, typeFormat = 'stylish') => {
  switch (typeFormat) {
    case 'plain':
      return plain(diff);
    case 'json':
      return json(diff);
    case 'stylish':
      return stylish(diff);
    default:
      throw new Error('Unknown state!');
  }
};
export default format;
