// "Change" Event Listener

const selectItem = document.querySelector('.ice-cream');

selectItem.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});


// "Click" Event Listener

document.getElementById("clickMe").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("clickMe").innerHTML = "YOU CLICKED ME!";
}


// "Keydown" Event Listener

document.getElementById("demo").addEventListener("keydown", keydownEvent);

function keydownEvent() {
  document.getElementById("demo").style.backgroundColor = "red";
}


// "Mousemove" Event Listener

document.getElementById("myDIV").addEventListener("mousemove", function(event) {
    coordsXY(event);
});
  
function coordsXY(e) {
    let x = e.clientX;
    let y = e.clientY;
    let coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("coords").innerHTML = coor;
}


// "Resize" Event Listener

window.addEventListener("resize", resizeFun);

let x = 0;
function resizeFun() {
    let text = x += 1;
    document.getElementById("counter").innerHTML = text;
}


// "Submit" Event Listener

function logSubmit() {
    alert('Form Submitted!');
}
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);
  