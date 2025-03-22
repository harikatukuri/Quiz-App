const generalKnowledgeQuestions = {
  easy: [
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      answer: "Canberra",
    },
    {
      question: "Which is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: "Pacific",
    },
    {
      question: "Who was the first president of the United States?",
      options: [
        "George Washington",
        "Abraham Lincoln",
        "Thomas Jefferson",
        "John Adams",
      ],
      answer: "George Washington",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Yen", "Ringgit", "Won"],
      answer: "Yen",
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "London", "Rome"],
      answer: "Paris",
    },
  ],
  medium: [
    {
      question: "Who invented the telephone?",
      options: [
        "Alexander Graham Bell",
        "Thomas Edison",
        "Nikola Tesla",
        "Albert Einstein",
      ],
      answer: "Alexander Graham Bell",
    },
    {
      question: "Which country is the Eiffel Tower located in?",
      options: ["Spain", "Italy", "France", "Germany"],
      answer: "France",
    },
    {
      question: "Which country has the most Olympic gold medals?",
      options: ["USA", "China", "Russia", "Germany"],
      answer: "USA",
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Nile",
    },
    {
      question: "In which year did World War II end?",
      options: ["1945", "1939", "1950", "1929"],
      answer: "1945",
    },
  ],
  hard: [
    {
      question: "What is the currency of Japan?",
      options: ["Won", "Yuan", "Ringgit", "Yen"],
      answer: "Yen",
    },
    {
      question: "What is the official language of Brazil?",
      options: ["Portuguese", "Spanish", "French", "English"],
      answer: "Portuguese",
    },
    {
      question: "Who was the first man to step on the Moon?",
      options: [
        "Buzz Aldrin",
        "Neil Armstrong",
        "Yuri Gagarin",
        "Michael Collins",
      ],
      answer: "Neil Armstrong",
    },
    {
      question: "Which country has the longest coastline?",
      options: ["Canada", "Russia", "Australia", "United States"],
      answer: "Canada",
    },
    {
      question: "Who discovered the law of gravity?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Nikola Tesla",
      ],
      answer: "Isaac Newton",
    },
  ],
};

const mathematicsQuestions = {
  easy: [
    {
      question: "What is 5 * 6?",
      options: ["30", "36", "25", "28"],
      answer: "30",
    },
    {
      question: "What is the square root of 25?",
      options: ["5", "6", "7", "8"],
      answer: "5",
    },
    {
      question: "What is 10 + 5?",
      options: ["12", "13", "15", "16"],
      answer: "15",
    },
    { question: "What is 20 / 5?", options: ["3", "4", "5", "6"], answer: "4" },
    {
      question: "What is the square of 7?",
      options: ["49", "48", "50", "56"],
      answer: "49",
    },
  ],
  medium: [
    {
      question: "What is 12 * 15?",
      options: ["180", "150", "125", "175"],
      answer: "180",
    },
    {
      question: "What is the value of pi (p)?",
      options: ["3.1415", "3.14", "3.15", "3.12"],
      answer: "3.1415",
    },
    {
      question: "What is the value of 2^3?",
      options: ["6", "8", "10", "12"],
      answer: "8",
    },
    {
      question: "Solve for x: 3x = 18",
      options: ["4", "5", "6", "7"],
      answer: "6",
    },
    {
      question: "What is 144 ÷ 12?",
      options: ["12", "14", "16", "18"],
      answer: "12",
    },
  ],
  hard: [
    {
      question: "What is the square root of 144?",
      options: ["12", "14", "16", "10"],
      answer: "12",
    },
    {
      question: "What is the value of the square root of 169?",
      options: ["13", "12", "15", "10"],
      answer: "13",
    },
    {
      question: "What is 16^2?",
      options: ["256", "255", "259", "244"],
      answer: "256",
    },
    {
      question: "What is the factorial of 5?",
      options: ["120", "125", "150", "100"],
      answer: "120",
    },
    {
      question: "Solve for y: 4y + 3 = 19",
      options: ["4", "5", "6", "7"],
      answer: "4",
    },
  ],
};

