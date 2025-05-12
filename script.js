const questions = [
    {
      question: "Which HTML tag is used to define semantic navigation links?",
      options: ["<nav>", "<section>", "<aside>", "<menu>"],
      answer: "<nav>"
    },
    {
      question: "What is the purpose of the 'aria-label' attribute in HTML?",
      options: ["Styles the element", "Provides accessibility information", "Links to external CSS", "Controls animations"],
      answer: "Provides accessibility information"
    },
    {
      question: "What is the default value of the 'position' property in CSS?",
      options: ["relative", "absolute", "static", "fixed"],
      answer: "static"
    },
    {
      question: "What is the result of [] + [] in JavaScript?",
      options: ["0", "[]", "\"\"", "undefined"],
      answer: "\"\""
    },
    {
      question: "Which of the following is NOT a primitive data type in JavaScript?",
      options: ["String", "Object", "Boolean", "Undefined"],
      answer: "Object"
    },
];

const count = document.querySelector('#count');
const time  = document.querySelector('#time');
const questionTab = document.querySelector('#Question');
const answers = document.querySelector('#answer-container')
const nextBtn = document.querySelector('#next');
const startBtn = document.querySelector('#start');
const finishTab = document.querySelector('#finish');
const startOver = document.querySelector('#over')
const scoreTab = document.querySelector('#scoreTab')

let currentGameIndex = 0;
let score  = 0;

startBtn.addEventListener('click', () => {
   document.querySelector('#begin').classList = 'hidden';
   document.querySelector('#mainGame').classList.remove('hidden');
   startGame()
})

function startGame() {
 
  answers.innerHTML = ''
  nextBtn.classList.add('hidden')

  currentQuestion = questions[currentGameIndex];
  count.textContent = currentGameIndex + 1;
  questionTab.innerHTML = currentQuestion.question;

  currentQuestion.options.forEach(option => {
     const ansBtn = document.createElement('button');
     ansBtn.classList = 'bg-gray-400 pl-4 py-2 mt-4 rounded-md hover:bg-gray-200';
     ansBtn.textContent = option;
     answers.appendChild(ansBtn);

     ansBtn.addEventListener('click', ()=> {

    const allBtns = answers.querySelectorAll('button');
      allBtns.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('hover:bg-gray-200');
      });

      if (ansBtn.textContent === currentQuestion.answer){
        ansBtn.classList.remove('bg-gray-400')
        ansBtn.classList.add('bg-green-400')
        score++
      } else {
        ansBtn.classList.remove('bg-gray-400')
        ansBtn.classList.add('bg-red-400')
      }

      nextBtn.classList.remove('hidden')
     })
  });
} 
  
nextBtn.addEventListener('click',() => {
  currentGameIndex++
   if(currentGameIndex < questions.length) {
    startGame()
   } else {
      document.querySelector('#mainGame').classList.add('hidden');
      finishTab.classList.remove('hidden')
      scoreTab.innerHTML = score
   }

})

startOver.addEventListener('click', () => {
  location.reload()
})