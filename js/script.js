/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//quotes array of objects with keys such as quote,source,tag,citation, and year.
const quotes = [
  {
    quote: 'Efforts and courage are not enough without purpose and directions.',
    source: 'JFK'
  },
  {
    quote: 'Success consists of going from failure to failure without loss of enthusiasm.',
    source: 'Winstone Churchill'
  },
  {
    quote: 'All great achievements require time',
    source: 'Maya Angelou'
  },
  {
    quote: 'Believe you can and you are halfway there',
    source: 'Theodore Roesevelt',
    citation: 'Roosevelt spoke these words at his alma mater, Harvard',
    year: 'June 28th, 1905'
  },
  {
    quote: 'A man is not finished when he is defeated; he is finished when he quits',
    source: 'Richard Nixon'
  },
  {
    quote: 'It always seems impossible until it is done',
    source: 'Nelson Mandela'
  },
  {
    quote: 'The seeds of greatness are planted in the daily grind',
    source: 'Adam Grant'
  },
  {
    quote: 'Plan your work and work your plan',
    source: 'Napoleon Hill',
    tag: '#motivational'
  },
  {
    quote: 'The key to success is to focus on goals, not obstacles',
    source: 'unknown'
  }
];


//an array of background colors that will be randomly selected along with a quote
const backgroundColors =[
  '#9DE0AD', '#594F4F', '#45ADA8', 
  '#355C7D', '#A8E6CE', '#DCEDC2', 
  '#FFD3B5', '#FFAAA6', '#FF8c94'
];


//a function that randomly select and return an object of the quotes array
function getRandomQuote () {
  let randomIndex = Math.floor(Math.random () * quotes.length);
  return quotes[randomIndex];
};

//a function that ramdonly select and return a color from the backgroundColors array
function getRandomColor () {
  let randomIndex = Math.floor(Math.random () * backgroundColors.length);
  return backgroundColors[randomIndex];
};

//a function to call randomly selected quote and color and display the keys of the object depending on its availability and display color
function printQuote () {
  let randomQuote = getRandomQuote();
  let randomColor = getRandomColor();
  let message =`<p class='quote'>${randomQuote.quote}</p>`;
    message += `<p class='source'>${randomQuote.source}`;
    if (randomQuote.citation) {
      message += `<span class='citation'>${randomQuote.citation}</span>`;
    }
    if (randomQuote.year) {
      message += `<span class='year'>${randomQuote.year}</span>`;
    }
    if (randomQuote.tag) {
      message += `<span class='tag'>${randomQuote.tag}</span></p>`
    }

    document.getElementById('quote-box').innerHTML = message; 
    document.querySelector('body').style.backgroundColor = randomColor;

};


//a setInterval method to automatically change from one object to another from the quotes array
setInterval(function() {
  printQuote();
}, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);