const scienceQuestions = {
  easy: [
    {
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "HO"],
      answer: "H2O",
    },
    {
      question: "What is the nearest planet to the Sun?",
      options: ["Venus", "Earth", "Mercury", "Mars"],
      answer: "Mercury",
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Carbon Dioxide",
    },
    {
      question: "What is the atomic number of Oxygen?",
      options: ["6", "7", "8", "9"],
      answer: "8",
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Liver", "Heart", "Brain", "Skin"],
      answer: "Skin",
    },
  ],
  medium: [
    {
      question: "What is the main gas found in Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Nitrogen",
    },
    {
      question: "What is the symbol for gold?",
      options: ["Au", "Ag", "Pb", "Fe"],
      answer: "Au",
    },
    {
      question: "How many bones are in the adult human body?",
      options: ["206", "210", "205", "220"],
      answer: "206",
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"],
      answer: "Mitochondria",
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo", "Nikola Tesla"],
      answer: "Albert Einstein",
    },
  ],
  hard: [
    {
      question: "What is the atomic number of Helium?",
      options: ["2", "3", "4", "5"],
      answer: "2",
    },
    {
      question: "What is the chemical symbol for potassium?",
      options: ["P", "Po", "K", "Ka"],
      answer: "K",
    },
    {
      question: "Which element has the atomic number 6?",
      options: ["Oxygen", "Carbon", "Nitrogen", "Sulfur"],
      answer: "Carbon",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Earth", "Mars"],
      answer: "Jupiter",
    },
    {
      question: "What is the smallest bone in the human body?",
      options: ["Stapes", "Incus", "Malleus", "Femur"],
      answer: "Stapes",
    },
  ],
};

const literatureQuestions = {
  easy: [
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "William Shakespeare",
        "Jane Austen",
        "Charles Dickens",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "What is the name of the wizard in 'Harry Potter'?",
      options: [
        "Hermione Granger",
        "Harry Potter",
        "Ron Weasley",
        "Albus Dumbledore",
      ],
      answer: "Harry Potter",
    },
    {
      question: "Who wrote 'The Great Gatsby'?",
      options: [
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
        "George Orwell",
        "J.K. Rowling",
      ],
      answer: "F. Scott Fitzgerald",
    },
    {
      question: "In which book would you find the character Sherlock Holmes?",
      options: [
        "Pride and Prejudice",
        "The Adventures of Sherlock Holmes",
        "To Kill a Mockingbird",
        "1984",
      ],
      answer: "The Adventures of Sherlock Holmes",
    },
    {
      question: "Who wrote 'Moby Dick'?",
      options: [
        "Herman Melville",
        "Jules Verne",
        "Mark Twain",
        "Charles Dickens",
      ],
      answer: "Herman Melville",
    },
  ],
  medium: [
    {
      question: "What is the setting of 'Wuthering Heights'?",
      options: [
        "A castle in France",
        "A house on the English moors",
        "A mansion in Italy",
        "A farm in America",
      ],
      answer: "A house on the English moors",
    },
    {
      question: "Who wrote 'Brave New World'?",
      options: [
        "Aldous Huxley",
        "George Orwell",
        "Ray Bradbury",
        "J.R.R. Tolkien",
      ],
      answer: "Aldous Huxley",
    },
    {
      question: "In which book do characters travel to Narnia?",
      options: [
        "The Hobbit",
        "The Chronicles of Narnia",
        "Percy Jackson",
        "The Lord of the Rings",
      ],
      answer: "The Chronicles of Narnia",
    },
    {
      question: "Who is the protagonist in 'The Catcher in the Rye'?",
      options: [
        "Hester Prynne",
        "Holden Caulfield",
        "Jay Gatsby",
        "Scout Finch",
      ],
      answer: "Holden Caulfield",
    },
    {
      question: "Which Shakespeare play is set in the city of Verona?",
      options: ["Macbeth", "Romeo and Juliet", "Hamlet", "The Tempest"],
      answer: "Romeo and Juliet",
    },
  ],
  hard: [
    {
      question: "Who wrote 'Ulysses'?",
      options: ["James Joyce", "Virginia Woolf", "T.S. Eliot", "Ezra Pound"],
      answer: "James Joyce",
    },
    {
      question: "In which novel does the character Yossarian appear?",
      options: [
        "Catch-22",
        "Crime and Punishment",
        "The Great Gatsby",
        "One Flew Over the Cuckoo's Nest",
      ],
      answer: "Catch-22",
    },
    {
      question: "What is the name of the ship in 'Heart of Darkness'?",
      options: ["Nautilus", "The Pequod", "Nellie", "Argo"],
      answer: "Nellie",
    },
    {
      question: "Who wrote 'The Brothers Karamazov'?",
      options: [
        "Fyodor Dostoevsky",
        "Leo Tolstoy",
        "Anton Chekhov",
        "Vladimir Nabokov",
      ],
      answer: "Fyodor Dostoevsky",
    },
    {
      question: "What is the central theme of 'The Waste Land' by T.S. Eliot?",
      options: [
        "Existential despair",
        "Love and romance",
        "The loss of innocence",
        "The decline of civilization",
      ],
      answer: "The decline of civilization",
    },
  ],
};

