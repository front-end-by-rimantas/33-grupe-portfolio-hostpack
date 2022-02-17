const text1 = 'your hosting';
const text2 = 'your website';
const text3 = 'your cloud';
let i = 0;
let j = 0;
let k = 0;
let counter = 0;
const textAnimation = document.getElementById('spananime');

let currentText = 'in ';
setTimeout(writetext1, 2000);

function oncemore() {
    i = 0;
    j = 0;
    k = 0;
    currentText = 'in ';
    setTimeout(writetext1, 100);
}

function writetext1() {
    if (i % 2 === 0) {
        currentText = currentText + text1[i] + '|';
    } else {
        currentText =
            currentText.substring(0, currentText.length - 1) + text1[i];
    }
    textAnimation.innerHTML = currentText;
    i++;
    if (i !== text1.length) {
        setTimeout(writetext1, 300);
    } else {
        setTimeout(deletetext1, 3000);
    }
}

function deletetext1() {
    if (i % 2 === 0) {
        currentText = currentText.substring(0, currentText.length - 1) + '|';
    } else {
        currentText = currentText.substring(0, currentText.length - 2);
    }
    textAnimation.innerHTML = currentText;
    i--;

    if (currentText.length > 3) {
        setTimeout(deletetext1, 100);
    } else {
        setTimeout(writetext2, 3000);
    }
}

function writetext2() {
    if (j % 2 === 0) {
        currentText = currentText + text2[j] + '|';
    } else {
        currentText =
            currentText.substring(0, currentText.length - 1) + text2[j];
    }
    textAnimation.innerHTML = currentText;
    j++;
    if (j !== text2.length) {
        setTimeout(writetext2, 300);
    } else {
        setTimeout(deletetext2, 3000);
    }
}

function deletetext2() {
    if (j % 2 === 0) {
        currentText = currentText.substring(0, currentText.length - 1) + '|';
    } else {
        currentText = currentText.substring(0, currentText.length - 2);
    }
    textAnimation.innerHTML = currentText;
    j--;

    if (currentText.length > 3) {
        setTimeout(deletetext2, 100);
    } else {
        setTimeout(writetext3, 3000);
    }
}

function writetext3() {
    if (k % 2 === 0) {
        currentText = currentText + text3[k] + '|';
    } else {
        currentText =
            currentText.substring(0, currentText.length - 1) + text3[k];
    }
    textAnimation.innerHTML = currentText;
    k++;
    if (k !== text3.length) {
        setTimeout(writetext3, 300);
    } else {
        counter++;
        if (counter < 3) {
            setTimeout(deletetext3, 3000);
        } else {
            setTimeout(pinglampon, 500);
        }
    }
}

function deletetext3() {
    if (k % 2 === 0) {
        currentText = currentText.substring(0, currentText.length - 1) + '|';
    } else {
        currentText = currentText.substring(0, currentText.length - 2);
    }
    textAnimation.innerHTML = currentText;
    k--;

    if (currentText.length > 3) {
        setTimeout(deletetext2, 100);
    } else {
        setTimeout(oncemore, 3000);
    }
}

function pinglampon() {
    currentText = currentText + '| ';
    textAnimation.innerHTML = currentText;
    setTimeout(pinglampoff, 500);
}

function pinglampoff() {
    currentText = currentText.substring(0, currentText.length - 2) + '  ';
    textAnimation.innerHTML = currentText;
    currentText = currentText.substring(0, currentText.length - 2);
    setTimeout(pinglampon, 500);
}
