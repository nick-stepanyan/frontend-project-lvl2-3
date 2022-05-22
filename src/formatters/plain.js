import _ from 'lodash';

const stringify = (data) => {
  if ((_.isObject(data))) {
    return '[complex value]';
  }
  return typeof data === 'string' ? `'${String(data)}'` : String(data);
};

const getPath = (path, name) => [...path, name].join('.');

const plain = (diff) => {
  const iter = (currentValue, path) => {
    const result = currentValue.reduce((acc, data) => {
      switch (data.type) {
        case 'added':
          return [...acc, `Property '${getPath(path, data.name)}' was added with value: ${stringify(data.value)}`];
        case 'deleted':
          return [...acc, `Property '${getPath(path, data.name)}' was removed`];
        case 'changed':
          return [...acc, `Property '${getPath(path, data.name)}' was updated. From ${stringify(data.value1)} to ${stringify(data.value2)}`];
        case 'nested':
          return [...acc, iter(data.value, [...path, data.name])];
        case 'unchanged':
          return [...acc];
        default:
          throw new Error(`Unknown state: '${data.type}'!`);
      }
    }, []);
    return result.join('\n');
  };
  return `${iter(diff, [])}`;
};
export default plain;
