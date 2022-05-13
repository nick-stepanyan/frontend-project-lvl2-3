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
        switch (data.type) {
          case 'added':
            return `Property '${[...path, data.name].join('.')}' was added with value: ${isObject(data.value)}`;
          case 'deleted':
            return `Property '${[...path, data.name].join('.')}' was removed`;
          case 'changed':
            return `Property '${[...path, data.name].join('.')}' was updated. From ${isObject(data.value1)} to ${isObject(data.value2)}`;
          default:
            return iter(data.value, [...path, data.name]);
        }
      });
    return result.join('\n');
  };
  return `${iter(diff, [])}`;
};

export default plain;
