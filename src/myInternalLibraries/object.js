export const checkSameObjectArray = (objectArray, objectArrayToCompare) => {
  objectArray = objectArray.sort();
  objectArrayToCompare = objectArrayToCompare.sort();
  let match = true;
  if (objectArray.length !== objectArrayToCompare.length) {
    match = false;
  } else {
    objectArray.forEach(function(object, index) {
      if (!checkSameObject(object, objectArrayToCompare[index])) {
        match = false;
      }
    });
  }
  return match;
};

export const checkSameObject = (object, objectToCompare) => {
  let objectValsArray = Object.keys(object).map(function(key) {
    return key;
  });
  let objectToCompareValsArray = Object.keys(objectToCompare).map(function(
    key
  ) {
    return key;
  });
  let objectKeysArray = Object.keys(object).map(function(key) {
    return object[key];
  });
  let objectToCompareKeysArray = Object.keys(objectToCompare).map(function(
    key
  ) {
    return objectToCompare[key];
  });

  let keysMatch = compareArrays(objectKeysArray, objectToCompareKeysArray);

  let valsMatch = compareArrays(objectValsArray, objectToCompareValsArray);

  if (keysMatch && valsMatch) {
    return true;
  } else {
    return false;
  }
};

function compareArrays(firstArray, secondArray) {
  firstArray = firstArray.sort();
  secondArray = secondArray.sort();
  if (firstArray.length !== secondArray.length) return false;
  for (let i = firstArray.length; i--; ) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
}
