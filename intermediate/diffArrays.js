/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
  const newArr = [];

  function isDiff(a1, a2) {
    for (let i = 0; i < a1.length; i++) {
      if (!a2.includes(a1[i])) {
        newArr.push(a1[i]);
      }
    }
  }
  isDiff(arr1, arr2);
  isDiff(arr2, arr1);

  return newArr;
}
