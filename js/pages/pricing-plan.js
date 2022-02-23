const link1 = document.getElementById('home1');
const link2 = document.getElementById('home2');
const link3 = document.getElementById('home3');
const link4 = document.getElementById('home4');
const link5 = document.getElementById('home5');
const hiddenlinks1 = document.getElementById('links1');
const hiddenlinks2 = document.getElementById('links2');
const hiddenlinks3 = document.getElementById('links3');
const hiddenlinks4 = document.getElementById('links4');
const hiddenlinks5 = document.getElementById('links5');
link1.addEventListener('click', () => {
    hiddenlinks1.classList.toggle('show');
});
link2.addEventListener('click', () => {
    hiddenlinks2.classList.toggle('show');
});
link3.addEventListener('click', () => {
    hiddenlinks3.classList.toggle('show');
});
link4.addEventListener('click', () => {
    hiddenlinks4.classList.toggle('show');
});
link5.addEventListener('click', () => {
    hiddenlinks5.classList.toggle('show');
    link5.classList.toggle('home5');
    link5.classList.remove.toggle('home55');
    
});
