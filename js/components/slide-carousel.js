let counter = 1;
const arrSlide = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];

setInterval(slideClientsRight, 5000);


function slideClientsRight() {
    console.log('pong');
    for (let i = 0; i < arrSlide.length; i++) {
        const passive = document.getElementById(`${arrSlide[i]}`);
        passive.classList.remove('activeslide-1');
        passive.classList.remove('activeslide-2');
        passive.classList.remove('activeslide-3');
        console.log(arrSlide[i]);
    }

    if (counter < 1) {
        counter = 7;
    }
    if (counter > arrSlide.length) {
        counter = 1;
    }

    let a = counter + 1;
    if (a < 1) {
        a = 7;
    }
    if (a > arrSlide.length) {
        a = 1;
    }

    let b = a + 1;
    if (b < 1) {
        b = 7;
    }
    if (b > arrSlide.length) {
        b = 1;
    }
    const counterText = arrSlide[counter - 1];
    const aText = arrSlide[a - 1];
    const bText = arrSlide[b - 1];

    console.log(counterText, aText, bText);

    const active1 = document.getElementById(`${counterText}`);
    active1.classList.add('activeslide-1');
    const active2 = document.getElementById(`${aText}`);
    active2.classList.add('activeslide-2');
    const active3 = document.getElementById(`${bText}`);
    active3.classList.add('activeslide-3');
    console.log('done');
    counter++;
}
