// Include Font Awesome library
<script src="https://kit.fontawesome.com/your-font-awesome-kit-id.js"></script>

function randomColor() {
  var color = Math.floor(Math.random()*16777215).toString(16);
  return "#" + color;
}

function changeColor() {
  var element = document.querySelector(".color-change");
  element.style.color = randomColor();
}

setInterval(changeColor, 5000);
