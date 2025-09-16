const container = document.getElementById("container");
const heart = document.getElementById("heart");
const message = document.getElementById("message");
const text =
  "Distance means so little when someone means so much. I love you! ❤️";
let opened = false;

container.addEventListener("click", () => {
  if (opened) return;
  opened = true;
  heart.style.animation = "pop 0.8s ease-out forwards";
  setTimeout(() => typeMessage(text, message), 900);
});

function typeMessage(text, el, speed = 100) {
  let i = 0;
  const timer = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(timer);
  }, speed);
}
