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
    const result = currentValue.filter((data) => data.type !== 'unchanged')
      .map((data) => {
        switch (data.type) {
          case 'added':
            return `Property '${getPath(path, data.name)}' was added with value: ${stringify(data.value)}`;
          case 'deleted':
            return `Property '${getPath(path, data.name)}' was removed`;
          case 'changed':
            return `Property '${getPath(path, data.name)}' was updated. From ${stringify(data.value1)} to ${stringify(data.value2)}`;
          case 'nested':
            return iter(data.value, [...path, data.name]);
          default:
            throw new Error(`Unknown state: '${data.type}'!`);
        }
      });
    return result.join('\n');
  };
  return `${iter(diff, [])}`;
};

export default plain;
