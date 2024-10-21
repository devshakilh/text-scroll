const labels = document.querySelectorAll('.home-clients__label');

window.addEventListener('scroll', () => {
  labels.forEach(label => {
    const labelPosition = label.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // If the label is in the center of the screen (in viewport), activate it
    if (labelPosition < windowHeight / 2 + 100 && labelPosition > windowHeight / 2 - 100) {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
  });
});
