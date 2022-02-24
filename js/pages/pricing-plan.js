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
    link1.classList.toggle('home1');
    link1.classList.toggle('home11');

    hiddenlinks2.classList.remove('show');
    link2.classList.add('home22');
    link2.classList.remove('home2');

    hiddenlinks3.classList.remove('show');
    link3.classList.add('home33');
    link3.classList.remove('home3');

    hiddenlinks4.classList.remove('show');
    link4.classList.add('home44');
    link4.classList.remove('home4');

    hiddenlinks5.classList.remove('show');
    link5.classList.add('home55');
    link5.classList.remove('home5');
});
link2.addEventListener('click', () => {
    hiddenlinks2.classList.toggle('show');
    link2.classList.toggle('home2');
    link2.classList.toggle('home22');
    hiddenlinks1.classList.remove('show');
    link1.classList.add('home11');
    link1.classList.remove('home1');
    hiddenlinks3.classList.remove('show');
    link3.classList.add('home33');
    link3.classList.remove('home3');
    hiddenlinks4.classList.remove('show');
    link4.classList.add('home44');
    link4.classList.remove('home4');
    hiddenlinks5.classList.remove('show');
    link5.classList.add('home55');
    link5.classList.remove('home5');
});
link3.addEventListener('click', () => {
    hiddenlinks3.classList.toggle('show');
    link3.classList.toggle('home3');
    link3.classList.toggle('home33');
    hiddenlinks1.classList.remove('show');
    link1.classList.add('home11');
    link1.classList.remove('home1');
    hiddenlinks2.classList.remove('show');
    link2.classList.add('home22');
    link2.classList.remove('home2');
    hiddenlinks4.classList.remove('show');
    link4.classList.add('home44');
    link4.classList.remove('home4');
    hiddenlinks5.classList.remove('show');
    link5.classList.add('home55');
    link5.classList.remove('home5');
});
link4.addEventListener('click', () => {
    hiddenlinks4.classList.toggle('show');
    link4.classList.toggle('home4');
    link4.classList.toggle('home44');
    hiddenlinks1.classList.remove('show');
    link1.classList.add('home11');
    link1.classList.remove('home1');
    hiddenlinks3.classList.remove('show');
    link3.classList.add('home33');
    link3.classList.remove('home3');
    hiddenlinks2.classList.remove('show');
    link2.classList.add('home22');
    link2.classList.remove('home2');
    hiddenlinks5.classList.remove('show');
    link5.classList.add('home55');
    link5.classList.remove('home5');
});
link5.addEventListener('click', () => {
    hiddenlinks5.classList.toggle('show');
    link5.classList.toggle('home5');
    link5.classList.toggle('home55');
    hiddenlinks1.classList.remove('show');
    link1.classList.add('home11');
    link1.classList.remove('home1');
    hiddenlinks3.classList.remove('show');
    link3.classList.add('home33');
    link3.classList.remove('home3');
    hiddenlinks2.classList.remove('show');
    link2.classList.add('home22');
    link2.classList.remove('home2');
    hiddenlinks4.classList.remove('show');
    link4.classList.add('home44');
    link4.classList.remove('home4');
});

const label = document.getElementById('label');
const burgerx = document.getElementById('burgerx');
const bars = document.getElementById('barsik');
const nav = document.getElementById('nav');
label.addEventListener('click', () => {
    bars.classList.toggle('hiddenas');
    burgerx.classList.toggle('hiddenas');
    burgerx.classList.toggle('show');
    nav.classList.toggle('show');
});

window.onscroll = function () {
    myFunction();
};
const header = document.getElementById('myHeader');
const contacts = document.getElementById('contacts');
const topas = document.getElementById('topas');
function myFunction() {
    if (window.pageYOffset > 300) {
        header.classList.add('sticky');
        topas.classList.add('visible');
        topas.classList.remove('visible0');
        contacts.classList.add('hiddenas');
    } else {
        header.classList.remove('sticky');
        topas.classList.remove('visible');
        contacts.classList.remove('hiddenas');
        topas.classList.add('visible0');
    }
}
