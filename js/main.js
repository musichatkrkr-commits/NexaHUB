/* =======================
ハンバーガーボタン
========================== */ 
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

if(burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  })
}

/* =======================
ハンバーガーボタン終わり
========================== */ 


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
