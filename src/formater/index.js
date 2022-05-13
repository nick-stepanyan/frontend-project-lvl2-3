import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const format = (diff, typeFormat) => {
  switch (typeFormat) {
    case 'plain':
      return plain(diff);
    case 'json':
      return json(diff);
    default:
      return stylish(diff);
  }
};
export default format;
