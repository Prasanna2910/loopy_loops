// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var Kalvian_1 = 'XXXX';
console.log("The dirver's name is ", Kalvian_1);
var Kalvian_2 = 'YYTHY';
console.log("The Navigator's name is ", Kalvian_2);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var a = Kalvian_1.length;
var b = Kalvian_2.length;
for (let i = 0; i < a; i++) {
  for (let j = 0; j < b; j++) {
    if (i > j) {
      var c = `The driver has the longest name,${a}`;
    } else if (j > i) {
      var c = `The navigator has the longest name,${b}`;
    } else {
      var c = `Wow, you both have equally long names,${a}`;
    }
  }
}
console.log(c);
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.
var names = 'Prasanna';
var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
var t = 'no vowels';
v = '';
z = '';
for (let k = 0; k < names.length; k++) {
  var g = names[k];
  var isVowels = true;
  console.log(g);
  for (let j = 0; j < vowels.length; j++) {
    if (g === vowels[j]) {
      isVowels = false;
    }
  }
  if (isVowels) {
    v += vowels[j] + ' ';
    z += k + ' ';
  }
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var a = 'PrasaNNa';
let count = 0;
let x = 0;
for (let m = 0; m < a.length; m++) {
  var upperCount = isUpperCase(a[m]);
  if (upperCount) {
    count = count + 1;
  } else {
    x = x + 1;
  }
}

console.log(count);
console.log(x);
function isUpperCase(char) {
  return char === char.toUpperCase() && char !== char.toLowerCase();
}
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
let space = Kalvian_1.split('');
p = ' ';
for (let t = 0; t < space.length; t++) {
  p += space[t] + ' ';
}
console.log(p);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
var o = '';
for (i = Kalvian_2.length - 1; i >= 0; i--) {
  o += Kalvian_2[i] + '';
}
console.log(o);
// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
var u = Kalvian_2 + ' ' + Kalvian_1;
console.log(u);
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (Kalvian_1 < Kalvian_2) {
  console.log("The driver's name goes first");
} else if (Kalvian2 > Kalvian_1) {
  console.log('Yo, the navigator goes first definitely');
} else {
  console.log('What?! You both have the same name?');
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
