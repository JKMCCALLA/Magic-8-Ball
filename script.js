
/* 
   Welcome to the Magic 8-ball Project.  Complete the 
   tasks outlined by the comments in this file.

   The following functions are available to you 
   (you can just call them):

   // This will hide the '8' (if shown) and 
   // show the triangle (if hidden).  It will
   // set the text on the triangle to the
   // string 'answerText'.
   function makeAnswerAppear(answerText)
*/

/* Returns a random integer in the range 'min' through 'max' inclusive. 

   This can be taken directly from MDN documentation: 
     https://tinyurl.com/3jkxa8h3


*/

var duplicate = "";

function getQuestion() {

  let guessString = document.getElementById("question").value;
  guessString = guessString.toLowerCase();
  // console.log(guessString);

  return guessString
}

function getRandomIntInclusive(min, max) {
  let initial = Math.random();
  let second = initial*(max+1);
  let answer = Math.floor(second);

  return answer
}

/* Write a function that handles the magic 8-ball being clicked. Here are the steps:

   - Create an array containing at least 5 possible answers as strings.
   - Generate a random array index by calling 
       getRandomIntInclusive function.
   - Call 'makeAnswerAppear' using the random
       answer you selected.
   - (Level-up) Prevent your code from selecting the 
       same answer multiple times in a row 
       (loops could be required).
*/
function answerQuestion() {
  
  let results = ["Maybe", "There is a possibility", "High Chance", "No way Jose!", "Where is your mother?"];
  let index = getRandomIntInclusive(0,4);
  console.log(index);
  let buffer = results[index];

  if (buffer !== duplicate) {
    makeAnswerAppear(results[index]); duplicate = buffer;}
  else {
    answerQuestion();
  }

  // let guessString = getQuestion();

  // let marry = ["Yes", "No"];
  // let pretty = ["Not like you used to be", "Chile, you gorgeous!"];
  // let state = ["I am fine", "Not so good",  "Very bad!"];

  // if (guessString.includes("marry") || guessString.includes("ring") || guessString("finger")) {

  //     makeAnswerAppear(marry[getRandomIntInclusive(0,1)]);
  // } else if (guessString.includes("pretty")){
  //     makeAnswerAppear("Whaaaat");
  // }
  
}
