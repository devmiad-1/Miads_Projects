// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Typewriter Effect
const typewriterText = "Building scalable, innovative, and user-centric solutions.";
const typewriterElement = document.getElementById('typewriter');
let i = 0;

function typeWriter() {
  if (i < typewriterText.length) {
    typewriterElement.innerHTML += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();

// Animate Skill Bars
const skillBars = document.querySelectorAll('.skill-progress');
skillBars.forEach(bar => {
  const progress = bar.getAttribute('data-progress');
  bar.style.width = progress + '%';
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.querySelector('i').classList.toggle('fa-sun');
  themeToggle.querySelector('i').classList.toggle('fa-moon');
});

// Sticky Navigation Bar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

document.querySelectorAll('a, button, .btn').forEach(element => {
  element.addEventListener('mouseenter',