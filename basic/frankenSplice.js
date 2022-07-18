/*
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
  // first arr going into second array
  // slice arr 2
  return arr2.slice(0, n).concat(arr1).concat(arr2.slice(n, arr2.length));
}
