document.addEventListener("click", function() {
  console.log('akjsd');
});

window.addEventListener('load', (event) => {
  var delayElements = document.querySelectorAll('.delay');
  delayElements.forEach(element => {
    element.classList.add('show');
  });
});