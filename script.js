// Carta animada
const mensaje = `20 de julio… una fecha muy especial.
    Porque fue el momento en que por fin pude decirte que eres mi enamorada y que esto que sentimos es real y que estamos construyendo algo bonito paso a paso.\n\nY
    Solo mencionarlo me llena el corazón. Es una sensación que no sentía hace mucho, y contigo ha vuelto… más fuerte, más clara, más viva. Sé que no todo será perfecto, 
     que habrá momentos difíciles, dudas o caídas. Pero también sé que contigo puedo enfrentarlo todo. Porque me inspiras confianza, paz y ganas de seguir. 
    que me hace sonreír solo con pensar en ti. Gracias por formar parte de mi vida, por ser parte de esta relación, por hacerme sentir bien… y por simplemente ser tú.\n\nEsto 
    recién comienza, y me gusta lo que estamos construyendo, poco a poco.`;

let i = 0;
const velocidad = 45;
const typewriter = document.getElementById('typewriter');

function escribir() {
  if (i < mensaje.length) {
    typewriter.innerHTML += mensaje.charAt(i);
    i++;
    setTimeout(escribir, velocidad);
  }
}
escribir();

// Música
const music = document.getElementById("bgMusic");
document.getElementById("musicButton").addEventListener("click", () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});

// Corazones flotantes
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const hearts = ["❤️", "💕", "💖", "💘"];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.size = Math.random() * 30 + 20;
    this.speedY = Math.random() * -1.5 - 0.5;
    this.emoji = hearts[Math.floor(Math.random() * hearts.length)];
  }

  update() {
    this.y += this.speedY;
    if (this.y < -50) {
      this.y = canvas.height + 50;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.font = this.size + "px serif";
    ctx.fillText(this.emoji, this.x, this.y);
  }
}

function init() {
  for (let i = 0; i < 30; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();
