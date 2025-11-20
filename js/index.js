/* =================== ELEMENT GETTER =================== */
const envelope = document.getElementById("envelope");
const overlay = document.getElementById("envelope-overlay");
const letter = document.querySelector(".letter");
const nextBtn = document.getElementById("next-btn");
const messageContent = document.getElementById("message-content");

onload = () => {
  const music = document.getElementById("piano-music");
  music.volume = 0.7;
  music.play();
};

/* =================== ENVELOPE OPEN ==================== */
envelope.addEventListener("click", () => {
  overlay.classList.add("open");
  popHearts();
  burstConfetti();

  setTimeout(() => {
    letter.classList.add("show-letter");
    nextBtn.style.display = "block";
  }, 600);

});

/* AFTER CLICK NEXT BUTTON */
nextBtn.addEventListener("click", () => {
  overlay.style.opacity = "0";

  setTimeout(() => {
    overlay.style.display = "none";
    messageContent.style.display = "block";
    typeOpening();
  }, 600);
});

/* =================== HEART POP =================== */
function popHearts() {
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("div");
    heart.classList.add("popping-heart");
    heart.innerHTML = "💖";

    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${window.innerHeight - 100}px`;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1400);
  }
}

/* =================== RANDOM HEART SHOWER =================== */
setInterval(() => {
  const hearts = ["💖","💕","💗","💞","💓"];
  const h = document.createElement("div");
  h.classList.add("popping-heart");
  h.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  h.style.left = `${Math.random() * window.innerWidth}px`;
  h.style.top = `${window.innerHeight - 50}px`;

  document.body.appendChild(h);
  setTimeout(() => h.remove(), 1500);
}, 300);

/* =================== SPARKLE EFFECT =================== */
setInterval(() => {
  const s = document.createElement("div");
  s.classList.add("sparkle-burst");
  s.innerHTML = "✨";

  s.style.left = `${window.innerWidth/2 + (Math.random()*120 - 60)}px`;
  s.style.top = `${window.innerHeight/2 - 40}px`;

  document.body.appendChild(s);
  setTimeout(() => s.remove(), 1800);
}, 500);

/* =================== STAR TWINKLES =================== */
setInterval(() => {
  const star = document.createElement("div");
  star.classList.add("star-twinkle");
  star.innerHTML = "⭐";

  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.top = `${Math.random() * window.innerHeight}px`;

  document.body.appendChild(star);
  setTimeout(() => star.remove(), 2000);
}, 400);

/* =================== CONFETTI BURST =================== */
function burstConfetti() {
  for (let i = 0; i < 25; i++) {
    const c = document.createElement("div");
    c.classList.add("confetti");

    c.style.left = `${window.innerWidth / 2}px`;
    c.style.top = `${window.innerHeight / 2}px`;
    c.style.background = `hsl(${Math.random()*360}, 80%, 70%)`;
    c.style.transform = `rotate(${Math.random()*360}deg)`;

    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2000);
  }
}

/* =================== OPENING TEXT TYPING =================== */
const openingText = 
  "Cieee Anisaaa ulang tahun\n" +
  "Aku mau cerita sedikit sebelum ngasih hadiahnya...\n" +
  "Baca pelan-pelan yaa cantik✨ ✨\n";

let openIndex = 0;
const typedOpening = document.getElementById("typed-opening");

/* =================== SHOW SECTIONS ONE BY ONE =================== */
const sections = [
  document.getElementById("section1"),
  document.getElementById("section2"),
  document.getElementById("section3"),
  document.getElementById("section4"),
  document.getElementById("section5"),
  document.getElementById("section6"),
  document.getElementById("section7"),
];

function typeOpening() {
  if (openIndex < openingText.length) {
    typedOpening.innerHTML += openingText.charAt(openIndex);
    openIndex++;
    setTimeout(typeOpening, 50);
  } else {
    setTimeout(() => showSection(0), 900);
  }
}

function showSection(i) {
  if (i >= sections.length) return;

  sections[i].classList.add("show");

  setTimeout(() => showSection(i + 1), 1400);
}
