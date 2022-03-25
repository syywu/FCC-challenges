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