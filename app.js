document.addEventListener('DOMContentLoaded', function(){
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
let currentQuestionIndex = 0;

const questions = [
  {
    question: 'What is the capital of France?',
    answers: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Mars'
  },
  // Add more questions as needed
];

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.style.display = 'none';
  currentQuestionIndex = 0;
  questionContainer.style.display = 'block';
  answerButtons.style.display = 'flex';
  nextButton.style.display = 'none';
  setNextQuestion();
}



function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionContainer.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(question, answer));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(question, selectedAnswer) {
  const isCorrect = selectedAnswer === question.correctAnswer;
  setStatusClass(document.body, isCorrect);
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.innerText === question.correctAnswer);
  });
  nextButton.style.display = 'block';
}

function setStatusClass(element, isCorrect) {
  clearStatusClass(element);
  if (isCorrect) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}


})