// TODO: write your code here

function makeArray(obj) {
  const arr = [];
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      const propObj = {
        key: prop,
        value: obj[prop],
      };
      arr.push(propObj);
    }
  }
  return arr;
}

function sortArray(arr, sortKeys) {
  return arr.sort((a, b) => {
    const aIndx = sortKeys.indexOf(a.key);
    const bIndx = sortKeys.indexOf(b.key);

    if (aIndx !== -1 && bIndx !== -1) {
      return aIndx - bIndx;
    }
    if (aIndx !== -1) {
      return -1;
    }
    if (bIndx !== -1) {
      return 1;
    }
    return a.key.localeCompare(b.key);
  });
}

export default function orderByProps(obj, sortKeys) {
  return sortArray(makeArray(obj), sortKeys);
}
