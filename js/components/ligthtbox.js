document.getElementById('myPopup').onclick = function () {
    openPopup();
};
function openPopup() {
    document.getElementById('myPopup').style.display = 'block';
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
}
document.getElementById('myExit').onclick = function () {
    closePopup();
};
function closePopup() {
    document.getElementById('myPopup').style.display = 'none';
}
