const beginning = [
  "The way to get started is to quit talking  ",
  "The Pessimist Sees Difficulty In Every Opportunity ", 
  "You Learn More From Failure Than From Success " 
]

const middle = [
  "and ",
  "whilst ",
  "Don’t Let It Stop You "
]

const end = [
  "begin doing",
  "The Optimist Sees Opportunity In Every Difficulty",
  "Failure Builds Character."
]

// variables
const btn = document.getElementById('btn');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

const getQuote = () => {
  let randomBeginning = Math.floor(Math.random() * beginning.length);
  let randomMiddle = Math.floor(Math.random() * middle.length);
  let randomEnd = Math.floor(Math.random() * end.length);
quote.innerHTML = `<span>"</span>${beginning[randomBeginning]} ${middle[randomMiddle]} ${end[randomEnd]}<span>"</span>`;
} 

// event listeners
btn.addEventListener('click', getQuote);