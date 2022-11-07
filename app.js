const questions = [ //this object i will use to pick out the questions and answers from
    {
      question: ' Which of the following is an advantage of using JavaScript?',
      answers: [
        { text: 'Less server interaction', correct: false },
        { text: 'Immediate feedback to the visitors', correct: false },
        { text: ' Increased interactivity', correct: false },
        { text: ' All of the above.', correct: true },
      ]
    },
    {
      question: 'Which of the following is the correct syntax to print a page using JavaScript? ',
      answers: [
        { text: 'window.print();', correct: true },
        { text: ' browser.print();', correct: false },
        { text: 'navigator.print();', correct: false },
        { text: 'document.print();', correct: false }
      ]
    },
    {
      question: 'Which built-in method reverses the order of the elements of an array?',
      answers: [
        { text: 'changeOrder(order)', correct: false },
        { text: 'reverse()', correct: true },
        { text: 'sort(order)', correct: false },
        { text: 'None of the about', correct: false },
      ]
    },
    {
      question: 'The != and !== symbols both work the same for inequality comparisons:',
      answers: [
        { text: 'True', correct: false },
        { text: 'False', correct: true },
      ]
    },
    {
        question:'The expression 8 >= 8 evaluates to',
        answers: [
            {text: 'False', correct: true },
          {text: 'True', correct: false },
        ]
    },
    {
        question:'How to write an IF statement in JavaScript?',
        answers: [
          {text: 'if (i == 5)  ', correct: true },
          {text: 'if i == 5 then', correct: false },
          {text: 'if i = 5 then', correct: false },
          {text: 'if i=5', correct: false },
        ]
    },
    {
      question:'How does a WHILE loop start?',
      answers: [
        {text: 'while (i <= 10)  ', correct: true },
        {text: 'while (i <= 10; i++)', correct: false },
        {text: 'while i = 1 to 10', correct: false },
      ]
  },
]

//created variable of  everything that i will need buttons
let startButton = document.getElementById('start-btn')
let nextButton = document.getElementById('next-btn')

let questionContainerElement = document.getElementById('question-container')
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex 
let title = document.getElementById('title') 

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
  console.log(setNextQuestion)
})
function play() {   
  var beepsound = new Audio(   
    'https://www.soundjay.com/buttons/sounds/button-17.mp3');   
  beepsound.play();   
}   
function playnext() {   
  var beepsound = new Audio(src="https://www.soundjay.com/buttons/sounds/button-32.mp3")
  beepsound.play();   
}   

function buzzer(){
  var beepsound = new Audio(   
    'https://www.soundjay.com/misc/sounds/fail-buzzer-02.mp3');   
  beepsound.play();   
}   
function applause(){
  var beepsound = new Audio(   
    'https://www.soundjay.com/human/sounds/applause-6.mp3');   
  beepsound.play();   
}   
function finished() {
  // var myDiv = document.getElementById("GFG");
  // var button = document.createElement('BUTTON');
  // var text = document.createTextNode("Button");
  // button.appendChild(text);
  // myDiv.appendChild(button); ;
questionElement.innerHTML = "YOU'RE AWESOME GOODJOB!!"
answerButtonsElement.classList.add('hide');
nextButton.classList.add('hide');

setTimeout(function(){
  alert('SHUFFLING NEW QUESTION RELOADING...');
  location.reload();
}, 1000);



}

function startGame() { //at the start of the game one the start button is clicked it will hide and 
  
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
// console.log(shuffledQuestions)

  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()

  let count = 30;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;localStorage
  count--;
  if (count === 0){
    clearInterval(interval);
    applause();
    
    document.getElementById('count').innerHTML= 'Done!!';
    let elementq = document.getElementById("title");
    elementq.innerHTML = "Keep Practicing";
    finished()

    // location.reload();
    // alert("You're out of time! TRY AGAIN (:");
  }
}, 1000);
}



function showQuestion(question) { //function shows question and hidens the next button if nothing is answered
  questionElement.innerText = question.question
  question.answers.forEach(answer => { // getting an error here not to sure why
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
function setNextQuestion() { 
  reset()

  showQuestion(shuffledQuestions[currentQuestionIndex]) //"cannot read properties of undefines(reading "for
}
// function to show questions upon 

function reset() { 
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
 
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
   
   
    setStatusClass(button, button.dataset.correct)
  })
  
  if (shuffledQuestions.length > currentQuestionIndex + 1) { //hide button 
    nextButton.classList.remove('hide')
    
  } else {
    
    startButton.innerText = 'Restart'//CHANGE TO RESTART
    startButton.classList.remove('hide');
    
  }
}

function setStatusClass(element, correct) {
  
  
  clearStatusClass(element)
 
  if (correct) {
    element.classList.add('correct')
    console.log("answer is correct ")
   
  }  
  else {
    element.classList.add('wrong')
    console.log('answer is incorrect')
    
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// 1 start game with start button
// 2 hide the button
// 3 show next question
// 4hide the next button until answered is shown
// 5 once next is clicked go to the next question 
// 6same thing until the end where it
//add sounds
//add timer
