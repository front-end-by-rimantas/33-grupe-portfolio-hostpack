window.onscroll = function () {
    var pageOffset =
            document.documentElement.scrollTop || document.body.scrollTop,
        btn = document.getElementById('top');
    if (btn) btn.style.visibility = pageOffset > 430 ? 'visible' : 'hidden';
};
