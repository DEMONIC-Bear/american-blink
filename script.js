window.addEventListener('scroll', function() {
    const missionContent = document.querySelector('.mission-content-img');
    if (window.scrollY > 100) {  // Если страница прокручена больше чем на 100px
        missionContent.classList.add('scroll-image');
    } else {
        missionContent.classList.remove('scroll-image');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.service-content p');
  
    function handleScroll() {
      const rect = textElement.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        textElement.classList.add('animation-active');
        window.removeEventListener('scroll', handleScroll); // Удаляем обработчик после запуска
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';

    // Проверяем, какая секция сейчас видна
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {  // Добавляем смещение для учёта высоты хедера
        current = section.getAttribute('id'); // Получаем id текущей секции
      }
    });

    // Удаляем класс active у всех ссылок и добавляем его только активной ссылке
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });