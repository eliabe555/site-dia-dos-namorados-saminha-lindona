function mostrarMensagem() {
  const msg = document.getElementById('mensagemSecreta');
  msg.style.display = 'block';
}

// Criar corações animados
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 5 + Math.random() * 2 + 's';
  document.querySelector('.hearts-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}, 400);
