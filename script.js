document.getElementById('year').textContent = new Date().getFullYear();

const btn = document.getElementById('btn');
const msg = document.getElementById('msg');
btn.addEventListener('click', () => {
  msg.textContent = "The Button Works!";
});

const btn2 = document.getElementById('btn2');
const msg2 = document.getElementById('msg2');
btn2.addEventListener('click', () => {
    msg.textContent = "The second button also works!";
});