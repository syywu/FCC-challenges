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