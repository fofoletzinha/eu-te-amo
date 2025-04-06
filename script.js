// Abrir e fechar cartinha 💌
document.getElementById('openLetterButton').addEventListener('click', () => {
  document.getElementById('letterModal').style.display = 'block';
});

document.getElementById('closeLetterButton').addEventListener('click', () => {
  document.getElementById('letterModal').style.display = 'none';
});

// Corações subindo 💖
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';

  // Posição e tempo aleatório
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 2 + 4) + 's';
  heart.style.opacity = Math.random() + 0.3;
  heart.style.transform = `scale(${Math.random() * 0.6 + 0.4}) rotate(45deg)`;

  document.querySelector('.heart-container').appendChild(heart);

  // Remover depois de um tempinho
  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// Corações subindo o tempo todo
setInterval(createHeart, 180);
