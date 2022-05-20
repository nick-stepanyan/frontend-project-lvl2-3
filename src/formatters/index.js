import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const format = (diff, type = 'stylish') => {
  switch (type) {
    case 'plain':
      return plain(diff);
    case 'json':
      return json(diff);
    case 'stylish':
      return stylish(diff);
    default:
      throw new Error(`${type} - invalid type of format!`);
  }
};
export default format;
