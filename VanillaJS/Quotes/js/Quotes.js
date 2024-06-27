const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "To Travel is to Live",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Never go on trips with anyone you do ntot love.",
    author: "Hemmingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "Hilaire Belloc",
  },
  {
    quote: "Travel expands the mind and fills the gap.",
    author: "Sheda Savage",
  },
];

const quote = document.querySelector("#quote span:first-child");
// id가 quote인 element의 첫번째 span 가져오기
const author = document.querySelector("#quote span:last-child");
// id가 quote인 element의 마지막 span 가져오기

// console.log(quotes[0]);
// 첫번째 element를 가져오려면 [0]
// 마지막 element를 가져오려면 Array 갯수 - 1 [10 - 1]
// 모든 element를 가져오려면 [0-9]
// element의 갯수를 다 세는 것은 너무 하드 코딩임
// quotes.length == element 갯수

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;