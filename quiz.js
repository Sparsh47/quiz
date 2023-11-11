const questions = [
  "1. Who is considered the father of modern physics?",
  "2. Who formulated the laws of motion?",
  "3. The force of gravitation was first described by:",
  "4. Acceleration due to gravity depends on the:",
  "5. The formula for gravitational force is:",
  "6. According to the law of gravitation, the force between two objects is:",
  "7. The force of gravity between two objects is:",
  "8. Weight is the force with which gravity pulls an object towards:",
  "9. The standard value of acceleration due to gravity on the surface of the Earth is:",
  "10. Weight is directly proportional to:",
  "11. If the mass of an object is 5 kg, its weight on the surface of the Earth is:",
  "12. If the weight of an object is 20 N, its mass on the surface of the Earth is:",
  "13. If the force acting on an object is 60 N, and its mass is 10 kg, calculate its acceleration.",
  "14. The formula for weight is:",
  "15. If the mass of an object is 2 kg, what is its weight on the surface of the Earth?",
  "16. If the weight of an object is 4 N, what is its mass on the surface of the Earth?",
  "17. If the weight of an object is 1 N, what is the force of gravity acting on it?",
  "18. If the weight of an object is 6 N, what is the mass of the object?",
  "19. If there is no force of gravity acting on an object, its weight is:",
  "20. The acceleration due to gravity on the moon is approximately:",
  "21. If the distance between two objects is halved, how does the gravitational force between them change?",
  "22. If the mass of an object is doubled, how does its weight change?",
  "23. If the radius of the Earth is reduced to half of its present value, what will happen to the weight of objects on the surface?",
  "24. If the radius of the Earth is doubled, what will happen to the weight of objects on the surface?",
  "25. If the mass of an object is doubled, how does its acceleration due to gravity change?",
  "26. Why do astronauts in a spacecraft feel weightless?",
  "27. What is escape velocity?",
  "28. If the acceleration due to gravity is 10 m/s², what is the weight of a 2 kg object?",
  "29. What is the weight of a 1 kg object on the surface of the Earth?",
  "30. If the mass of an object is halved, how does its weight change?",
  "31. If the force of gravity acting on an object is 20 N, and its mass is 5 kg, what is its acceleration?",
  "32. If the force of gravity acting on an object is 8 N, and its mass is 2 kg, what is its acceleration?",
  "33. If the force of gravity acting on an object is 12 N, and its mass is 3 kg, what is its acceleration?",
  "34. If the force of gravity acting on an object is 25.5 N, and its mass is 5 kg, what is its acceleration?",
  "35. If the force of gravity acting on an object is 4 N, and its mass is 1 kg, what is its acceleration?",
  "36. If the force of gravity acting on an object is 75 N, and its mass is 10 kg, what is its acceleration?",
  "37. If the force of gravity acting on an object is 490 N, and its mass is 70 kg, what is its acceleration?",
  "38. Is weight directly proportional or inversely proportional to mass?",
  "39. If the mass of an object is halved, how does its acceleration due to gravity change?",
  "40. If the acceleration due to gravity is 9.8 m/s², what is the weight of a 1 kg object?",
];

