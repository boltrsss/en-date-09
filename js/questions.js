const questions = [
  {
    question: 'Do you like older women?*',
    answers: [
      {
        text: "Yes",
      },
      {
        text: "No",
      }
    ],
    question_id: 1,
  },
  {
    question: 'Do you promise to keep all identities a secret?*',
    answers: [
      {
        text: "Yes",
      },
      {
        text: "No",
      }
    ],
    question_id: 2,
  },  
  {
    question: 'What kind of body gets you excited?*',
    answers: [
      {
        text: "MILF",
      },
      {
        text: "Big Breasts",
      },
      {
        text: "Great Ass",
      },
      {
        text: "BBW"
      },
      {
        text: "Average"
      },
      {
        text: "Other"
      }
    ],
    question_id: 3,
  },
  {
    question: 'What kind of relationship are you looking for?',
    answers: [
      {
        text: "One Night Stand",
      },
      {
        text: "Sex on different occasions",
      },
      {
        text: "Regular sex",
      },
      {
        text: "Dating",
      },
      {
        text: "Marriage",
      }      
    ],
    question_id: 4,
  },
  {
    question: 'Distance between you and her?',
    answers: [
      {
        text: "Walking distance",
      },
      {
        text: "Same city",
      },
      {
        text: "Nearby cities are OK",
      },
      {
        text: "Same country",
      },
      {
        text: "Doesn't matter",
      }
    ],
    question_id: 5,
  }
];

const arrowSVG = '<svg fill="#2a2729" height="15" width="11"><path d="M7.586 5L4.293 1.707 5.707.293 10.414 5 5.707 9.707 4.293 8.293z"></path><path d="M8 4v2H0V4z"></path></svg>';

let currentQuestionIndex = -1; 
let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answer-buttons');
let answerButtonsLinks = document.getElementById('answer-buttons__links');
let startButton = document.getElementById('start-button');
let startButtonBox = document.getElementById('start-button-box');
let resultMessage = document.getElementById('result-message');
let resultPercentage = document.getElementById('result-percentage');
let loadingGif = document.getElementById('loading-gif');
let btn = document.getElementById('btn');


function startQuiz() {
    startButtonBox.style.display = 'none';
    setNextQuestion();
}

function setNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        answerButtonsLinks.classList.add('show');
        questionElement.style.display = 'none';
        answerButtonsElement.style.display = 'none';
    } else {
        showQuestion(questions[currentQuestionIndex]);
    }
}

function showQuestion(data) {
    resetState();

    const questionNumber = document.createElement('span');
    questionNumber.innerHTML = `${data.question_id} ${arrowSVG} `;
    questionNumber.classList.add('question-number');
    questionElement.innerHTML = '';
    questionElement.appendChild(questionNumber);
    questionElement.innerHTML += data.question;

    data.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        const answerText = `<span class="text-count">${String.fromCharCode(97 + index)}. </span>${answer.text}`;
        button.innerHTML = answerText;
        button.classList.add('button');

        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

btn.addEventListener('click', () => {
  answerButtonsLinks.classList.remove('show');
    setTimeout(() => {
        loadingGif.style.display = 'block';
        answerButtonsLinks.classList.remove('show');
    }, 100);

    setTimeout(() => {
        loadingGif.style.display = 'none';
        resultMessage.style.display = 'block';
        const randomPercentage = (Math.random() * (35 - 10) + 10).toFixed(2);
        resultPercentage.textContent = randomPercentage;
    }, 4000);
});


function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer() {
    setNextQuestion();
}

startButton.addEventListener('click', startQuiz);

