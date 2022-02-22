const btn = document.querySelector('.btn-video');
const videoContainer = document.querySelector('.video-container');
const frame = document.getElementById('youtube');
const close = document.querySelector('.xxxxx');
// const close = document.getElementById('closevideo');
btn.addEventListener('click', () => {
    videoContainer.classList.add('show');
    frame.innerHTML =
        '<iframe width="560" height="500" src="https://www.youtube.com/embed/ni5hRK1ehzk?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
});
close.addEventListener('click', () => {
    videoContainer.classList.remove('show');
    frame.innerHTML = '';
});

