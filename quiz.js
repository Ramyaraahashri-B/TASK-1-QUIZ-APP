const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Rome", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestionData = quizData[currentQuestion];

    questionElement.textContent = `Question ${currentQuestion + 1}: ${currentQuestionData.question}`;

    optionsContainer.innerHTML = "";
    currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(answer) {
    const currentQuestionData = quizData[currentQuestion];
    if (answer === currentQuestionData.correctAnswer) {
        score++;
    }

    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    alert(`Quiz completed!\nYour score: ${score} out of ${quizData.length}`);
    // Optionally, you can reset the quiz or redirect to another page.
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Initial load
loadQuestion();
