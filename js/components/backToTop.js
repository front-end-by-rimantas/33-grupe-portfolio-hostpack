window.onscroll = function () {
    topukas();
};

function topukas() {
    const pageOffset =
            document.documentElement.scrollTop || document.body.scrollTop,
        btn = document.getElementById('top');
    if (btn) btn.style.visibility = pageOffset > 430 ? 'visible' : 'hidden';
}
