import _ from 'lodash';

const buildDiff = (obj1, obj2) => {
  const arrKeys = _.orderBy(Object.keys({ ...obj1, ...obj2 }));
  const result = arrKeys.map((key) => {
    if (!_.has(obj1, key)) {
      return { name: key, type: 'added', value: obj2[key] };
    }
    if (!_.has(obj2, key)) {
      return { name: key, type: 'deleted', value: obj1[key] };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return {
        name: key, type: 'nested', value: buildDiff(obj1[key], obj2[key]),
      };
    }
    if (_.isEqual(obj1[key], obj2[key])) {
      return { name: key, type: 'unchanged', value: obj1[key] };
    }
    return {
      name: key, type: 'changed', value1: obj1[key], value2: obj2[key],
    };
  });
  return result;
};
export default buildDiff;
