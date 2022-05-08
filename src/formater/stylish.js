import _ from 'lodash';

const isObject = (data, depth) => {
  const indentSize = depth * 4 - 2;
  const currentIndent = ' '.repeat(indentSize);
  const bracketIndent = ' '.repeat(indentSize - 2);
  if ((!_.isObject(data))) {
    return String(data);
  }
  const lines = Object.entries(data).map(([key, value]) => `${currentIndent}  ${key}: ${isObject(value, depth + 1)}`);
  return `{\n${lines.join('\n')}\n${bracketIndent}}`;
};

const stylish = (diff) => {
  const iter = (currentValue, depth) => {
    const indentSize = depth * 4 - 2;
    const currentIndent = ' '.repeat(indentSize);
    const result = currentValue.map((data) => {
      if (data.type === 'added') {
        return `${currentIndent}+ ${data.name}: ${isObject(data.value, depth + 1)}`;
      }
      if (data.type === 'deleted') {
        return `${currentIndent}- ${data.name}: ${isObject(data.value, depth + 1)}`;
      }
      if (data.type === 'unchanged') {
        return `${currentIndent}  ${data.name}: ${isObject(data.value, depth + 1)}`;
      }
      if (data.type === 'changed') {
        return `${currentIndent}- ${data.name}: ${isObject(data.value1, depth + 1)}\n${currentIndent}+ ${data.name}: ${isObject(data.value2, depth + 1)}`;
      }
      return `${currentIndent}  ${data.name}: {\n${iter(data.value, depth + 1)}\n  ${currentIndent}}`;
    });
    return result.join('\n');
  };
  return `{\n${iter(diff, 1)}\n}`;
};
export default stylish;
