let contactCard = document.querySelector('.contact-desktop');
let buttonContact = document.getElementById('buttonContact');

buttonContact.addEventListener('click', () => {
    console.log('clic');
    if (window.innerWidth > 991) {
        contactCard.classList.toggle('visible');
    } else {
        window.open('./contact-page.html');
    }
});
