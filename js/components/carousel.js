let carPosition = 2;
let passive = 0;

function Next() {
    carPosition++;
    console.log(carPosition, 'next');
    goRound();
}

function Previous() {
    carPosition--;
    console.log(carPosition, 'previous');
    goRound();
}

setInterval(alarm, 8000);

function alarm() {
    carPosition++;
    goRound();
}

function goRound() {
    if (carPosition > 2) {
        carPosition = 0;
    }
    if (carPosition < 0) {
        carPosition = 2;
    }
    // for (let i = 0; i < 3; i++) {
    //     let element = 100 + i;
    //     element = element.toString();
    //     console.log(element);
    //     if (i !== carPosition) {
    //         passive = document.getElementById(`${element}`);
    //         console.log(passive);
    //         passive.classList.add('sleep-card');
    //     } else {
    //         passive = document.getElementById(`${element}`);
    //         passive.classList.remove('sleep-card');
    //     }
    // }
    switch (carPosition) {
        case 0:
            passive = document.getElementById('dos');
            passive.classList.add('sleep-card');
            passive = document.getElementById('tres');
            passive.classList.add('sleep-card');
            passive = document.getElementById('uno');
            passive.classList.remove('sleep-card');
            break;
        case 1:
            passive = document.getElementById('uno');
            passive.classList.add('sleep-card');
            passive = document.getElementById('tres');
            passive.classList.add('sleep-card');
            passive = document.getElementById('dos');
            passive.classList.remove('sleep-card');
            break;
        case 2:
            passive = document.getElementById('uno');
            passive.classList.add('sleep-card');
            passive = document.getElementById('dos');
            passive.classList.add('sleep-card');
            passive = document.getElementById('tres');
            passive.classList.remove('sleep-card');
            break;
        default:
            carPosition = 0;
            break;
    }
}
