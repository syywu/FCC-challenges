 // Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.
function reverseString(str) {
    // Step 1. Create an empty string that will host the new created string
    let newStr = '';

    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for(let i = str.length -1; i >=0; i--){
      newStr += str[i];
    }

    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/
 
    return newStr;
  
  }
  
  reverseString("hello");

  //  Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {

    // initalise result with 1 as multiplications with 0 = 0 
    let result = 1;

    // FOR loop starting from 1 as multiplications with 0 = 0
    for(let i = 1; i<=num; i++){
      result *= i; 
    //   result = result * i
    }
    /*  result * i = result
        1st iteration: 1 * 1 = 1
        2nd iteration: 1 * 2 = 2
        3rd iteration: 2 * 3 = 6
        4th iteration: 6 * 4 =24
        5th iteration: 24 * 5 = 120

    */
    
    return result;
  }
  
  factorialize(5);

  //   Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    // Step 1. Split the string into an array of strings
    let words = str.split(' ');
// var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
  // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
	
// Step 2. Initiate a variable that will hold the length of the longest word
    let longestWord =0; 

    // Step 3. Create the FOR loop
    for(let i= 0; i < words.length; i++){
        // If words[i].length is greater than the word it is compared with...
      if(words[i].length > longestWord){
        longestWord = words[i].length; 
        // ...then longestWord takes this new value
      }

       /* Here words.length = 9
     For each iteration: i = ?   i < words.length?   i++  if(strSplit[i].length > longestWord)?   longestWord = strSplit[i].length
     1st iteration:        0             yes             1   if("The".length > 0)? => if(3 > 0)?     longestWord = 3
     2nd iteration:        1             yes             2   if("quick".length > 3)? => if(5 > 3)?   longestWord = 5   
     3rd iteration:        2             yes             3   if("brown".length > 5)? => if(5 > 5)?   longestWord = 5   
     4th iteration:        3             yes             4   if("fox".length > 5)? => if(3 > 5)?     longestWord = 5  
     5th iteration:        4             yes             5   if("jumped".length > 5)? => if(6 > 5)?  longestWord = 6 
     6th iteration:        5             yes             6   if("over".length > 6)? => if(4 > 6)?    longestWord = 6 
     7th iteration:        6             yes             7   if("the".length > 6)? => if(3 > 6)?     longestWord = 6
     8th iteration:        7             yes             8   if("lazy".length > 6)? => if(4 > 6)?    longestWord = 6 
     9th iteration:        8             yes             9   if("dog".length > 6)? => if(3 > 6)?     longestWord = 6 
     10th iteration:       9             no               
     End of the FOR Loop*/
    }
    return longestWord;
  }

  findLongestWordLength("The quick brown fox jumped over the lazy dog");

 //   Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    // Create a variable to store the results as an array.
    let results = [];

    // Create an outer loop to iterate through the outer array.
    for (let i = 0; i < arr.length; i++) {
        // Create a second variable to hold the largest number and initialise it with the first number. 
        // This must be outside an inner loop so it won???t be reassigned until we find a larger number.
      let largestNumber = arr[i][0];

    //   Create said inner loop to work with the sub-arrays.
      for (let j = 1; j < arr[i].length; j++) {
        // Check if the element of the sub array is larger than the currently stored largest number. 
        // If so, then update the number in the variable.
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
    //   After the inner loop, save the largest number in the corresponding position inside of the results array.
      results[i] = largestNumber;
    }

    // Iteration in the first array
    // For each iteration: arr[i][j]           results[i]          if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
    // First iteration:    arr[0][0] => 4      results[0] => 0     4 > 0? => TRUE                       then largestNumber[0] = 4
    // Second iteration:   arr[0][1] => 5      results[0] => 4     5 > 4? => TRUE                       then largestNumber[0] = 5
    // Third iteration:    arr[0][2] => 1      results[0] => 5     1 > 5? => FALSE                      then largestNumber[0] = 5
    // Fourth iteration:   arr[0][3] => 3      results[0] => 5     3 > 5? => FALSE                      then largestNumber[0] = 5
    // Fifth iteration:    arr[0][4] => FALSE  results[0] => 5  
    // Exit the first array and continue on the second one
    //    Iteration in the second array
    //       For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
    //       First iteration:    arr[1][0] => 13      largestNumber[1] => 0      13 > 0? => TRUE                      then largestNumber[1] = 13
    //       Second iteration:   arr[1][1] => 27      largestNumber[1] => 13     27 > 13? => TRUE                     then largestNumber[1] = 27
    //       Third iteration:    arr[1][2] => 18      largestNumber[1] => 27     18 > 27? => FALSE                    then largestNumber[1] = 27
    //       Fourth iteration:   arr[1][3] => 26      largestNumber[1] => 27     26 > 27? => FALSE                    then largestNumber[1] = 27
    //       Fifth iteration:    arr[1][4] => FALSE   largestNumber[1] => 27                                          largestNumber = [5,27,0,0]
    //    Exit the first array and continue on the third one
    //    Iteration in the third array
    //       For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
    //       First iteration:    arr[2][0] => 32      largestNumber[2] => 0      32 > 0? => TRUE                      then largestNumber[2] = 32
    //       Second iteration:   arr[2][1] => 35      largestNumber[2] => 32     35 > 32? => TRUE                     then largestNumber[2] = 35
    //       Third iteration:    arr[2][2] => 37      largestNumber[2] => 35     37 > 35? => TRUE                     then largestNumber[2] = 37
    //       Fourth iteration:   arr[2][3] => 39      largestNumber[2] => 37     39 > 37? => TRUE                     then largestNumber[2] = 39
    //       Fifth iteration:    arr[2][4] => FALSE   largestNumber[2] => 39                                          largestNumber = [5,27,39,0]
    //    Exit the first array and continue on the fourth one
    //    Iteration in the fourth array
    //       For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
    //       First iteration:    arr[3][0] => 1000    largestNumber[3] => 0      1000 > 0? => TRUE                    then largestNumber[3] = 1000
    //       Second iteration:   arr[3][1] => 1001    largestNumber[3] => 1000   1001 > 1000? => TRUE                 then largestNumber[3] = 1001
    //       Third iteration:    arr[3][2] => 857     largestNumber[3] => 1001   857 > 1001? => FALSE                 then largestNumber[3] = 1001
    //       Fourth iteration:   arr[3][3] => 1       largestNumber[3] => 1001   1 > 1001? => FALSE                   then largestNumber[3] = 1001
    //       Fifth iteration:    arr[3][4] => FALSE   largestNumber[3] => 1001                                        largestNumber = [5,27,39,1001]
    //    Exit the FOR loop 
    
    // And finally return said array.
    return results;
  }

  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//   Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  
    // First we use the slice method copy the string.
    // In order to get the last characters in str equivalent to the target's length we use the slice method.
    
    // The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
    // In this case we only include one parameter which it will copy everything from the starting index.
    return str.slice(str.length - target.length) === target;

    // We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
    // Finally we compare the return result of slice to target and check if they have the same characters.
    }
    
    confirmEnding("Bastian", "n");

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

    function repeatStringNumTimes(str, num) {

        // Create an empty string variable to store the repeated word.
        let repeatedStr = "";
  
        // Use a for loop or for loop to repeat code as many times as needed according to num
        for(let i =0; i < num; i++){
            //  Then we add the string to the variable created on step one inside of the loop.
            repeatedStr += str ; 
      }
  
      /*  repeatedString += string      repeatedString 
           "" + "abc"                  "abc"   
          "abc" + "abc"               "abcabc"     
          "abcabc" + "abc"            "abcabcabc" 
      */
      
      // At the end of the loop, return the variable for the repeated word.
      return repeatedStr;
      }
      
      repeatStringNumTimes("abc", 3);

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

    // We start off with a simple if statement to determine one of two outcomes???
    function truncateString(str, num) {

        // If our string length is greater than the num we want to truncate it, we return a slice of our string starting at character 0, and ending at num. We then append our '...' to the end of the string.
        if(str.length > num){
          return str.slice(0, num) + "...";
        }
        // However, if above situation is not true, it means our string length is less than our truncation num. Therefore, we can just return the string.
        return str;
      }
      
      truncateString("A-tisket a-tasket A green and yellow basket", 8);

      // Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

    function findElement(arr, func) {
        let num = 0;
        
        // Challenge asks us to look through array. This is done using a for loop. 
        for (let i = 0; i < arr.length; i++) {
          // The num variable is being passed into the function, so we set it to each index in our array.
          num = arr[i];
          // The pre-defined function already checks each number for us, so if it is ???true???, we return that num.
          if (func(num)) {
            return num;
          }
        }
        // If none of the numbers in the array pass the function???s test, we return undefined.
        return undefined;
    
      }

      findElement([1, 2, 3, 4], num => num % 2 === 0);

      /* 
      Sum All Numbers in a Range

      We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

      For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
    
      */

      function sumAll(arr) {

        //sort the arr- from low to high
        arr.sort((a, b) => {
          return a-b; 
        });
        // initialise a var called result to store result
        let result = 0; 

        // i is 1st index of arr. loop runs as long as it's less than or equal to index 2
        for(let i = arr[0]; i <= arr[1]; i++){
          result += i; 
          //result = 0 + 1 = 1
          //result = 1 + 2 = 3
          //result = 3 + 3 = 6
          //result = 6 + 4 = 10
        }
        return result ;
      }
      
      sumAll([1, 4]);

      /* 
      Diff Two Arrays

      Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

      Note: You can return the array with its elements in any order.
    
      */

      function diffArray(arr1, arr2) {
        const newArr = [];
      
        function compareArr(first, second){
      for(let i = 0; i < first.length; i++){
            if (second.indexOf(first[i]) == -1){
              newArr.push(first[i]);
            }
        }
      
        }
         compareArr(arr1, arr2);
         compareArr(arr2, arr1);
      return newArr;
      }
      
      console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

      /* 
      Palindrome Checker
      Return true if the given string is a palindrome. Otherwise, return false.

      A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

      Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

      We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

      We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
      
      
      */

      function palindrome(str) {
        let newStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase(); //notapalindrome
        let reverseStr = newStr.split("").reverse().join(""); 
        // [ 'n', 'o', 't', 'a', 'p', 'a', 'l', 'i', 'n', 'd', 'r', 'o', 'm', 'e' ]
        // [ 'e', 'm', 'o', 'r', 'd', 'n', 'i', 'l', 'a', 'p', 'a', 't', 'o', 'n' ]
        // emordnilapaton

        if(newStr != reverseStr){
          return false; 
        }
         
          return true;
        }
        
        palindrome("not a palindrome");
                
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
  if (typeof(bool) === "boolean"){
    return true;
  }
  return false;
  }
  
  booWho(null);

  // Uses the operator typeof to check if the variable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false.

  function booWho(bool) {
    return typeof bool === "boolean";
  }
  
  // test here
  booWho(null);

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {

  // str = str.toLowerCase() - "i'm a little tea pot" .split(' '); - ["i'm", "a", "little", "tea", "pot"];
  str = str.toLowerCase().split(' '); 

  //  Create the FOR loop
  for(let i = 0; i < str.length;i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

    /* Here str.length = 5
    1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
                   str[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
                   str[0] = "I"                            + "'m";
                   str[0] = "I'm";
    2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
                   str[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
                   str[1] = "A"                            + "";
                   str[1] = "A";
    3rd iteration: str[2] = str[2].charAt(0).toUpperCase()   + str[2].slice(1);
                   str[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
                   str[2] = "L"                              + "ittle";
                   str[2] = "Little";
    4th iteration: str[3] = str[3].charAt(0).toUpperCase() + str[3].slice(1);
                   str[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
                   str[3] = "T"                            + "ea";
                   str[3] = "Tea";
    5th iteration: str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
                   str[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
                   str[4] = "P"                           + "ot";
                   str[4] = "Pot";                                                         
    End of the FOR Loop*/

  }
  // Return the output
  return str.join(' '); 
  // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}

titleCase("I'm a little tea pot");

/*You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n) {
  // Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. At the same time we must ensure that neither arr or arr2 have been mutated.

  let newArr = arr2.slice(0);
  // Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, newArr.

  for(let i = 0; i < arr1.length; i++){
    newArr.splice(n, 0, arr1[i]);
    // Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the splice() function to insert the item into index n of newArr.
    // n- start position, 0- removes 0 elements, arr[i]-  element added
    n++;
    // We increment the index n by one. This will ensure that every item from the arr1 is inserted into newArr in the proper index position.
  }
  // Finally, we return the newArr and end the function.
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {

  // We create a new empty array.
  let newArr = [];

  // We use a for loop to iterate over all elements of the provided array (arr).
  for(let i =0; i<arr.length; i++){
    // We use the if statement to check if the current element is truthy or falsy
  if(arr[i]) newArr.push(arr[i]);
  // If the element is truthy, we push it to the new array (newArray). This result in the new array (newArray) containing only truthy elements.
  }

  // We return the new array (newArray).
    return newArr;
  }
  
  bouncer([7, "ate", "", false, 9]);

 /* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
          
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1). */

function getIndexToIns(arr, num) {

  // First sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right.
  arr.sort((a, b) => a - b);

  // create a variable to store index and sets index to 0
  let index= 0; 

  for(let i =0; i < arr.length;i++){
    if (num > arr[i]){
      index++;
    }
  }
  return index;
}

getIndexToIns([40, 60], 50);

/* The sort() method iterates over the array, every time passing 2 values next to each other to the compare function. The compare function then evaluates the difference between the first value and the second. This is what will determine whether the function returns a positive, negative or neutral value.

If the return value is positive, it means that the first value is greater than the second. For example, if you compare 7 and 4, you get 3. Therefore, the first value goes after the second one in our ascending order.

If the return value is negative, it means that the first value is less than the second. For example, if you compare 2 and 7, you get -5. Therefore, the first value goes before the second one in our ascending order.

A neutral value, or zero, indicates that the two values are equal, so the order does not need to change.

You can actually do any operation you want inside the compare function, as long as you return a value. To sort a descending order would be +. */



/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien. */

function mutation(arr) {

  // First we make the two strings in the array lowercase. elem1 will hold what we are looking for in elem.
let elem = arr[0].toLowerCase();
let elem1= arr[1].toLowerCase();

// Then we loop through our test characters and if any of them is not found we return false.
for(let i= 0; i < elem1.length; i++){
if(elem.indexOf(elem1[i]) < 0) return false;
}

// If they are all found, the loop will finish without returning anything and we get to return true.
return true;
}
            
mutation(["hello", "hey"]);

// The indexOf() method returns the position of the first occurrence of a value in a string, returns -1 if the value is not found and is case sensitive.
