import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { START_QUIZ_BUTTON_ID } from './constants.js';
const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
};

window.addEventListener('load', loadApp);
console.log(START_QUIZ_BUTTON_ID);
