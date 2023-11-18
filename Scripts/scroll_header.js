window.addEventListener('scroll', function() {
    const header = document.getElementById('miHeader');
    const scrollPos = window.scrollY;
  
    if (scrollPos === 0) {
      header.classList.add('header-sin-fondo');
      header.classList.remove('header-con-fondo');
    } else {
      header.classList.remove('header-sin-fondo');
      header.classList.add('header-con-fondo');
    }
  });
  