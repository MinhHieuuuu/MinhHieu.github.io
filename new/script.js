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

// Lấy các phần tử cần sử dụng
const textContainer = document.getElementById("text-container");
const texts = textContainer.getElementsByTagName("p");

// Thiết lập hiệu ứng cho các đoạn chữ
for (let i = 0; i < texts.length; i++) {
  const text = texts[i];
  const textContent = text.textContent;
  text.innerHTML = "";

  // Hiển thị các ký tự theo lượt
  for (let j = 0; j < textContent.length; j++) {
    const char = textContent.charAt(j);
    const charElement = document.createElement("span");
    charElement.textContent = char;
    text.appendChild(charElement);

    // Thiết lập hiệu ứng mờ dần rồi chuyển sang màu khác
    charElement.style.opacity = 0;
    charElement.style.transition = "opacity 0.7s ease-in-out";

    setTimeout(() => {
      charElement.style.opacity = 1;
      charElement.style.color = "#FF5733";
    }, j * 50);
  }
}

// Hàm chuyển đổi đoạn chữ
function switchText(index) {
  const currentText = texts[index];
  const nextIndex = (index + 1) % texts.length;
  const nextText = texts[nextIndex];

  // Ẩn đoạn chữ hiện tại
  currentText.classList.add("hidden");

  // Hiển thị đoạn chữ tiếp theo
  nextText.classList.remove("hidden");

  // Gọi lại hàm chuyển đổi sau 7 giây
  setTimeout(() => switchText(nextIndex), 7000);
}

// Bắt đầu chuyển đổi đoạn chữ
switchText(0);
