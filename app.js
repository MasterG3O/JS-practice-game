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
        { text: 'None of the about', correct: false }
      ]
    },
    {
      question: 'The != and !== symbols both work the same for inequality comparisons:',
      answers: [
        { text: 'True', correct: false },
        { text: 'False', correct: true }
      ]
    },
    {
        question:'The expression 8 >= 8 evaluates to',
        answer: [
            {text: 'True', correct: true },
          {  text: 'True', correct: false },
        ]
    },
    {
        question:'For strict equality comparisons, we should use:',
        answer: [
            {text: '==', correct: false },
          {  text: '===', correct: true },
        ]
    },
]

//created variable of  everything that i will need 
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button