// obiettivo: al click su icona hamburger mostrare relativo menu
// invece al click su icona X (classe .close) chiudere hamburger menu

const iconHamburger = document.querySelector('.fa-bars');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close')

// mettiti in ascolto di .fa-bars e quando c'è un click svolgi le azioni
// all'interno della funzione => cioè aggiungi la classe active

// mettiti infine in ascolto di .close e quando c'è un click svolgi le
// azioni all'interno della funzione => rimuovi cioè la classe active

iconHamburger.addEventListener('click', function () {
    hamburgerMenu.classList.add('active');
    closeMenu.addEventListener('click', function () {
        hamburgerMenu.classList.remove('active');
    });

});