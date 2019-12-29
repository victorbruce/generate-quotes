let quotes = [
  {
    "quote": "I am who I am",
    "author": "God"
  },
  {
    "quote": "Hardwork beats talent if talent fails to beat hardwork",
    "author": "Kevin Durant"
  },
  {
    "quote": "A man without vision cannot accomplish his mission",
    "author": "Victor Bruce"
  },
  {
    "quote": "Hello world",
    "author": "Programming"
  }
]

// variables
const btn = document.getElementById('btn');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

const getQuote = () => {
  let number = Math.floor(Math.random()  * quotes.length); 
  quote.innerHTML = `<span>"</span>${quotes[number].quote}<span>"</span>`;
  author.innerHTML = `<span>-- </span>${quotes[number].author}`;
} 

// event listeners
btn.addEventListener('click', getQuote);