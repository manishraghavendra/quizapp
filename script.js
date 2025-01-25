const questions = [
    {
        question: "How many hours are there in a day?",
        options: ["23", "24", "26", "27"],
        answer: "24"
      },
    {
        question: "What does HTML stands for?",
        options: ["Home tool Markup Language", "Hyper Text Mark up Language", "Hyper texting Making Language", "Hyperlinks and Text Markup Language"],
        answer: "Hyper Text Mark up Language"
      },
    {
        question: "How many days are there in a Week?",
        options: ["7", "8", "9", "10"],
        answer: "7"
      },
    {
          question: "Which method is used to select the HTML element by their class in JavaScript ?",
          options: ["document.getElementsByClassName", "document.getElementsbyClassName", "document.getelementsByClassName", "document.getElementByClassName"],
          answer: "document.getElementsByClassName"
      },
      {
        question: "What does CSS Stands for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
        answer: "Cascading Style Sheets"

      },
]

const quizContainer =  document.querySelector('.quiz-container');
const timeLeft = document.querySelector('.time-left');
const heading = document.querySelector('.heading');
const question = document.querySelector('.question');
const options = document.querySelector('.options');
const resultContainer = document.querySelector('.result-container');
const userScore = document.querySelector('.user-score');
const allAnswersContent = document.querySelector('.all-answers-content');
const allCorrectAnswers = document.querySelector('.correct-answers');
//ARRAY VARIABLE TO STORE ALL THE CORRECT ANSWERS
const correctAnswers = [ "24","Hyper Text Mark up Language", "7","document.getElementsByClassName","Cascading Style Sheets"];
// ARRAY VARIABLE TO STORE ALL THE CORRECT ANSWERS WHICH ARE SELECTED BY USERS
const userCorrectAnswers = [];
// VARIABLE TO KEEP TRACK THE VALUE OF INDEX NUMBER
let currentIndex = 0 // 1 2 3 
//FUNCTION TO DISPLAY THE QUESTION
function displayQuestion(){
    const currentQuestion = questions[currentIndex];
    question.innerHTML = currentQuestion.question;
    options.innerHTML = "";
    currentQuestion.options.forEach((option) => {
        const button = document.createElement('button');
        button.innerHTML = option; 
        button.onclick = () => checkAnswer(option)
        options.appendChild(button);
    })
    setTimer()
}
let timer;
//FUNCTION TO UPDATE THE TIME FOR EVERY SECOND
function setTimer(){
    let time = 10;
    timer = setInterval(()=> {
        // DECREASE THE TIME FOR EVERY SECOND
        time--;
        if(time >= 0){
            timeLeft.innerHTML = `Time Left : ${time} Seconds`
        }
        else{
            // CLEAR THE TIMER EVEN USER DIDN'T SELECT ANY OPTION WITHIN THE TIME
            clearInterval(timer)
            if(currentIndex < questions.length - 1){
                currentIndex++;
                displayQuestion()
            }
            else{
                displayResult()
            }
        }
    },1000)
}
// FUNCTION TO CHECK THE USER SELECTED OPTION IS CORRECT OR NOT AND ALSO TO CHECK THE currentIndex NUMBER IS LESS THAN LENGTH OF questions ARRAY OR NOT
function checkAnswer(userSelectedOption){
    // CLEAR THE TIMER ONCE USER SELECTS ANY OPTION WITHIN THE TIME 
    clearInterval(timer)
    const currentQuestion = questions[currentIndex];
    if(userSelectedOption === currentQuestion.answer){
        userCorrectAnswers.push(userSelectedOption)
    }
    console.log(userCorrectAnswers)
    if(currentIndex < questions.length-1){
        currentIndex++;
        displayQuestion()
    }
    else{
        displayResult()
    }
}
// FUNCTION TO DISPLAY THE RESULT 
function displayResult(){
    timeLeft.innerHTML = "";
    question.innerHTML = "";
    options.innerHTML = "";
    heading.innerHTML = "Your Result";
    userScore.innerHTML = `You Scored ${userCorrectAnswers.length} out of 5`;
    allAnswersContent.innerHTML = "Below all are the Correct answers";
    correctAnswers.forEach((correctanswer,index) => {
        const button =  document.createElement('button');
        button.innerHTML = `${index + 1}a. ${correctanswer}`;
        allCorrectAnswers.appendChild(button)
    })
}
displayQuestion()