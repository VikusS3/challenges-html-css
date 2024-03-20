const primerForm = document.querySelector(".primero");
const segundoForm = document.querySelector(".segundo");
const resultado = document.querySelector(".resultado");

const btnContinuar1 = document.getElementById("btn-Continue1");
const btnContinuar2 = document.getElementById("btn-Continue2");

const bolita1 = document.getElementById("bolita1");
const bolita2 = document.getElementById("bolita2");
const bolita3 = document.getElementById("bolita3");

const topics = [];
let name = "";
let email = "";

//pasa al formulario 2 pero que guarde la info de los inputs
btnContinuar1.addEventListener("click", () => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  if (nameInput.checkValidity() && emailInput.checkValidity()) {
    primerForm.style.display = "none";
    segundoForm.style.display = "block";
    bolita1.classList.remove("bolita-style");
    bolita1.classList.add("bolita-style-pass");
    bolita2.classList.remove("bolita-sin-style");
    bolita2.classList.add("bolita-style");
    name = nameInput.value;
    email = emailInput.value;
  } else {
    if (!nameInput.checkValidity()) {
      nameInput.focus();
    } else {
      emailInput.focus();
    }
  }

  //mostrar los datos de nombre y email en el formulario 3
  document.getElementById("nameResult").innerText = name;
  document.getElementById("emailResult").innerText = email;
});

function addTopic(topic) {
  let index = topics.indexOf(topic);

  if (index !== -1) {
    topics.splice(index, 1);

    event.currentTarget.classList.remove("pill-select");
  } else {
    topics.push(topic);

    event.currentTarget.classList.add("pill-select");
  }

  console.log(topics);

  const topicsContainer = document.querySelector(".topics");

  topicsContainer.innerHTML = "";

  // Crear un elemento h2 para el encabezado de los temas
  const textoh2 = document.createElement("h2");
  textoh2.innerText = "Topics:";
  topicsContainer.appendChild(textoh2);

  topics.forEach((topic) => {
    const label = document.createElement("label");
    label.innerHTML = `&#x25CF ${topic}`;

    const topicDiv = document.createElement("div");
    topicDiv.classList.add("topic");
    topicDiv.appendChild(label);

    topicsContainer.appendChild(topicDiv);
  });
}

//pasa al formulario 3
btnContinuar2.addEventListener("click", () => {
  segundoForm.style.display = "none";
  resultado.style.display = "block";
  bolita2.classList.remove("bolita-style");
  bolita2.classList.add("bolita-style-pass");
  bolita3.classList.remove("bolita-sin-style");
  bolita3.classList.add("bolita-style");
});
