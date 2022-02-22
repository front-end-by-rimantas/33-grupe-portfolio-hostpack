// Checkbox: <input type="checkbox" id="myCheck1" onClick="javascript:uncheckShowYear1(this);">
// Checkbox: <input type="checkbox" id="myCheck2" onClick="javascript:uncheckShowYear2(this);">
// Checkbox: <input type="checkbox" id="myCheck3" onClick="javascript:uncheckShowYear3(this);">

// <p>Click the "Try it" button to disable the checkbox.</p>

// <button onclick="myFunction()">Try it</button>

function xx1(obj) {
    if (document.getElementById('sharing1').checked = true) {
        document.getElementById('sharing2').checked = false;
        document.getElementById('sharing3').checked = false;
        document.getElementById('sharing4').checked = false;
        document.getElementById('sharing5').checked = false;
    }
}
function xx2(obj) {
    if (document.getElementById('sharing2').checked = true) {
        document.getElementById('sharing1').checked = false;
        document.getElementById('sharing3').checked = false;
        document.getElementById('sharing4').checked = false;
        document.getElementById('sharing5').checked = false;
    }
}
function xx3(obj) {
    if (document.getElementById('sharing3').checked = true) {
        document.getElementById('sharing1').checked = false;
        document.getElementById('sharing2').checked = false;
        document.getElementById('sharing4').checked = false;
        document.getElementById('sharing5').checked = false;
    }
}
function xx4(obj) {
    if (document.getElementById('sharing4').checked = true) {
        document.getElementById('sharing1').checked = false;
        document.getElementById('sharing2').checked = false;
        document.getElementById('sharing3').checked = false;
        document.getElementById('sharing5').checked = false;
    }
}
function xx5(obj) {
    if (document.getElementById('sharing5').checked = true) {
        document.getElementById('sharing1').checked = false;
        document.getElementById('sharing2').checked = false;
        document.getElementById('sharing3').checked = false;
        document.getElementById('sharing4').checked = false;
    }
}


// document.addEventListener('click', function handleClick(event) {
//     event.target.classList.add('bg-yellow');
//   });

// document.querySelector('#ikona').addEventListener('click', function(event) {
//     event.preventDefault();
//     let target = document.querySelector('#ikona');
//     let target2 = document.querySelector('#ikona2')
    
//       target2.classList.toggle('hiddenas')
      
    
    
//     )
// }}


function myFunction() {
    let element = document.getElementById("#ikona2");
    element.classList.toggle("hiddenas");
  }