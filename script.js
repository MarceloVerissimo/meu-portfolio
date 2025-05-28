// 📌 Navbar toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Rolando pra baixo
    navbar.style.top = "-80px"; // Esconde a navbar
  } else {
    // Rolando pra cima
    navbar.style.top = "0";
  }
  
  lastScrollTop = scrollTop;
});

// 📌 Efeito de digitação no header
const typingText = document.getElementById('typing-text');
const messages = ["Apaixonado por tecnologia 💻", "Aprendendo todos os dias 📚", "Desenvolvedor em formação 🚀"];
let messageIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < messages[messageIndex].length) {
    typingText.textContent += messages[messageIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = messages[messageIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    messageIndex = (messageIndex + 1) % messages.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Mostrar botão de voltar ao topo
window.addEventListener('scroll', function() {
  const btn = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

