function toggleButton(selector){
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')){

    turnOffPreveousButton();

    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function turnOffPreveousButton() {
  const preveousButton = document.querySelector('.is-toggled'); 
    if (preveousButton) {
      preveousButton.classList.remove('is-toggled')
  }
}