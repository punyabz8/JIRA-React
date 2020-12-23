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

export const convertArrayToObject = (array, key, swimeLine) => {
  const initialValue = {};

  let finalValue = {};

  swimeLine.forEach((line) => {
    const extractedObj = array.reduce((obj, item) => {
      return {
        ...obj,
        [line]: array.filter((list) => list.status === line) || [],
      };
    }, initialValue);

    finalValue = Object.assign(finalValue, extractedObj);
  });

  return finalValue;
};
