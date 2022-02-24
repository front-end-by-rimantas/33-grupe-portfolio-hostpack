// IMPORTS

// CODE EXECUTION BELOW THIS COMMENT LINE

/* header startas */
const hamburgerS = document.querySelector(`.hamburger-srv`);
const menuS = document.querySelector(`#menuSrv`);

hamburgerS.addEventListener('click', () => {
    menuS.classList.toggle(`list2-srv`);
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
