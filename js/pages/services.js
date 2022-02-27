// IMPORTS

// CODE EXECUTION BELOW THIS COMMENT LINE

/* header startas */
const hamburgerS = document.querySelector(`.burger-bar`);
const menuS = document.querySelector(`.dropdown2-srv`);
const link1 = document.getElementById(`menu1`);
const link2 = document.getElementById(`menu2`);
const link3 = document.getElementById(`menu3`);
const link4 = document.getElementById(`menu4`);
const link5 = document.getElementById(`menu5`);
const menu1 = document.querySelector(`.homeMenu`);
const menu2 = document.querySelector(`.pagesMenu`);
const menu3 = document.querySelector(`.hostingMenu`);
const menu4 = document.querySelector(`.servMenu`);
const menu5 = document.querySelector(`.priceMenu`);

hamburgerS.addEventListener('click', () => {
    menuS.classList.toggle(`visible-menuSrv`);
});
link1.addEventListener('click', () => {
    menu1.classList.toggle(`visible-1`);
});
link2.addEventListener('click', () => {
    menu2.classList.toggle(`visible-2`);
});
link3.addEventListener('click', () => {
    menu3.classList.toggle(`visible-3`);
});
link4.addEventListener('click', () => {
    menu4.classList.toggle(`visible-4`);
});
link5.addEventListener('click', () => {
    menu5.classList.toggle(`visible-5`);
});

/*-----------------*/
window.onscroll = function () {
    topukas();
    stickyHeader();
};

const header2 = document.getElementById('headerSrvW');
const topHeader = document.getElementById('headerSrvTop');

function stickyHeader() {
    if (window.pageYOffset > 180) {
        header2.classList.add('sticky');
        topHeader.classList.add('hidden');
    } else {
        header2.classList.remove('sticky');
        topHeader.classList.remove('hidden');
    }
}
/* header pabaiga */

/* hero startas */
/* hero pabaiga */

/* our best konteineris startas */
/* ourBest konteineris pabaiga */

/* control panel konteineris startas */
/* control panel konteineris pabaiga */

/* get latest blog konteineris startas */
/* get latest blog konteineris pabaiga */

/* footer startas */
/* footer pabaiga */

/* back to top startas */
/* back to top pabaiga */
