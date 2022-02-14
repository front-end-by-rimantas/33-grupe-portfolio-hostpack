const counters = document.querySelectorAll('.counter');
const speed = 15;

counters.forEach(counter => {
    const updateNumbers = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;
       
        if (count < target) {
            counter.innerText = Math.trunc(count + increment);
            setTimeout(updateNumbers, 40)
        } else {
            counter.innerText = target;
        }
    }
    updateNumbers();
});