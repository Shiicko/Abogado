document.addEventListener("DOMContentLoaded", function() {
    const testimonios = document.querySelectorAll(".testimonio");
    const btnPrev = document.getElementById("prev");
    const btnNext = document.getElementById("next");
    let currentIndex = 0;
  
    function showTestimonio(index) {
      testimonios.forEach((testimonio, idx) => {
        testimonio.style.display = idx === index ? "block" : "none";
      });
    }
  
    function nextTestimonio() {
      currentIndex = (currentIndex + 1) % testimonios.length;
      showTestimonio(currentIndex);
    }
  
    function prevTestimonio() {
      currentIndex = currentIndex === 0 ? testimonios.length - 1 : currentIndex - 1;
      showTestimonio(currentIndex);
    }
  
    btnNext.addEventListener("click", nextTestimonio);
    btnPrev.addEventListener("click", prevTestimonio);
  
    showTestimonio(currentIndex);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');
  
    hamburgerMenu.addEventListener('click', function() {
      menu.classList.toggle('open'); // Agrega o quita la clase 'open' al menú
    });
  });