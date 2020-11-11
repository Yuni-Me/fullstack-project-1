/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array with the various quote objects 
***/
const quotes = [
  { 
    quote: 'He felt about books as doctors feel about medicines, or managers about plays - cynical, but hopeful.',
    source: 'Dame Rose Macaulay',
    citation: 'Crewe Train',
    year: 1926,
    tag: 'Humor'
  },
  { 
    quote: 'Contrary to general belief, I do not believe that friends are necessarily the people you like best, they are merely the people who got there first.',
    source: 'Peter Ustinov',
    citation: 'Dear Me',
    year: 1977,
    tag: 'Life'
  },
  { 
    quote: "It really doesn't matter if the person who hurt you deserves to be forgiven. Forgiveness is a gift you give yourself. You have things to do and you want to move on.",
    source: "Gordon Atkinson",
    citation: "RealLivePreacher.com Weblog",
    year: 2003,
    tag: 'Life'
  }, 
  {
    quote: "Life isn't simple. But the beauty of it is, you can always start over. It'll get easier.",
    source: "Alacia Bessette",
    citation: "Simply from Scratch",
    year: 2010,
    tag: 'Life'
  },
  {
    quote: "There are painters who transform the sun to a yellow spot, but there are others who with the help of their art and their intelligence, transform a yellow spot into the sun.",
    source: "Pablo Picasso",
    year: 1907
  },
  {
    quote: "It is the duty of every citizen according to his best capacities to give validity to his convictions in political affairs.",
    source: "Albert Einstein",
    citation: "Treasury for the Free World",
    year: 1946,
    tag: 'Politics'
  },
  {
    quote: "Freedom is never more than one generation away from extinction. We didn't pass it to our children in the bloodstream. It must be fought for, protected, and handed on for them to do the same.",
    source: "Ronald Reagan",
    tag: 'Politics'
  },
  {
    quote: "The optimist proclaims that we live in the best of all possible worlds; and the pessimist fears this is true.",
    source: "James Branch Cabell",
    citation: 'The Silver Stallion',
    year: 1926,
    tag: 'Optimism'
  },
  {
    quote: "Happy families are all alike; every unhappy family is unhappy in its own way.",
    source: "Leo Tolstoy",
    citation: 'Anna Karenina',
    tag: 'Family'
  }
];


/***
 * `getRandomQuote` function
 *  This function returns a random quote from the quotes array
***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNumber];
  return randomQuote;
}

/***
 * `getRandomBackground` function
 *  This function returns a background color from the colors array
***/
function getRandomBackground() {
  const colors = ['#ff9a9e', '#868f96', '#87ceeb', '#3ac162', '#c79081', '#09203f', '#667eea', '#b44eac'];
  const randomNumber = Math.floor(Math.random() * colors.length);
  const backgroundColor = colors[randomNumber];
  return backgroundColor;
}

/***
 * `printQuote` function
 *  This function gets a random quote and a random background color after calling 
 *  the getRandomQuote() and the getRandomBackground()
 *  and displays the new quote with the corresponding properties if present.
***/
function printQuote(){
  let randomQuote = getRandomQuote();
  let randomBackgroundColor = getRandomBackground()
  
  let htmlString = `<p class="quote">${randomQuote.quote}</p> 
    <p class="source">${randomQuote.source}`;

  // makes sure the property is present before trying to display it
  if(randomQuote.citation !== undefined){
    htmlString += `<span class="citation">${randomQuote.citation}</span>`
  }
  if(randomQuote.year !== undefined){
    htmlString += `<span class="year">${randomQuote.year}</span>`
  }
  htmlString += `</p>`
  if(randomQuote.tag !== undefined){
    htmlString += `<p class="tag">${randomQuote.tag}</p>`
  }
  
  // display a random quote with a new background color
  document.body.style.backgroundColor = randomBackgroundColor;
  document.getElementById('quote-box').innerHTML = htmlString;
}

/***
 * displays an initial random quote
 * 
***/
printQuote(); 

/***
 * quotes automatically refresh every 10 seconds
 * 
***/
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
