/**
 
 * Function to convert the object into array.
 *
 * @param {object} obj
 */
export const convertObjectIntoArray = (obj) => {
  return Object.entries(obj);
};

/**
 * Determine of the given array is empty or not.
 *
 * @param {Array} arr
 */
export const isArrayEmpty = (arr) => {
  return arr.length === 0;
};

export const convertArrayToObject = (array, swimeLine) => {
  const initialValue = {};

  let finalValue = {};

  swimeLine.forEach((line) => {
    const extractedObj = array.reduce((obj) => {
      return {
        ...obj,
        [line]: array.filter((list) => list.status === line) || [],
      };
    }, initialValue);

    finalValue = Object.assign(finalValue, extractedObj);
  });

  return finalValue;
};

export const convertArrayToBacklogObject = (array) => {
  const initialValue = {};

  const extractedObj = array.reduce((obj) => {
    return {
      ...obj,
      active: array.filter((list) => list.status !== 'backlog'),
      backlog: array.filter((list) => list.status === 'backlog'),
    };
  }, initialValue);

  return extractedObj;
};
