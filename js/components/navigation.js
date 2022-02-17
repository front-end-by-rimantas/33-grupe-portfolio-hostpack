setTimeout(Checkscroll,1000);


function Checkscroll() {
window.addEventListener("scroll",() => runOnScrollScreen())
window.addEventListener("scroll",() => runOnScrollTop())
};

function runOnScrollScreen() {
    const hdr = document.getElementById('navhome');
    if (window.pageYOffset > 500) {
        hdr.classList.add('headerscreenfixed');
        hdr.classList.remove('headertopfixed');
    }
}

function runOnScrollTop() {
    const hdr = document.getElementById('navhome');
    if (window.pageYOffset < 300) {
        hdr.classList.remove('headerscreenfixed');
        hdr.classList.add('headertopfixed');
    }
}