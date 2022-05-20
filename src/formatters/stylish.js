import _ from 'lodash';

const indentSize = (depth) => depth * 4;
const currentIndent = (depth) => ' '.repeat(indentSize(depth) - 2);
const bracketIndent = (depth) => ' '.repeat(indentSize(depth) - 4);

const stringify = (data, depth) => {
  if ((!_.isObject(data))) {
    return String(data);
  }
  const lines = Object.entries(data).map(([key, value]) => `${currentIndent(depth)}  ${key}: ${stringify(value, depth + 1)}`);
  return `{\n${lines.join('\n')}\n${bracketIndent(depth)}}`;
};

const stylish = (diff) => {
  const iter = (currentValue, depth) => {
    const result = currentValue.map((data) => {
      switch (data.type) {
        case 'added':
          return `${currentIndent(depth)}+ ${data.name}: ${stringify(data.value, depth + 1)}`;
        case 'deleted':
          return `${currentIndent(depth)}- ${data.name}: ${stringify(data.value, depth + 1)}`;
        case 'unchanged':
          return `${currentIndent(depth)}  ${data.name}: ${stringify(data.value, depth + 1)}`;
        case 'changed':
          return `${currentIndent(depth)}- ${data.name}: ${stringify(data.value1, depth + 1)}\n${currentIndent(depth)}+ ${data.name}: ${stringify(data.value2, depth + 1)}`;
        case 'nested':
          return `${currentIndent(depth)}  ${data.name}: {\n${iter(data.value, depth + 1)}\n  ${currentIndent(depth)}}`;
        default:
          throw new Error(`Unknown state: '${data.type}'!`);
      }
    });
    return result.join('\n');
  };
  return `{\n${iter(diff, 1)}\n}`;
};
export default stylish;
