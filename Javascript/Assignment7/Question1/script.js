// // Define your quiz questions and answers
// var questions = [
//   {
//     question: "What is the capital of France?",
//     options: ["Paris", "London", "Madrid", "Berlin"],
//     answer: "Paris",
//   },
//   {
//     question: "Who painted the Mona Lisa?",
//     options: [
//       "Leonardo da Vinci",
//       "Pablo Picasso",
//       "Vincent van Gogh",
//       "Michelangelo",
//     ],
//     answer: "Leonardo da Vinci",
//   },
//   // Add more questions here
// ];

// var currentQuestion = 0;
// var score = 0;
// var leaderboard = [];

// // Initialize the quiz
// function initializeQuiz() {
//   showQuestion();
// }

// var optionElement = document.createElement("option");
// optionElement.value = option;
// optionElement.innerText = option;
// optionsElement.appendChild(optionElement);

// // Show the current question and answer options
// function showQuestion() {
//   var questionElement = document.getElementById("question");
//   var optionsElement = document.getElementById("options");

//   if (currentQuestion < questions.length) {
//     var question = questions[currentQuestion].question;
//     var options = questions[currentQuestion].options;

//     questionElement.textContent = question;

//     optionsElement.innerHTML = "";

//     var selectElement = document.createElement("select");
//     selectElement.name = "option";
//     options.forEach(function (option, index) {
//       var optionElement = document.createElement("option");
//       optionElement.value = option;
//       optionElement.innerText = option;
//       selectElement.appendChild(optionElement);
//     });

//     optionsElement.appendChild(selectElement);
//   } else {
//     // If all questions have been answered, show the leaderboard
//     showLeaderboard();
//   }
// }

// // Check the selected answer and provide feedback
// function checkAnswer() {
//   var options = document.getElementsByName("option");
//   var selectedOption = "";

//   options.forEach(function (option) {
//     if (option.checked) {
//       selectedOption = option.value;
//     }
//   });

//   if (selectedOption === questions[currentQuestion].answer) {
//     score++;
//     showPopup("Correct!", "green");
//   } else {
//     showPopup("Wrong!", "red");
//   }

//   currentQuestion++;
//   showQuestion();
// }

// // Show a popup message with the given text and color
// function showPopup(text, color) {
//   var popupElement = document.getElementById("popup");
//   popupElement.style.color = color;
//   popupElement.textContent = text;
//   popupElement.style.display = "block";

//   setTimeout(function () {
//     popupElement.style.display = "none";
//   }, 2000);
// }

// // Show the leaderboard with scores of all participants
// function showLeaderboard() {
//   var leaderboardElement = document.getElementById("leaderboard");
//   leaderboardElement.innerHTML = "";

//   leaderboard.push({ score: score, total: questions.length });

//   var table = document.createElement("table");
//   var tableHeader = table.createTHead();
//   var tableRow = tableHeader.insertRow();
//   var th1 = document.createElement("th");
//   var th2 = document.createElement("th");
//   th1.innerText = "Score";
//   th2.innerText = "Total";
//   tableRow.appendChild(th1);
//   tableRow.appendChild(th2);

//   leaderboard.forEach(function (entry) {
//     var tableRow = table.insertRow();
//     var cell1 = tableRow.insertCell();
//     var cell2 = tableRow.insertCell();
//     cell1.innerText = entry.score;
//     cell2.innerText = entry.total;
//   });

//   leaderboardElement.appendChild(table);
// }

// // Start the quiz
// initializeQuiz();

// Quiz Questions

// Quiz Questions
const questions = [
  {
    question: "What is the capital of France?",
    options: ["A. London", "B. Paris", "C. Rome", "D. Madrid"],
    answer: "B",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "A. Vincent van Gogh",
      "B. Leonardo da Vinci",
      "C. Pablo Picasso",
      "D. Michelangelo",
    ],
    answer: "B",
  },
];

// Variables
let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let leaderboard = [];

// Function to display next question
function displayQuestion() {
  const quiz = document.getElementById("quiz");
  const questionData = questions[currentQuestion];

  quiz.innerHTML = `
        <h2>Question ${currentQuestion + 1}:</h2>
        <p>${questionData.question}</p>
        <select id="dropdown">
          ${questionData.options
            .map((option) => `<option value="${option[0]}">${option}</option>`)
            .join("")}
        </select>
        <br>
        <button onclick="checkAnswer()">Submit Answer</button>
      `;
}

// Function to check the selected answer
function checkAnswer() {
  const selectedOption = document.getElementById("dropdown").value;
  const answer = questions[currentQuestion].answer;
  const result = document.getElementById("result");

  if (selectedOption === answer) {
    result.innerHTML = "<p>Status: Correct answer!</p>";
    correctAnswers++;
  } else {
    result.innerHTML = `<p>Status: Wrong answer! The correct answer is ${answer}.</p>`;
    incorrectAnswers++;
  }

  result.style.display = "block";

  if (currentQuestion === questions.length - 1) {
    showLeaderboard();
  } else {
    currentQuestion++;
    setTimeout(displayQuestion, 2000);
  }
}

// Function to show the leaderboard
function showLeaderboard() {
  const leaderboardDiv = document.getElementById("leaderboard");
  const scoresTable = document.getElementById("scores");
  const playerName = prompt("Please enter your name:");

  leaderboard.push({
    name: playerName,
    correct: correctAnswers,
    incorrect: incorrectAnswers,
  });

  leaderboardDiv.style.display = "block";

  for (let i = 0; i < leaderboard.length; i++) {
    const row = scoresTable.insertRow(-1);
    const nameCell = row.insertCell(0);
    const correctCell = row.insertCell(1);
    const incorrectCell = row.insertCell(2);

    nameCell.innerHTML = leaderboard[i].name;
    correctCell.innerHTML = leaderboard[i].correct;
    incorrectCell.innerHTML = leaderboard[i].incorrect;
  }
}

// Start the quiz
displayQuestion();
