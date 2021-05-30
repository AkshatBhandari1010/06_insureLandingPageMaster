const hamburger = document.getElementById('hamburger');
const navLink = document.getElementById('navLink');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    navLink.classList.toggle('show');
});