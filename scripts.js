const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const timerContainerElement = document.getElementById('timer-container')
const questionContainerElement = document.getElementById('question-container')
const resultsContainerElement = document.getElementById('results-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex
let score = 0;
let time = 50

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startQuiz(){
    console.log('started')
    startButton.classList.add('hide')
    resultsContainerElement.classList.add('hide')
    timerContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    score = 0;
    questionContainerElement.classList.remove('hide')

    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (correct){
        score = score + 20
        console.log(score)
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove('hide')
    }
    else{
        endQuiz();
    }
}

function endQuiz() {
    alert('your score is ' + score)
    questionContainerElement.classList.add('hide')
    resultsContainerElement.classList.remove('hide')
    timerContainerElement.classList.add('hide')
    document.getElementById("score").innerHTML = score
    
}

function scoreForm(){
    let initials = window.prompt("Enter your initials")
    alert (initials + ' scored ' + score)
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question: 'Commonly used data types DO NOT Include:',
        answers: [
            {text: 'Strings', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'Numbers', correct: false},
            {text: 'Alerts', correct: true}
        ]
    },
    {
        question: 'The condition of an if / else statement is enclosed with what?',
        answers: [
            {text: 'Quotes', correct: false},
            {text: 'Curly Brackets', correct: false},
            {text: 'Parenthesis', correct: true},
            {text: 'Square Brackets', correct: false}
        ]
    },
    {
        question: 'Arrays in JavaScript can be used to store what?',
        answers: [
            {text: 'Numbers and Strings', correct: false},
            {text: 'Other Arrays', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'All of the above', correct: true}
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            {text: 'JavaScript', correct: false},
            {text: 'Other Arrays', correct: false},
            {text: 'Console.log', correct: true},
            {text: 'Terminal', correct: false}
        ]
    },
    {
        question: 'String values must be enclosed within what when being assigned to variables',
        answers: [
            {text: 'Quotes', correct: true},
            {text: 'Curly Brackets', correct: false},
            {text: 'Parenthesis', correct: false},
            {text: 'Square Brackets', correct: false}
        ]
    }
]

