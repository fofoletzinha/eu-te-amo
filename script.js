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
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
  document.querySelector('.heart-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Mais corações subindo
setInterval(createHeart, 200);
