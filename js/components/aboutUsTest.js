const btnTest = document.getElementById("first");
const btnTest2 = document.getElementById('second');
const btnTest3 = document.getElementById('third');
const btnTest4 = document.getElementById('four');
const card = document.getElementById("cards");


btnTest.addEventListener('click', () => {
    card.style.transform = 'translateX(0)';
    if (btnTest4.classList.contains('active')){
        btnTest4.classList.toggle('active');
        btnTest.classList.toggle('active');
    }
});
// btnTest2.addEventListener('click', () => {
//     card.style.transform = 'translateX(-930px)';
//     if (btnTest.classList.contains('active')){
//         btnTest.classList.toggle('active');
//         // btnTest4.classList.toggle('active');
//         btnTest2.classList.toggle('active');
//     }
// });


btnTest4.addEventListener('click', () => {
    card.style.transform = 'translateX(-430px)';
    if (btnTest.classList.contains('active')){
        btnTest.classList.toggle('active');
        btnTest4.classList.toggle('active');
        btnTest2.classList.toggle('active')
        
    }
});