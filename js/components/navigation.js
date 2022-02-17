setTimeout(Checkscroll,1000);


function Checkscroll() {
window.addEventListener("scroll",() => runOnScrollScreen())
window.addEventListener("scroll",() => runOnScrollTop())
};

function runOnScrollScreen() {
    const hdr = document.getElementById('navhome');
    const hp = document.getElementById('hp');
    if (window.pageYOffset > 500) {
        hdr.classList.add('headerscreenfixed');
        hdr.classList.remove('headertopfixed');
        hp.classList.remove('hp-display-none');
    }
}

function runOnScrollTop() {
    const hdr = document.getElementById('navhome');
    if (window.pageYOffset < 300) {
        hdr.classList.remove('headerscreenfixed');
        hdr.classList.add('headertopfixed');
        hp.classList.add('hp-display-none');
    }
}

