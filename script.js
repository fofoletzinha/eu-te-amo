// Abrir e fechar cartinha 💌
const audio = new Audio('som-carta.mp3');

document.getElementById('openLetterButton').addEventListener('click', () => {
  document.getElementById('letterModal').style.display = 'block';
  audio.currentTime = 0;
  audio.play();
});

document.getElementById('closeLetterButton').addEventListener('click', () => {
  document.getElementById('letterModal').style.display = 'none';
});

// Corações e brilhinhos subindo 💖✨
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
  document.querySelector('.heart-container').appendChild(heart);

  // Brilhinhos ✨
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.animationDuration = (Math.random() * 2 + 3) + 's';
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 5000);
}

setInterval(createSparkle, 300);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
  document.querySelector('.heart-container').appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 4000);
}

setInterval(createHeart, 200);
setInterval(createSparkle, 500);
