const darkModeBtn = document.getElementById("dark-mode-btn");
const lightModeBtn = document.getElementById("light-mode-btn");
const body = document.body;

darkModeBtn.addEventListener("click", () => {
  body.classList.add("dark-theme");
  body.classList.remove("light-theme");
  darkModeBtn.style.backgroundColor = "#f0f0f0";
  lightModeBtn.style.backgroundColor = "transparent";
  document.querySelector("#dark-mode-btn img").style.display = "none";
  document.querySelector("#dark-mode-btn .dark-moon").style.display =
    "inline-block";

    document.querySelector('#light-mode-btn img').style.display = 'none';
    document.querySelector('#light-mode-btn .dark-sun').style.display = 'inline-block';
});

lightModeBtn.addEventListener("click", () => {
  body.classList.remove("dark-theme");
  body.classList.add("light-theme");
  darkModeBtn.style.backgroundColor = "transparent";
  lightModeBtn.style.backgroundColor = "#f0f0f0";
  document.querySelector("#dark-mode-btn img").style.display = "inline-block";
  document.querySelector("#dark-mode-btn .dark-moon").style.display = "none";
  document.querySelector('#light-mode-btn .dark-sun').style.display = 'none';
  document.querySelector('#light-mode-btn img').style.display = 'inline-block';
});
