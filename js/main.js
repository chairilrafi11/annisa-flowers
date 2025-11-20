
onload = () => {
  const music = document.getElementById("piano-music");
  music.volume = 0.7;
  // music.play();
  
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('FLOWERS FOR YOU').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};