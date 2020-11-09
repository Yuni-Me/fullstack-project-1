/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  { 
    quote: 'He felt about books as doctors feel about medicines, or managers about plays - cynical, but hopeful.',
    source: 'Dame Rose Macaulay',
    citation: 'Crewe Train',
    year: 1926
  },
  { 
    quote: 'Contrary to general belief, I do not believe that friends are necessarily the people you like best, they are merely the people who got there first.',
    source: 'Peter Ustinov',
    citation: 'Dear Me',
    year: 1977
  },
  { 
    quote: "It really doesn't matter if the person who hurt you deserves to be forgiven. Forgiveness is a gift you give yourself. You have things to do and you want to move on.",
    source: "Gordon Atkinson",
    citation: "RealLivePreacher.com Weblog",
    year: 2003
  }, 
  {
    quote: "Life isn't simple. But the beauty of it is, you can always start over. It'll get easier.",
    source: "Alacia Bessette",
    citation: "Simply from Scratch",
    year: 2010
  },
  {
    quote: "There are painters who transform the sun to a yellow spot, but there are others who with the help of their art and their intelligence, transform a yellow spot into the sun.",
    source: "Pablo Picasso",
    citation: "",
    year: 1907
  },
  {
    quote: "It is the duty of every citizen according to his best capacities to give validity to his convictions in political affairs.",
    source: "Albert Einstein",
    citation: "Treasury for the Free World",
    year: 1946
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length) + 1;
  const randomQuote = quotes[randomNumber];
  return randomQuote;
}


/***
 * `printQuote` function
***/
function printQuote(){
  console.log(getRandomQuote());
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);