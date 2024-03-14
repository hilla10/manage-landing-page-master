const mobile = document.querySelector('.mobile');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    mobile.classList.toggle('active')
    hamburger.classList.toggle('active')
})