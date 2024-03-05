document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  });