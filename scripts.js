const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // Toggle menu
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('open');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      navLinks.classList.remove('active');
      navToggle.classList.remove('open');
    }
  });

  // Optional: close when clicking a link (for mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      navToggle.classList.remove('open');
    });
  });

  // Scroll spy remains the same (if used)

    AOS.init();
    lucide.createIcons();

const NUM_TRAILS = 5;
const trails = [];

const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
document.body.appendChild(cursor);

// Create trails
for (let i = 0; i < NUM_TRAILS; i++) {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  const size = 18 - i * 1.2;
  trail.style.width = `${size}px`;
  trail.style.height = `${size}px`;
  trail.style.opacity = (0.1 + (i / NUM_TRAILS) * 0.2).toFixed(2);
  document.body.appendChild(trail);
  trails.push({
    el: trail,
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  });
}

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // Position main cursor
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;

  // Animate trails smoothly
  let x = mouseX;
  let y = mouseY;
  trails.forEach((trail, index) => {
    const dx = x - trail.x;
    const dy = y - trail.y;
    trail.x += dx * 0.25;
    trail.y += dy * 0.25;

    trail.el.style.left = `${trail.x}px`;
    trail.el.style.top = `${trail.y}px`;

    x = trail.x;
    y = trail.y;
  });

  requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover effects for interactive elements
document.querySelectorAll('button, a, .btn, input, label, textarea').forEach(el => {
  el.style.cursor = 'none'; // Enforce no native pointer
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.4)';
    cursor.style.background = 'rgba(240, 240, 240, 0.95)';
    cursor.style.boxShadow = '0 0 18px rgba(255,255,255,0.4)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursor.style.background = 'rgba(255, 255, 255, 0.85)';
    cursor.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
  });
});

// Click interaction
document.addEventListener('mousedown', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
});
document.addEventListener('mouseup', () => {
  cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});


(function () {
    emailjs.init("GN3Oa_b5hYZHqc9MQ");
  })();

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const status = document.getElementById("formStatus");

    emailjs.sendForm("nexa_contact", "nexa_contact", this)
      .then(() => {
        status.textContent = "Message sent successfully!";
        status.style.color = "#00ff95";
        this.reset();
      }, (error) => {
        status.textContent = "Failed to send message. Try again.";
        status.style.color = "#ff4d4d";
        console.error(error);
      });
  });
  