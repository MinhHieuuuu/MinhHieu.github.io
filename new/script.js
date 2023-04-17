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

// Lấy đối tượng avt
const avt = document.querySelector('.avt');

// Thêm sự kiện khi di chuột vào avt
avt.addEventListener('mouseenter', function() {
  // Thêm class "active" để hiệu ứng phóng to
  this.classList.add('active');
});

// Thêm sự kiện khi di chuột ra khỏi avt
avt.addEventListener('mouseleave', function() {
  // Loại bỏ class "active" để hiệu ứng phóng to
  this.classList.remove('active');
});

