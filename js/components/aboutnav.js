const navOpen = document.querySelector('.label-home');
const navList = document.querySelector('.list-home');
const navPages = document.querySelector('.label-pages');
const navPage = document.querySelector('.list-pages');
const navHosts = document.querySelector('.label-host');
const navHost = document.querySelector('.list-host');
const navServs = document.querySelector('.label-ser');
const navServ = document.querySelector('.list-ser');
const navPrices = document.querySelector('.label-price');
const navPrice = document.querySelector('.list-price');

navOpen.addEventListener('click', () => {
    navList.classList.toggle('list-home');
    navOpen.classList.toggle('label-af');
    navOpen.classList.toggle('change');
    // if (!navPage.classList.contains('list-pages') ||
    //     !navHost.classList.contains('list-host') ||
    //     !navServ.classList.contains('list-ser') ||
    //     !navPrice.classList.contains('list-price')){
    //     navPage.classList.add('list-pages');
    //     navHost.classList.add('list-host');
    //     navServ.classList.add('list-ser');
    //     navPrice.classList.add('list-price');
    //     navPages.classList.toggle('label-af');
    //     navPages.classList.toggle('change');
    //     navHosts.classList.toggle('label-af');
    //     navHosts.classList.toggle('change');
    //     navServs.classList.toggle('label-af');
    //     navServs.classList.toggle('change');
    //     navPrices.classList.toggle('label-af');
    //     navPrices.classList.toggle('change');
    
    // }
});

navPages.addEventListener('click', () => {
    navPage.classList.toggle('list-pages');
    navPages.classList.toggle('label-af');
    navPages.classList.toggle('change');
});


navHosts.addEventListener('click', () => {
    navHost.classList.toggle('list-host');
    navHosts.classList.toggle('label-af');
    navHosts.classList.toggle('change');
});


navServs.addEventListener('click', () => {
    navServ.classList.toggle('list-ser');
    navServs.classList.toggle('label-af');
    navServs.classList.toggle('change');
});

navPrices.addEventListener('click', () => {
    navPrice.classList.toggle('list-price');
    navPrices.classList.toggle('label-af');
    navPrices.classList.toggle('change');
});

////////////////////////////////////////////////
window.onscroll = function () {
    scrollas();
};
const headeris = document.getElementById('myHead');
const topas = document.getElementById('topas');



function scrollas() {
    if (window.pageYOffset > 300) {
        headeris.classList.add('sticky');
        topas.classList.add('visible');
        topas.classList.remove('visible0');
    } else {
        headeris.classList.remove('sticky');
        topas.classList.remove('visible');
        topas.classList.add('visible0');
    }
}

 console.log(window.pageYOffset);