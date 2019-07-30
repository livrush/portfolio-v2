const aboutOptions = {
  red: {
    hex: '#cf9c9c',
    text: [
      'Over two years',
      'experience teaching',
      'software development',
      'with JavaScript',
    ],
  },
  orange: {
    hex: '#e5ba9c',
    text: [
      'Professional dancer',
      'with performances',
      'in St.Petersburg,',
      'Berlin, and Seoul',
    ],
  },
  yellow: {
    hex: '#ddd0af',
    text: [
      'President of',
      'Operation Spark\'s',
      'Alumni Board',
    ],
  },
  green: {
    hex: '#bdcec0',
    text: [
      'Organizer and',
      'presenter at local',
      'tech meetups in',
      'New Orleans',
    ],
  },
  blue: {
    hex: '#AADBFF',
    text: [
      'Featured in the',
      'New York Times as',
      'a woman working',
      'to elect women',
    ],
  },
  purple: {
    hex: '#b4a7ca',
    text: [
      'Member of',
      'Tulane University\'s',
      'Queer Community',
      'Advisory Board',
    ],
  },
};

let currentIndex = 0;

function updateCurrentIndex(direction) {
  const max = Object.keys(aboutOptions).length - 1;
  switch(direction) {
    case 'up':
      currentIndex = currentIndex === max ? 0 : currentIndex + 1;
      break;
    case 'down':
      currentIndex = currentIndex === 0 ? max : currentIndex - 1;
      break;
  }
}

function toggleSeptagon() {
  document.getElementById('septagon').remove();
  document.getElementsByClassName('about-info-container')[0].style.display = 'initial';
}

function changeBackgroundColor(color) {
  document.getElementById('about-page').style.backgroundColor = aboutOptions[color].hex;
}

function changeImage(color) {
  document.getElementById('tidbit-image').style.backgroundImage = `url('../images/about/${color}.jpg')`;
}

function changeTidbitText(color) {
  const tidbits = document.getElementById('tidbit-container');
  while (tidbits.firstChild) tidbits.removeChild(tidbits.firstChild);
  tidbits.children = aboutOptions[color].text.map(line => {
    const newLine = document.createTextNode(line);
    const newNode = document.createElement('p');
    newNode.classList.add('tidbit-line');
    newNode.appendChild(newLine);
    tidbits.appendChild(newNode);
  });
}

function resetTidbitAnimation() {
  const el = document.getElementById('tidbit-container');
  el.classList.remove('animated');
  void el.offsetWidth;
  el.classList.add('animated');
}

function changeAboutOption(direction) {
  updateCurrentIndex(direction);
  const color = Object.keys(aboutOptions)[currentIndex];
  const el = document.getElementsByClassName('about-info-container')[0];
  el.style.display = 'none';
  changeBackgroundColor(color);
  changeImage(color);
  changeTidbitText(color);
  resetTidbitAnimation();
  el.style.display = 'initial';
}



document.getElementById('septagon').addEventListener('click', () => {
  toggleSeptagon();
  changeAboutOption();
});

document.body.addEventListener('keyup', (e) => {
  console.log(e);
  if (e.keyCode === 37) changeAboutOption();
  else if (e.keyCode === 39) changeAboutOption();
});

document
  .getElementsByClassName('corner bottom left')[0]
  .addEventListener('click', () => changeAboutOption('down'));

document
  .getElementsByClassName('corner bottom right')[0]
  .addEventListener('click', () => changeAboutOption('up'));
