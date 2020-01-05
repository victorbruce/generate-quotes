const prompt = require('prompt');

// create sentences
const beginning = [
  "The way to get started is to quit talking",
  "The Pessimist Sees Difficulty In Every Opportunity", 
  "You Learn More From Failure Than From Success" 
]

const middle = [
  "and ",
  "whilst ",
  "don’t let it stop your"
]

const end = [
  "begin doing",
  "the optimist sees opportunity in every difficulty",
  "failure builds character."
]


// Generate code a number of times
const numberOfQuotesToGenerate = (number) => {
  if ((number > 1) && (number < 5)) {
    for (let i=0; i<number; i++) {
      getRandomQuote();
    }
  } else if (typeof(number) !== 'number') {
    console.log('Please enter a number');
    // getUserInput();
  } else {
    console.log('Please enter a number between (1 and 5)');
    // getUserInput();
  }
  console.log('Press 1 to run again and 0 to exist ')
  prompt.start()
  prompt.get(['run'], function(err, result) {
    if (result.run == 0) {
      return;
    }else {
      getUserInput()
    }
  }) 
}

// Function to generate code randomly
const getRandomQuote = () => { 
  let randomBeginning = Math.floor(Math.random() * beginning.length);
  let randomMiddle = Math.floor(Math.random() * middle.length);
  let randomEnd = Math.floor(Math.random() * end.length);
  console.log(`${beginning[randomBeginning]} ${middle[randomMiddle]} ${end[randomEnd]}`);
} 

const getUserInput = () => {
  // Prompt user for input
  console.log('Please select the number of quotes to generate(between 1 and 5):')

  // Get user input
  prompt.start();
  
  prompt.get(['number'], function (err, result) {
   if (err) {
     console.log(err);
     return;
   }
    // Run function to generate quote
   numberOfQuotesToGenerate(result.number);
  });
}

getUserInput();