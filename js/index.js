window.onbeforeunload = () => {
  window.scrollTo(0, 0);
}

window.onresize = () => {
  initLineProjects();
}

window.addEventListener('load', (event) => {
  initDelay();
  initLineProjects();
});

function initDelay() {
  var delayElements = document.querySelectorAll('.delay');
  var overlayElements = document.querySelectorAll('.overlay');
  delayElements.forEach(element => {
    element.classList.add('show');
  });

  overlayElements.forEach(element => {
    element.classList.add('show');
  });
}

function initLineProjects() {
  var projectElm = document.querySelector('.js-projects');
  var projectLineElm = document.querySelector('.js-projects-line');
  var projectOverlayElm = document.querySelector('.js-projects-overlay');

  setTimeout(() => {
    var height = projectElm.getBoundingClientRect();
    projectLineElm.style.height = `${height.height - 7}px`;
  }, 100)
}