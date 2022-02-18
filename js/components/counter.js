const counters = document.querySelectorAll('.counter');
const speed = 15;
let a = 2500;
let width = screen.width;

if (width > 950){
a = 2500;
}
if(width < 950){
a = 3000;    
}
console.log(a);
const myInterval = setInterval(runWhenClose,1000)

function runWhenClose() {
    console.log("check");
    if (window.pageYOffset > a) {
        counters.forEach((counter) => {
            const updateNumbers = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                const increment = target / speed;
console.log("done");
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
