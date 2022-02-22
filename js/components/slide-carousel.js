let counter = 1;
const arrSlide = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];

setInterval(goright(), 2000);

function goright() {
    counter++;
    setTimeout(slideClientsRight(), 1000);
    console.log('ping', counter);
}

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

    const active1 = document.getElementById(`s${counter}`);
    active1.classList.add('activeslide-1');
    const active2 = document.getElementById(`s${a}`);
    active2.classList.add('activeslide-2');
    const active3 = document.getElementById(`s${b}`);
    active3.classList.add('activeslide-3');
    console.log('done');
}
