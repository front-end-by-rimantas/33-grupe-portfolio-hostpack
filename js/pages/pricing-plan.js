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
});
link2.addEventListener('click', () => {
    hiddenlinks2.classList.toggle('show');
    link2.classList.toggle('home2');
    link2.classList.toggle('home22');
});
link3.addEventListener('click', () => {
    hiddenlinks3.classList.toggle('show');
    link3.classList.toggle('home3');
    link3.classList.toggle('home33');
});
link4.addEventListener('click', () => {
    hiddenlinks4.classList.toggle('show');
    link4.classList.toggle('home4');
    link4.classList.toggle('home44');
});
link5.addEventListener('click', () => {
    hiddenlinks5.classList.toggle('show');
    link5.classList.toggle('home5');
    link5.classList.toggle('home55');
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

// const checkbox = document.getElementById('hamburger-menu');

// checkbox.addEventListener('change', (e) => {
//     if ((e.target.checked )) {
//         burgerx.classList.add('show');
//         bars.classList.add('hiddenas');
//     }
// });

// heckbox.addEventListener('change', (e) => {
//     if ((e.target.checked === false )) {
//         burgerx.classList.remove('show');
//         bars.classList.remove('hiddenas');
//     }
// });

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction();
};

// Get the header
const header = document.getElementById('myHeader');
const contacts = document.getElementById('contacts');
// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > 300) {
        header.classList.add('sticky');
        contacts.classList.add('hiddenas');
    } else {
        header.classList.remove('sticky');
        contacts.classList.remove('hiddenas');
    }
}
