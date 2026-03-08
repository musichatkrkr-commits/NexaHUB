const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
let current = 0;

function update() {
  track.style.transform = `translateX(-${current * 100}%)`;
}

document.querySelector('.next').onclick = () => {
  current = (current + 1) % slides.length;
  update();
};

document.querySelector('.prev').onclick = () => {
  current = (current - 1 + slides.length) % slides.length;
  update();
};

// 自動再生
setInterval(() => {
  current = (current + 1) % slides.length;
  update();
}, 4000);