const historyQuestions = {
  easy: [
    {
      question: "Who was the first President of the United States?",
      options: [
        "George Washington",
        "Abraham Lincoln",
        "Thomas Jefferson",
        "John Adams",
      ],
      answer: "George Washington",
    },
    {
      question: "In what year did World War II end?",
      options: ["1939", "1942", "1945", "1950"],
      answer: "1945",
    },
    {
      question: "Who was the famous queen of ancient Egypt?",
      options: ["Cleopatra", "Nefertiti", "Isis", "Hatshepsut"],
      answer: "Cleopatra",
    },
    {
      question: "What was the main language spoken in ancient Rome?",
      options: ["Greek", "Latin", "Hebrew", "Arabic"],
      answer: "Latin",
    },
    {
      question: "Which country did the United States gain independence from?",
      options: ["Spain", "France", "Britain", "Mexico"],
      answer: "Britain",
    },
  ],
  medium: [
    {
      question: "Who was the first Emperor of China?",
      options: ["Qin Shi Huang", "Li Shimin", "Genghis Khan", "Kublai Khan"],
      answer: "Qin Shi Huang",
    },
    {
      question:
        "Which battle marked the turning point of the American Civil War?",
      options: [
        "Battle of Gettysburg",
        "Battle of Antietam",
        "Battle of Fort Sumter",
        "Battle of Bunker Hill",
      ],
      answer: "Battle of Gettysburg",
    },
    {
      question: "Who was the leader of the Soviet Union during World War II?",
      options: [
        "Joseph Stalin",
        "Leon Trotsky",
        "Vladimir Lenin",
        "Mikhail Gorbachev",
      ],
      answer: "Joseph Stalin",
    },
    {
      question:
        "Who was the famous leader of the Indian independence movement?",
      options: [
        "Jawaharlal Nehru",
        "Subhas Chandra Bose",
        "Mahatma Gandhi",
        "Bhagat Singh",
      ],
      answer: "Mahatma Gandhi",
    },
    {
      question: "What year did the Berlin Wall fall?",
      options: ["1987", "1990", "1989", "1995"],
      answer: "1989",
    },
  ],
  hard: [
    {
      question: "Which empire was ruled by Genghis Khan?",
      options: [
        "Roman Empire",
        "Ottoman Empire",
        "Mongol Empire",
        "Byzantine Empire",
      ],
      answer: "Mongol Empire",
    },
    {
      question: "Who was the prime minister of the UK during World War II?",
      options: [
        "Winston Churchill",
        "Clement Attlee",
        "Neville Chamberlain",
        "Margaret Thatcher",
      ],
      answer: "Winston Churchill",
    },
    {
      question: "What was the name of the treaty that ended World War I?",
      options: [
        "Treaty of Paris",
        "Treaty of Versailles",
        "Treaty of Ghent",
        "Treaty of Tordesillas",
      ],
      answer: "Treaty of Versailles",
    },
    {
      question: "Which ancient civilization built the Machu Picchu?",
      options: ["Aztec", "Inca", "Maya", "Olmec"],
      answer: "Inca",
    },
    {
      question: "Who was the first female pharaoh of Egypt?",
      options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Maat"],
      answer: "Hatshepsut",
    },
  ],
};

