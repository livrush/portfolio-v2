function changeBackgroundColor (color) {
  document.getElementsByClassName('about-page')[0].style.backgroundColor = color;
}

function changeImage (color) {
  document.getElementById('tidbit-image').style.backgroundImage = `url('/images/about/${color}.jpg')`;
}

function toggleSeptagon () {
  document.getElementById('septagon').remove();
  document.getElementsByClassName('about-info-container')[0].style.display = 'initial';
}