const options = [
  ["Isaac Newton", "Albert Einstein", "Galileo", "Johannes Kepler"],
  ["Galileo", "Isaac Newton", "Johannes Kepler", "Albert Einstein"],
  ["Johannes Kepler", "Galileo", "Isaac Newton", "Albert Einstein"],
  [
    "density of the object",
    "distance between the objects",
    "mass of the objects",
    "size of the objects",
  ],
  ["F = G * (m1 * m2 / r^2)", "F = m * a", "F = m * g", "F = m1 * a * m2"],
  [
    "directly proportional to the distance between their centers",
    "directly proportional to the square of the distance between their centers",
    "inversely proportional to the distance between their centers",
    "inversely proportional to the square of the distance between their centers",
  ],
  [
    "directly proportional to the mass of the objects",
    "directly proportional to the square of the mass of the objects",
    "inversely proportional to the mass of the objects",
    "inversely proportional to the square of the mass of the objects",
  ],
  [
    "the center of the Earth",
    "the center of mass of the object",
    "the center of the Sun",
    "the center of the Moon",
  ],
  ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "11.2 m/s²"],
  ["mass", "volume", "density", "acceleration"],
  ["2.5 N", "50 N", "10 N", "5 N"],
  ["5 kg", "10 kg", "2 kg", "20 kg"],
  ["6 m/s²", "5 m/s²", "4 m/s²", "60 m/s²"],
  ["F = m * g", "F = G * (m1 * m2 / r^2)", "F = m * a", "F = m1 * a * m2"],
  ["2 N", "4 N", "5 N", "10 N"],
  ["0.5 kg", "2 kg", "4 kg", "8 kg"],
  ["1 N", "2 N", "3 N", "4 N"],
  ["1 kg", "2 kg", "3 kg", "4 kg"],
  ["non-zero", "negative", "positive", "zero"],
  ["1.6 m/s²", "5.7 m/s²", "10 m/s²", "2.4 m/s²"],
  [
    "It remains the same.",
    "It is halved.",
    "It is doubled.",
    "It becomes zero.",
  ],
  [
    "It is doubled.",
    "It is halved.",
    "It remains the same.",
    "It becomes zero.",
  ],
  ["40 N", "20 N", "80 N", "160 N"],
  [
    "It becomes zero.",
    "It remains the same.",
    "It is halved.",
    "It is doubled.",
  ],
  [
    "It remains the same.",
    "It is halved.",
    "It is doubled.",
    "It becomes zero.",
  ],
  [
    "due to the absence of air resistance",
    "due to the absence of gravity",
    "due to the rotation of the spacecraft",
    "due to the inertia of the spacecraft",
  ],
  [
    "The velocity required for an object to escape the gravitational pull of the Earth.",
    "The velocity required for an object to orbit the Earth.",
    "The velocity required for an object to land on the Moon.",
    "The velocity required for an object to enter the Earth's atmosphere.",
  ],
  ["20 N", "2 N", "5 N", "0.2 N"],
  ["9.8 N", "1 N", "0.98 N", "98 N"],
  [
    "It remains the same.",
    "It is halved.",
    "It is doubled.",
    "It becomes zero.",
  ],
  ["2 m/s²", "4 m/s²", "8 m/s²", "10 m/s²"],
  ["4 m/s²", "2 m/s²", "8 m/s²", "10 m/s²"],
  ["6 m/s²", "3 m/s²", "2 m/s²", "4 m/s²"],
  ["5.1 m/s²", "2.5 m/s²", "6.4 m/s²", "8.5 m/s²"],
  ["4 m/s²", "2 m/s²", "1 m/s²", "0.5 m/s²"],
  ["7.5 m/s²", "5 m/s²", "10 m/s²", "2.5 m/s²"],
  ["49 N", "70 N", "7 N", "98 N"],
  [
    "Directly proportional.",
    "Inversely proportional.",
    "Unrelated.",
    "Not enough information.",
  ],
  [
    "It is doubled.",
    "It is halved.",
    "It remains the same.",
    "It becomes zero.",
  ],
  ["9.8 N", "1 N", "0.98 N", "98 N"],
];

const correctAnswers = [
  "c",
  "b",
  "a",
  "c",
  "a",
  "b",
  "c",
  "a",
  "a",
  "a",
  "c",
  "b",
  "d",
  "c",
  "a",
  "b",
  "a",
  "c",
  "a",
  "b",
  "a",
  "b",
  "b",
  "c",
  "b",
  "c",
  "d",
  "a",
  "d",
  "a",
  "c",
  "a",
  "b",
  "c",
  "a",
  "c",
  "b",
  "a",
  "b",
  "c",
  "a",
  "a",
  "b",
  "a",
  "c",
];

function buildQuiz() {
  const quizContainer = document.getElementById("quiz");

  questions.forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";
    questionDiv.innerHTML = `<p>${question}</p>`;

    const questionOptions = options[index];
    questionOptions.forEach((option, optionIndex) => {
      const optionInput = document.createElement("input");
      optionInput.type = "radio";
      optionInput.name = `q${index}`;
      optionInput.value = String.fromCharCode(97 + optionIndex); // 'a' for 0, 'b' for 1, and so on.
      optionInput.id = `q${index}_${String.fromCharCode(97 + optionIndex)}`;
      questionDiv.appendChild(optionInput);

      const label = document.createElement("label");
      label.htmlFor = `q${index}_${String.fromCharCode(97 + optionIndex)}`;
      label.innerHTML = ` ${String.fromCharCode(
        97 + optionIndex
      )}) ${option} <br>`;
      questionDiv.appendChild(label);
    });

    quizContainer.appendChild(questionDiv);
  });
}

function submitQuiz() {
  const userAnswers = [];
  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");

  questions.forEach((_, index) => {
    const selectedOption = document.querySelector(
      `input[name="q${index}"]:checked`
    );
    userAnswers.push(selectedOption ? selectedOption.value : null);
  });

  let score = 0;
  const incorrectQuestions = [];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score++;
    } else {
      incorrectQuestions.push(index + 1);
    }
  });

  const percentage = (score / questions.length) * 100;

  resultContainer.innerHTML = `Your Score: ${score}/${
    questions.length
  } (${percentage.toFixed(2)}%)`;

  if (incorrectQuestions.length > 0) {
    resultContainer.innerHTML +=
      "<br>Incorrect Questions: " + incorrectQuestions.join(", ");
  }
}

buildQuiz();
