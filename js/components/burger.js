const navToggle = document.querySelector('.nav-x');
 const burger = document.getElementById("1").style.visibility = "hidden";

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
  if (document.body.classList.contains("nav-open")) {
    document.getElementById("1").style.visibility = "visible";
  } else {
    document.getElementById("1").style.visibility = "hidden";
  }
});

//////////// neužbaigta mintiis , reikia udaryti nav, paspaudus per kur ant lango//////////
// const closeNav = document.querySelector('section');
// closeNav.addEventListener('click', () => {
//   if (document.body.classList.contains('nav-open')) {
//     document.getElementById("1").style.visibility = "hidden";
//   }
//   else {
//   }
// });