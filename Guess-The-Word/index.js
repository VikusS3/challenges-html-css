document.addEventListener("DOMContentLoaded", function () {
  //array con palabras de 6 letras
  const words = [
    "python",
    "codigo",
    "escuela",
    "programa",
    "teclado",
    "monitor",
    "mouse",
    "aguila",
    "balsamo",
    "cedula",
    "dedalo",
    "ebano",
    "ferula",
    "gargol",
    "higado",
    "idolo",
    "jubilo",
    "karate",
    "lirica",
    "maximo",
    "nectar",
    "opalo",
    "publico",
    "querub",
    "rotula",
    "sandal",
    "tecnica",
    "ultimo",
    "vertex",
    "western",
    "xileno",
    "yambico",
    "zocalo",
  ];

  let wordSelect = "";
  let attemps = 0;
  const maxAteemps = 5;
  let wordsIncorrect = [];
  let correct = 0;

  const wordDisplay = document.getElementById("wordDisplay");
  const intentd = document.getElementById("intend");
  const mistakesDisplay = document.getElementById("mistakesDisplay");
  const wordInput = document.getElementById("wordInput");
  const randomBtn = document.getElementById("randomBtn");
  const resetBtn = document.getElementById("resetBtn");
  const ballIntend = document.querySelectorAll(".ball-intend");
  const correctDisplay = document.getElementById("correctDisplay");

  function initGame() {
    wordSelect = words[Math.floor(Math.random() * words.length)];
    attemps = 0;
    correct = 0;
    wordsIncorrect = [];

    updateWordDisplay();
    updateTriesDisplay();
    updateMistakesDisplay();
    createInputFields();
  }

  const shuffleWord = (word) =>
    word
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

  const updateCorrectDisplay = () => (correctDisplay.textContent = correct);

  const updateWordDisplay = () =>
    (wordDisplay.textContent = shuffleWord(wordSelect));

  const updateTriesDisplay = () =>
    (intentd.textContent = `${attemps}/${maxAteemps}`);

  const updateMistakesDisplay = () =>
    (mistakesDisplay.innerHTML = wordsIncorrect
      .map((letter) => `<p>${letter}</p>`)
      .join(""));

  const createInputFields = () => {
    wordInput.innerHTML = "";
    for (let i = 0; i < wordSelect.length; i++) {
      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 1;
      input.addEventListener("input", handleInput);
      wordInput.appendChild(input);
    }
  };

  const handleInput = (e) => {
    const index = Array.from(wordInput.children).indexOf(e.target);
    const word = e.target.value.toLowerCase();

    if (word === wordSelect[index]) {
      e.target.disabled = true;
      e.target.style.border = "1px solid green";
      checkIfWon();

      const nextInput = wordInput.children[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    } else {
      if (word != "") {
        e.target.style.border = "1px solid red";
        wordsIncorrect.push(word);
        updateMistakesDisplay();
        attemps++;
        ballIntend[attemps - 1].classList.add("active");
        updateTriesDisplay();
        checkIfLost();
      }
    }
  };

  const resertGame = () => {
    attemps = 0;
    wordsIncorrect = [];
    updateTriesDisplay();
    updateMistakesDisplay();
    ballIntend.forEach((ball) => ball.classList.remove("active"));
    Array.from(wordInput.children).forEach((input) => {
      input.disabled = false;
      input.value = "";
      input.style.border = "2px solid #97A3B6";
    });
  };

  const checkIfWon = () => {
    const inputs = Array.from(wordInput.children);
    const todasAdivinadas = inputs.every((input) => input.disabled);
   
    if (todasAdivinadas) {
      correct++;
      updateCorrectDisplay();
      ballIntend.forEach((ball) => ball.classList.remove("active"));
      initGame();
    }
  };

  const checkIfLost = () => {
    if (attemps === maxAteemps) {
      alert(`Perdiste, la palabra era: ${wordSelect}`);
      ballIntend.forEach((ball) => ball.classList.remove("active"));
      initGame();
    }
  };

  randomBtn.addEventListener("click", initGame);
  resetBtn.addEventListener("click", resertGame);

  initGame();
});
