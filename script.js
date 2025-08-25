document.getElementById('year').textContent = new Date().getFullYear();

const btn = document.getElementById('btn');
const msg = document.getElementById('msg');
btn.addEventListener('click', () => {
  msg.textContent = "🎉 It works!";
});
