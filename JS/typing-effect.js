
const text = "WELCOME TO MY\nGAMING WORLD";
const target = document.getElementById("typing-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    if (text[index] === "\n") {
      target.innerHTML += "<br/>";
    } else {
      target.innerHTML += text[index];
    }
    index++;
    setTimeout(typeWriter, 100); // typing speed
  } else {
    setTimeout(() => {
      target.innerHTML = "";
      index = 0;
      typeWriter(); // restart
    }, 1500); // pause before restarting
  }
}

window.onload = typeWriter;
