function consecutiveSubstrings(string) {
// type your code here

//empty array to store consecutive substring characters
const consecutiveSubstrings = [];
  //outer loop - sets anchor point
  for (let i = 0; i < string.length; i++) {
    //will hold current anchor character
    let char = string[i];
    //push current anchor character to consectutiveSubstrings array
    consecutiveSubstrings.push(char);
    for (let j = i + 1; j < string.length; j++) {
      //will add consecutive next characters from anchor point through to end of array
      char += string[j];
      //push next consecutive characters to array
      consecutiveSubstrings.push(char);
    }
  }
  //returns the final consecutive combinations that were pushed through for iteration of each character
  return consecutiveSubstrings;
};

console.log(consecutiveSubstrings(''));

// if (require.main === module) {
//   // add your own tests in here
//   console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
//   console.log("=>", consecutiveSubstrings('abc'));

//   console.log("");

//   console.log("Expecting: ['a']");
//   console.log("=>", consecutiveSubstrings('a'));
// }

// module.exports = consecutiveSubstrings;
