const menubtn = document.getElementById('menubtn');
const menu = document.getElementById('menu');

menubtn.addEventListener('click', () =>{
    menu.style.display = menu.style.display === 'inline-flex' ? 'none' : 'inline-flex';
})