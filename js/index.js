window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

window.onresize = () => {
    initLinesProjects();
}

window.addEventListener('load', (event) => {
    initDelay();
    initLinesProjects();
    initChangeLang();
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

function resetDelay() {
    var delayElements = document.querySelectorAll('.delay');
    var overlayElements = document.querySelectorAll('.overlay');

    delayElements.forEach(element => {
        element.classList.remove('show');
        element.offsetHeight;
    });

    overlayElements.forEach(element => {
        element.classList.remove('show');
        element.offsetHeight;
    });
}

function initLinesProjects() {
    var projectElm = document.querySelector('.js-projects');
    var projectLineElms = document.querySelectorAll('.js-projects-line');

    setTimeout(() => {
        projectLineElms.forEach(element => {
            var height = projectElm.getBoundingClientRect();
            element.style.height = `${height.height - 7}px`;
        });

    }, 100);
}

function initChangeLang() {
    document.querySelector('.js-lang-selector').addEventListener('click', (e) => {
        var langSelect = document.querySelector('.js-lang-selector');
        var language = langSelect.getAttribute('data-value');
        var langActive = langSelect.querySelector('.js-lang.active');
        var langHidden = langSelect.querySelector('.js-lang:not(.active)');
        var langDaContainer = document.querySelector('.js-main-container.da');
        var langEngContainer = document.querySelector('.js-main-container.eng');
        
        if (language === 'da') {
            langEngContainer.classList.remove('hide');
            langDaContainer.classList.add('hide');
            langSelect.setAttribute('data-value', 'eng');
        } else {
            langDaContainer.classList.remove('hide');
            langEngContainer.classList.add('hide');
            langSelect.setAttribute('data-value', 'da');
        }

        langActive.classList.remove('active');
        langHidden.classList.add('active');

        window.scrollTo(0, 0);
        resetDelay();
        initDelay();
        initLinesProjects();
    });
}