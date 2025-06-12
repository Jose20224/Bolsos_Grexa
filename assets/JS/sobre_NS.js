  const toggler = document.querySelector('.navbar-toggler');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeBtn = document.querySelector('.close-btn');

  toggler.addEventListener('click', () => {
    menuOverlay.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
  });