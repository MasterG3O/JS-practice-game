const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
    {
      question: 'Who is the best YouTuber?',
      answers: [
        { text: 'Web Dev Simplified', correct: true },
        { text: 'Traversy Media', correct: true },
        { text: 'Dev Ed', correct: true },
        { text: 'Fun Fun Function', correct: true }
      ]
    },
    {
      question: 'Is web development fun?',
      answers: [
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: true },
        { text: 'Um no', correct: false },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'What is 4 * 2?',
      answers: [
        { text: '6', correct: false },
        { text: '8', correct: true }
      ]
    }
]
const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const againBtn = document.getElementById('play-A');

    let shuffledQuestions, currentQuestionIndex

    submitBtn.addEventListener('click', startGame)
    play-A.addEventListener('click', () => {
      currentQuestionIndex++
      setNextQuestion()
    })




function startGame() {
    submitBtn.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
   
    setNextQuestion()
  }
      function setNextQuestion() {
        resetState()
        showQuestion(shuffledQuestions[currentQuestionIndex])
      }

      function showQuestion(question) {
        questionElement.innerText = questions.question
        question.answers.forEach(answer => {
          const button = document.createElement('button')
          button.innerText = answer.text
          button.classList.add('btn')
          if (answer.correct) {
            button.dataset.correct = answers.correct
          }
          button.addEventListener('click', selectAnswer)
          answerButtonsElement.appendChild(button)
        })
      }
      