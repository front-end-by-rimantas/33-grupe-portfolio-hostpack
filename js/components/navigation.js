window.addEventListener("scroll",() => runOnScroll())


function runOnScroll() {
    const hdr = document.getElementById('navhome');
    console.log('function', hdr);
    if (window.pageYOffset > 300) {
        hdr.classList.add('headerscreenfixed');
        hdr.classList.remove('headertopfixed');
        console.log("screen");
    } else {
        hdr.classList.remove('headerscreenfixed');
        hdr.classList.add('headertopfixed');
        console.log("top");
    }
};
