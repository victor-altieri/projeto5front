// DECLARANDO AS VARIÁVEIS

const hamburguer = document.querySelector(".hamburguer");
const headerMenu = document.querySelector(".header-menu");

//CRIANDO A FUNÇÃO TOGGLE

function toggleMenu(){
    hamburguer.classList.toggle("active");
    headerMenu.classList.toggle("active");
}

//CRIANDO O EVENTO

hamburguer.addEventListener('click',toggleMenu);
headerMenu.addEventListener('click',(e)=>{
    if(e.target.classList.contains('item-menu')){
        toggleMenu();
}})