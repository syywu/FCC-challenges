/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  let newStr;
  if (str.length > num) {
    newStr = str.slice(0, num);
    newStr += "...";
    return newStr;
  }
  return str;
}
