// Maps and Sets Exercise
// Quick Question #1
// What does the following code return?

// new Set([1, 1, 2, 2, 3, 4]); returns ->
{
  1, 2, 3, 4;
}

// Quick Question #2
// What does the following code return?

[...new Set("referee")].join("");
// returns ->
("ref");

// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// returns ->
// {Array(3) => true, Array(3) => false}

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns
// true or false if that array contains a duplicate
function hasDuplicate(arr) {
  const newSet = new Set(arr);
  return newSet.size === arr.length ? false : true;
}
// hasDuplicate([1, 3, 2, 1]); // true
// hasDuplicate([1, 5, -1, 4]); // false

// vowelCount
// Write a function called vowelCount which accepts a string
//  and returns a map where the keys are numbers and the values
//  are the count of the vowels in the string.

// vowelCount("awesome"); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount("Colt"); // Map { 'o' => 1 }
function vowelCount(word) {
  const vowels = "aeiou";
  const mapOfVowels = new Map();
  const lowerCaseWord = word.toLowerCase();
  for (let letter of lowerCaseWord) {
    if (vowels.indexOf(letter) !== -1) {
      if (mapOfVowels.has(letter)) {
        mapOfVowels.set(letter, mapOfVowels.get(letter) + 1);
      } else {
        mapOfVowels.set(letter, 1);
      }
    }
  }
  return mapOfVowels;
}
