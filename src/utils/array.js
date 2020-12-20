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
