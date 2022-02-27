const counters = document.querySelectorAll('.counter');
const speed = 15;
let a = 2500;
let height = window.innerHeight;

if (height > 950){
a =2300;
}
if(height < 950){
a = 1800;    
}

const myInterval = setInterval(runWhenClose,1000)

function runWhenClose() {
    if (window.pageYOffset > a) {
        counters.forEach((counter) => {
            const updateNumbers = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                const increment = target / speed;
                if (count < target) {
                    counter.innerText = Math.trunc(count + increment);
                    setTimeout(updateNumbers, 40);
                } else {
                    counter.innerText = target;
                }
            };
            updateNumbers();
        });
        clearInterval(myInterval);
     }
 }