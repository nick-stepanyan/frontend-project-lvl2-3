import _ from 'lodash';

const isObject = (data) => {
  if ((_.isObject(data))) {
    return '[complex value]';
  }
  return typeof data === 'string' ? `'${data}'` : data;
};

const plain = (diff) => {
  const iter = (currentValue, path) => {
    const result = currentValue.filter((data) => data.type !== 'unchanged')
      .map((data) => {
        if (data.type === 'added') {
          return `Property '${[...path, data.name].join('.')}' was added with value: ${isObject(data.value)}`;
        }
        if (data.type === 'deleted') {
          return `Property '${[...path, data.name].join('.')}' was removed`;
        }
        if (data.type === 'changed') {
          return `Property '${[...path, data.name].join('.')}' was updated. From ${isObject(data.value1)} to ${isObject(data.value2)}`;
        }
        return iter(data.value, [...path, data.name]);
      });
    return result.join('\n');
  };
  return `${iter(diff, [])}`;
};

export default plain;
