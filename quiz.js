const quizData = [
    {
        question: "Which of the following syntax is correct for CREATE DATABASE Statement?",
        options: [
            "CREATE=DATABASE studentAttendance",
            "CREATE DATABASE = StudentAttendance",
            "CREATE DATABASE StudentAttendance"
        ],
        correct: "CREATE DATABASE StudentAttendance"
    },
    {
        question: "Which is the Correct syntax to drop a table?",
        options: [
            "DROP TABLE table_name",
            "DROP TABLE table_name;",
            "DROP DATABASE table-name;"
        ],
        correct: "DROP TABLE table_name;"
    },
    {
        question: "Which DML command is used to add a new row to a table?",
        options: [
            "INSERT INTO",
            "ALTER TABLE",
            "UPDATE"
        ],
        correct: "INSERT INTO"
    },
    {
        question: "What is the purpose of a cursor in SQL?",
        options: [
            "To retrieve a single row from a result set",
            "To retrieve multiple rows one at a time from a result set",
            "To create a temporary table"
        ],
        correct: "To retrieve multiple rows one at a time from a result set"
    },
    {
        question: "Which of the following is not a valid step when using a cursor?",
        options: [
            "DECLARE cursor",
            "OPEN cursor",
            "ALTER cursor"
        ],
        correct: "ALTER cursor"
    },
    {
        question: "Which type of trigger is executed before an insert operation in SQL?",
        options: [
            "AFTER INSERT",
            "BEFORE INSERT",
            "AFTER UPDATE"
        ],
        correct: "BEFORE INSERT"
    },
    {
        question: "What is the correct order of steps when using a cursor in SQL?",
        options: [
            "DECLARE, OPEN, FETCH, CLOSE",
            "OPEN, DECLARE, FETCH, CLOSE",
            "FETCH, DECLARE, OPEN, CLOSE"
        ],
        correct: "DECLARE, OPEN, FETCH, CLOSE"
    },
    {
        question: "What is the role of the AFTER DELETE trigger?",
        options: [
            "It runs after a row is deleted from a table",
            "It runs before a row is deleted from a table",
            "It fetches data after deletion",
        ],
        correct: "It runs after a row is deleted from a table"
    }
];

let score = 0;

const quizContainer = document.getElementById("quiz");
const resultButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");

function loadQuiz() {
    quizData.forEach((quizItem, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `<p>${index + 1}. ${quizItem.question}</p>`;
        quizItem.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement("div");
            optionElement.innerHTML = `
                <input type="radio" name="question${index}" id="option${index}-${optionIndex}" value="${option}">
                <label for="option${index}-${optionIndex}">${option}</label>`;
            questionElement.appendChild(optionElement);
        });

        quizContainer.appendChild(questionElement);
    });
}
function checkAnswers() {
    quizData.forEach((quizItem, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === quizItem.correct) {
            score++;
        }
    });
    scoreElement.innerText = `Thanks for attending! You scored ${score}/${quizData.length}`;
    scoreElement.style.display = 'block';
}
resultButton.addEventListener("click", () => {
    checkAnswers();
    resultButton.style.display = 'none'; 
});
loadQuiz();
