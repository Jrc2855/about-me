'use strict';

console.log('Hello World');

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Please answer yes or no to the following questions.`);

function firstQuestion() {
  let questionOne = prompt('Do I live in Philadelphia?').toLowerCase();
  if(questionOne === 'yes' || questionOne === 'y') {
    alert('Correct');
  // console.log('Correct')
  } else if (questionOne === 'no' || questionOne === 'n'){
    alert('Incorrect, I live in the Philadelphia.');
  // console.log('Incorrect, I live in the Philadelphia.')
  }
}
firstQuestion();

function secondQuestion() {
  let questionTwo = prompt('Did I borned in China?').toLowerCase();
  if(questionTwo === 'yes' || questionTwo === 'y') {
    alert('Correct');
  // console.log('Correct')
  } else if (questionTwo === 'no' || questionTwo === 'n'){
    alert('Incorrect, I borned in China.');
  // console.log('Incorrect, I borned in China.')
  }
}
secondQuestion();

function thirdQuestion() {
  let questionThree = prompt('Did I joined the US Army?').toLowerCase();
  if(questionThree === 'yes' || questionThree === 'y') {
    alert('Incorrect, I joined the US Navy.');
  // console.log('Incorrect, I joined the US Navy.')
  } else if (questionThree === 'no' || questionThree === 'n'){
    alert('Correct');
  // console.log('Correct')
  }
}
thirdQuestion();

function fourthQuestion() {
  let questionFour = prompt('Do I like to play Poker?').toLowerCase();
  if(questionFour === 'yes' || questionFour === 'y') {
    alert('Correct');
  // console.log('Correct')
  } else if (questionFour === 'no' || questionFour === 'n'){
    alert('Incorrect, I like to play Poker.');
  // console.log('Incorrect, I like to play Poker.')
  }
}
fourthQuestion();

function fifthQuestion() {
  let questionFive = prompt('Am I a real estate agent?').toLowerCase();
  if(questionFive === 'yes' || questionFive === 'y') {
    alert('Correct');
  // console.log('Correct')
  } else if (questionFive === 'no' || questionFive === 'n'){
    alert('Incorrect, I am a real estate agent.');
  // console.log('Incorrect, I am a real estate agent.')
  }
}
fifthQuestion();

alert(`Thanks for playing, ${userName}. Thanks for coming to my site!`);

function sixthQuestion() {
  let myNum = 8;
  let guessRemain = 4;
  let userGuess = prompt('Guess what number I am thinking of: Pick a number between 1 to 10');
  while (guessRemain > 0) {
    if (userGuess > myNum) {
      alert('Your number is too High');
    } else if (userGuess < myNum) {
      alert('Your number is too Low');
    } else {
      alert('You got the correct number');
      break;
    }

    guessRemain --;
    if (guessRemain === 0){
      alert('You out of attempt');
    } else {
      userGuess = prompt('Guess what number I am thinking of: Pick a number between 1 to 10');
    }
  }
}
sixthQuestion();

function seventhQuestion() {
  let countries = ['japan', 'korea', 'england', 'france', 'thailand', 'canada', 'brazil', 'egypt', 'germany', 'indonesia'];
  let guesses = 6;
  let isCorrect = false;
  while(guesses > 0) {
    let guess = prompt('Guess what country do I like to visit?').toLowerCase();
    for (let i = 0; i < countries.length; i++) {
      if (countries[i] === guess) {
        alert('You got the right answer.');
        isCorrect = true;
      }
    }
    if (isCorrect){
      break;
    }
    guesses --;
  }
}
seventhQuestion();

alert('The correct answers are Japan, Korea, England, France, Thailand, Canada, Brazil, Egypt, Germany, Indonesia.');