const sportsQuestions = {
  easy: [
    {
      question: "Which sport is known as 'the beautiful game'?",
      options: ["Football", "Basketball", "Cricket", "Tennis"],
      answer: "Football",
    },
    {
      question: "In tennis, what is the term for a score of 0?",
      options: ["Love", "Zero", "Nil", "Goose egg"],
      answer: "Love",
    },
    {
      question: "Which country hosted the 2016 Summer Olympics?",
      options: ["China", "Brazil", "Australia", "Russia"],
      answer: "Brazil",
    },
    {
      question: "In which sport would you perform a slam dunk?",
      options: ["Basketball", "Football", "Baseball", "Hockey"],
      answer: "Basketball",
    },
    {
      question: "Which sport uses a shuttlecock?",
      options: ["Badminton", "Tennis", "Volleyball", "Table Tennis"],
      answer: "Badminton",
    },
  ],
  medium: [
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      answer: "France",
    },
    {
      question: "Which player is known as 'The King of Clay' in tennis?",
      options: [
        "Roger Federer",
        "Rafael Nadal",
        "Novak Djokovic",
        "Andy Murray",
      ],
      answer: "Rafael Nadal",
    },
    {
      question: "Which NBA team has won the most championships?",
      options: [
        "Los Angeles Lakers",
        "Chicago Bulls",
        "Boston Celtics",
        "Golden State Warriors",
      ],
      answer: "Boston Celtics",
    },
    {
      question: "In which country did the sport of rugby originate?",
      options: ["Australia", "England", "New Zealand", "South Africa"],
      answer: "England",
    },
    {
      question:
        "What is the maximum number of players on a soccer team on the field at one time?",
      options: ["11", "10", "12", "9"],
      answer: "11",
    },
  ],
  hard: [
    {
      question:
        "Who holds the record for most Grand Slam singles titles in tennis?",
      options: [
        "Rafael Nadal",
        "Serena Williams",
        "Roger Federer",
        "Novak Djokovic",
      ],
      answer: "Margaret Court",
    },
    {
      question: "Which country won the first Cricket World Cup in 1975?",
      options: ["West Indies", "India", "Australia", "England"],
      answer: "West Indies",
    },
    {
      question: "Who won the Tour de France in 1999?",
      options: [
        "Lance Armstrong",
        "Miguel Indurain",
        "Eddy Merckx",
        "Bernard Hinault",
      ],
      answer: "Lance Armstrong",
    },
    {
      question: "Who was the first woman to win an Olympic gold medal?",
      options: [
        "Charlotte Cooper",
        "Helen Wills",
        "Jackie Joyner-Kersee",
        "Nadia Comaneci",
      ],
      answer: "Charlotte Cooper",
    },
    {
      question: "Which boxer was known as 'The Greatest'?",
      options: [
        "Mike Tyson",
        "Muhammad Ali",
        "George Foreman",
        "Sugar Ray Leonard",
      ],
      answer: "Muhammad Ali",
    },
  ],
};

const geographyQuestions = {
  easy: [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which ocean lies on the east coast of the United States?",
      options: [
        "Atlantic Ocean",
        "Pacific Ocean",
        "Indian Ocean",
        "Arctic Ocean",
      ],
      answer: "Atlantic Ocean",
    },
    {
      question: "Which continent is Australia located on?",
      options: ["Asia", "Africa", "Oceania", "Europe"],
      answer: "Oceania",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea", "India"],
      answer: "Japan",
    },
    {
      question: "Which is the largest country by land area?",
      options: ["China", "United States", "Canada", "Russia"],
      answer: "Russia",
    },
  ],
  medium: [
    {
      question: "What is the longest river in the world?",
      options: [
        "Amazon River",
        "Nile River",
        "Yangtze River",
        "Mississippi River",
      ],
      answer: "Amazon River",
    },
    {
      question: "Which desert is the largest in the world?",
      options: [
        "Sahara Desert",
        "Gobi Desert",
        "Kalahari Desert",
        "Atacama Desert",
      ],
      answer: "Sahara Desert",
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Vatican City", "Monaco", "San Marino", "Nauru"],
      answer: "Vatican City",
    },
    {
      question: "Which country is both in Europe and Asia?",
      options: ["Turkey", "Russia", "Egypt", "Mexico"],
      answer: "Russia",
    },
    {
      question: "What is the capital city of Canada?",
      options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
      answer: "Ottawa",
    },
  ],
  hard: [
    {
      question: "What is the deepest point in the Earth's oceans?",
      options: [
        "Mariana Trench",
        "Great Barrier Reef",
        "Java Trench",
        "Tonga Trench",
      ],
      answer: "Mariana Trench",
    },
    {
      question: "Which country has the most natural lakes?",
      options: ["Canada", "United States", "India", "Brazil"],
      answer: "Canada",
    },
    {
      question: "Which country has the longest coastline?",
      options: ["Canada", "Australia", "United States", "Russia"],
      answer: "Canada",
    },
    {
      question: "What is the highest mountain in Africa?",
      options: [
        "Mount Kilimanjaro",
        "Mount Kenya",
        "Mount Everest",
        "Mount Elbrus",
      ],
      answer: "Mount Kilimanjaro",
    },
    {
      question: "Which country has the most islands in the world?",
      options: ["Sweden", "Finland", "Norway", "Philippines"],
      answer: "Sweden",
    },
  ],
};

