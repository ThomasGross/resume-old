window.addEventListener('load', (event) => {
  var delayElements = document.querySelectorAll('.delay');
  delayElements.forEach(element => {
    element.classList.add('show');
  });
});