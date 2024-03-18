const darkModeBtn = document.getElementById("dark-mode-btn");
const lightModeBtn = document.getElementById("light-mode-btn");
const darkModeBtnMobile = document.getElementById("dark-mode-btn-mobile");
const lightModeBtnMobile = document.getElementById("light-mode-btn-mobile");
const body = document.body;

//guardar el tema en el local storage que sea modo claro primero
localStorage.setItem('theme', 'light');
body.classList.add('light-theme');

console.log(localStorage.getItem('theme'));

// Funciones para aplicar el tema oscuro

// Funciones para aplicar el tema claro
function applyLightMode() {
 
  body.classList.remove("dark-theme");
  body.classList.add("light-theme");
  darkModeBtn.style.backgroundColor = "transparent";
  lightModeBtn.style.backgroundColor = "#f0f0f0";
  darkModeBtnMobile.style.backgroundColor = "transparent";
  lightModeBtnMobile.style.backgroundColor = "#f0f0f0";
  document.querySelector("#dark-mode-btn img").style.display = "inline-block";
  document.querySelector("#dark-mode-btn .dark-moon").style.display = "none";
  document.querySelector('#light-mode-btn .dark-sun').style.display = 'none';
  document.querySelector('#light-mode-btn img').style.display = 'inline-block';

  document.querySelector('#dark-mode-btn-mobile img').style.display = 'inline-block';
  document.querySelector('#dark-mode-btn-mobile .dark-moon').style.display = 'none';
  document.querySelector('#light-mode-btn-mobile img').style.display = 'inline-block';
  document.querySelector('#light-mode-btn-mobile .dark-sun').style.display = 'none';

  
}

function applyDarkMode() {
 


  body.classList.add("dark-theme");
  body.classList.remove("light-theme");
  darkModeBtn.style.backgroundColor = "#f0f0f0";
  lightModeBtn.style.backgroundColor = "transparent";
  darkModeBtnMobile.style.backgroundColor = "#f0f0f0";
  lightModeBtnMobile.style.backgroundColor = "transparent";
  document.querySelector("#dark-mode-btn img").style.display = "none";
  document.querySelector("#dark-mode-btn .dark-moon").style.display = "inline-block";
  document.querySelector('#light-mode-btn img').style.display = 'none';
  document.querySelector('#light-mode-btn .dark-sun').style.display = 'inline-block';

  document.querySelector('#dark-mode-btn-mobile img').style.display = 'none';
  document.querySelector('#dark-mode-btn-mobile .dark-moon').style.display = 'inline-block';
  document.querySelector('#light-mode-btn-mobile img').style.display = 'none';
  document.querySelector('#light-mode-btn-mobile .dark-sun').style.display = 'inline-block';
}


darkModeBtn.addEventListener("click", applyDarkMode);
lightModeBtn.addEventListener("click", applyLightMode);


darkModeBtnMobile.addEventListener("click", applyDarkMode);
lightModeBtnMobile.addEventListener("click", applyLightMode);


if (window.innerWidth < 768) {
  darkModeBtnMobile.click();
} else {
  darkModeBtn.click();
}


//funcion de cerrar y abrir el menu de mobile
const mobileNavbar = document.querySelector('.mobile-navbar');
const buttonMobile = document.querySelector('.button-mobile');
const buttonDesktop = document.querySelector('.button-desktop');

//que cuando

function closeMobileNavbar(){
  mobileNavbar.style.animation = 'closeMobileNavbar 0.5s forwards';
}

function openMobileNavbar(){
  mobileNavbar.style.animation = 'openMobileNavbar 0.5s forwards';
}

buttonDesktop.addEventListener('click', openMobileNavbar);
mobileNavbar.addEventListener('click', closeMobileNavbar);