let subject,
  difficulty,
  questions,
  currentQuestionIndex,
  score,
  timeLeft,
  timer,
  selectedAnswers;

function selectSubject(selectedSubject) {
  subject = selectedSubject;
  document.getElementById("subjectSelection").style.display = "none";
  document.getElementById("difficultySelection").style.display = "block";
}

function startQuiz(level) {
  difficulty = level;
  const subjects = {
    generalKnowledge: generalKnowledgeQuestions,
    mathematics: mathematicsQuestions,
    science: scienceQuestions,
    literature: literatureQuestions,
    history: historyQuestions,
    sports: sportsQuestions,
    geography: geographyQuestions,
  };

  if (subjects[subject] && subjects[subject][difficulty]) {
    questions = subjects[subject][difficulty];
  } else {
    alert("Questions not available for the selected subject!");
    return;
  }

  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 30;
  selectedAnswers = new Array(questions.length).fill(null);

  document.getElementById("difficultySelection").style.display = "none";
  document.getElementById("quizContainer").style.display = "block";
  document.getElementById("result").style.display = "none";

  startTimer();
  showQuestion(currentQuestionIndex);
}

function startTimer() {
  clearInterval(timer);
  document.getElementById("timer").textContent = `Time: ${timeLeft}`;

  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      calculateScore();
      showResult();
    } else {
      timeLeft--;
      document.getElementById("timer").textContent = `Time: ${timeLeft}`;
    }
  }, 1000);
}

function showQuestion(index) {
  if (index < 0 || index >= questions.length) return;

  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");

  let q = questions[index];
  questionElement.textContent = q.question;
  optionsElement.innerHTML = "";

  q.options.forEach((option, i) => {
    let label = document.createElement("label");
    let radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "answer";
    radioButton.value = option;

    if (selectedAnswers[index] === option) {
      radioButton.checked = true;
    }

    radioButton.onclick = function () {
      selectedAnswers[index] = option;
    };

    label.appendChild(radioButton);
    label.appendChild(document.createTextNode(option));
    optionsElement.appendChild(label);
  });

  document.getElementById("prev").disabled = index === 0;

  // Hide Next button if it's the last question
  if (index === questions.length - 1) {
    document.getElementById("next").style.display = "none";
    document.getElementById("submit").style.display = "inline-block"; // Show Submit button
  } else {
    document.getElementById("next").style.display = "inline-block";
    document.getElementById("submit").style.display = "none"; // Hide Submit button
  }
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
}

function calculateScore() {
  score = 0;
  questions.forEach((q, i) => {
    if (selectedAnswers[i]) {
      if (
        selectedAnswers[i].trim().toLowerCase() ===
        q.answer.trim().toLowerCase()
      ) {
        score++;
      }
    }
  });
}

function submitQuiz() {
  clearInterval(timer);
  calculateScore();
  showResult();
}

function showResult() {
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById(
    "score"
  ).textContent = `Score: ${score} / ${questions.length}`;

  let feedback = "";
  if (score === questions.length) {
    feedback = "Excellent!";
  } else if (score >= questions.length / 2) {
    feedback = "Good Job!";
  } else {
    feedback = "Needs Improvement.";
  }
  document.getElementById("feedback").textContent = feedback;
}

function restartQuiz() {
  timeLeft = 30;
  document.getElementById("subjectSelection").style.display = "block";
  document.getElementById("result").style.display = "none";
}
