/* =================== ELEMENT GETTER =================== */
const envelope = document.getElementById("envelope");
const overlay = document.getElementById("envelope-overlay");
const letter = document.querySelector(".letter");
const nextBtn = document.getElementById("next-btn");
const music = document.getElementById("piano-music");
const messageContent = document.getElementById("message-content");

/* =================== ENVELOPE OPEN ==================== */
envelope.addEventListener("click", () => {
  overlay.classList.add("open");
  popHearts();
  burstConfetti();

  setTimeout(() => {
    letter.classList.add("show-letter");
    nextBtn.style.display = "block";
  }, 600);

  music.volume = 0.7;
  music.play();
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
// const openingText = 
//   "Cieee Annisaaa ulang tahun\n" +
//   "Aku mau cerita sedikit sebelum ngasih hadiahnya...\n" +
//   "Baca pelan-pelan yaa cantik✨ ✨\n" +
//   "Beberapa minggu ini pasti kamu bertanya-tanya dengan sikap aku ke kamu yang tiba tiba jadi pendiem cuekin kamu seolah-olah tidak ada yang terjadi sewaktu pulang dari merbabu.\n" +
//   "If you want to know, Sebenernya aku bimbang apa yang aku telah perbuat sama kamu, mix feeling banget seriusss 😣😣😣. Awalnya aku hanya ingin ngajak kamu buat naik gunung bareng, aku lagi seneng di jeda ativitas pekerjaan untuk explore keindahan alam\n" +
//   "Seneng banget deh bisa ajak kamu untuk ikut bareng apalagi kita sama sama suka untuk explore.\n" +
//   "Sebelum berangkatpun banyak drama dari kamu yang khawatir ga bisa cuti terus mental yang ga siap karena ini pertama kali 3.0000 mdpl wkwkwkwk\n" +
//   "Terus aku yang plin plan buat rencana yang ganti ganti bikin kamu kesel jugaa hehehe maafin yaaa😗😗😗\n" +
//   "Kita jadi juga buat naik ke merbabu meskipun pada hari itu cuacanya kurang optimal, di jalan pergi sampe pulang kita barengan terus yaaa berduaan sampe diliatin orang-orang karena se deket ituuu. kamu kaget ya karena jauh banget ga sampe sampe udah kehabisan tenaga sampe hampir nangis di jalan huhuhu kasian 🥲.\n" + 
//   "Pada akhirnya kamu hebat banget bisa sampe atas yeayy, selamat atas 3.000 mdpl pertama kamu yaaa.\n Butttt Terlepas dari itu aku membuat hal yang membuat kamu tidak nyaman 😔 \n"  +
//   "Yaa yu knoww lah saat malam kita di tenda aku terbawa suasana padahal kita belum ada komitmen apa-apa hehehe.\n" +
//   "Aku seperti menaruh harapan buat kamu tetapi setelah kita pulang seolah harapan itu dibuang begitu saja. Jujur ini aku salah banget ga ada niatan apa apa, belum siap untuk melangkah lebih jauh lagi dari ini karena aku takut apakah perasaan ini hanya sesaat di karenakan aku bersama kamu di merbabu saja karena aku ingin menyayangi seseorang secara tulus bukan sekedar dari sini.\n" +
//   "";

const openingText = 
  "Cieee Annisaaa ulang tahun\n";

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
