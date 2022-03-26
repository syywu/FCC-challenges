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
        // This must be outside an inner loop so it won’t be reassigned until we find a larger number.
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
