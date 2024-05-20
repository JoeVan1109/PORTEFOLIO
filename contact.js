let contactCard = document.querySelector('.contact-desktop');
let buttonContact = document.getElementById('buttonContact');

buttonContact.addEventListener('click', () => {
    if (window.innerWidth > 768) {
        // Bascule la classe 'visible' sur l'élément de la carte de contact
        contactCard.classList.toggle('visible');
    } else {
        window.open('./contact-page.html');
    }
});

buttonContact.addEventListener('click', () => {
    if (window.innerWidth > 768 && contactCard === ('visible'))  {
        contactCard.classList.remove('visible');
    } else {

    }
});