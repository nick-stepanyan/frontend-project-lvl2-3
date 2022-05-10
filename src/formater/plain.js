import _ from 'lodash';

const isObject = (data) => {
  if ((_.isObject(data))) {
    return '[complex value]';
  }
  return typeof data === 'boolean' || data === null ? data : `'${data}'`;
};

const plain = (diff) => {
  const iter = (currentValue, depth) => {
    const result = currentValue.filter((data) => data.type !== 'unchanged')
      .map((data) => {
        const way = `${depth}.${data.name}`;
        if (data.type === 'added') {
          return `Property '${way.slice(1)}' was added with value: ${isObject(data.value)}`;
        }
        if (data.type === 'deleted') {
          return `Property '${way.slice(1)}' was removed`;
        }
        if (data.type === 'changed') {
          return `Property '${way.slice(1)}' was updated. From ${isObject(data.value1)} to ${isObject(data.value2)}`;
        }
        return iter(data.value, way);
      });
    return result.join('\n');
  };
  return `${iter(diff, '')}`;
};

export default plain;
