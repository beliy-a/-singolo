// header navigation
const headerNav = document.querySelector('.header__navigation .navigation__list');
headerNav.addEventListener('click', addClassActive);

function addClassActive(e) {
    let target = e.target;

    if (target.tagName == 'A' && !target.classList.contains('active')) {
        this.querySelectorAll('.navigation__link').forEach(link => {
            link.classList.remove('active');
            return;
        });
        target.classList.add('active');
    }
}


// slider
const slider = document.querySelector('.slider');
const sliderItems = document.querySelector('.slider__container').children;
const prevArrow = document.querySelector('.slider .arrow--back');
const nextArrow = document.querySelector('.slider .arrow--next');
let current = 0;
let isEnabled = true;

prevArrow.addEventListener('click', function () {
    if (isEnabled) {
        hideItem('to-right');
        changeCurrentItem(current - 1);
        showItem('from-left');
    }
});

nextArrow.addEventListener('click', function () {
    if (isEnabled) {
        hideItem('to-left');
        changeCurrentItem(current + 1);
        showItem('from-right');
    }
});

function hideItem(direction) {
    isEnabled = false;
    removeModifierForSlider(slider);
    sliderItems[current].classList.add(direction);
    sliderItems[current].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    });
}

function showItem(direction) {
    addModifierForSlider(sliderItems[current]);
    sliderItems[current].classList.add('next-item', direction);
    sliderItems[current].addEventListener('animationend', function () {
        this.classList.remove('next-item', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}

function changeCurrentItem(n) {
    current = (n + sliderItems.length) % sliderItems.length;
}

function addModifierForSlider(item) {
    if (item.classList.contains('phone__container--red')) {
        slider.classList.add('slider--red')
    } else {
        slider.classList.add('slider--blue');
    }
}

function removeModifierForSlider(item) {
    let modifier = item.getAttribute('class').split(' ').filter(cls => cls !== 'slider').join(' ');
    item.classList.remove(modifier);
}


// portfolio tabs
const portfolioProject = document.querySelector('.portfolio__project');
const portfolioTabs = document.querySelector('.portfolio__tabs').addEventListener('click', e => {

    mixItems(e, portfolioProject);
    addSelectedTab(e);
});

function mixItems(e, parent) {
    let target = e.target;
    const currentChildren = [...parent.children];
    let length = currentChildren.length;

    if (target.tagName == 'LI' && !target.classList.contains('selected')) {

        while (length > 0) {
            let randomItem = generateItem(length - 1);
            parent.append(currentChildren[randomItem]);
            currentChildren.splice(randomItem, 1);
            length--;
        }
    }
}

function generateItem(n) {
    return Math.round(Math.random() * n);
}

function addSelectedTab(e) {
    let target = e.target;

    if (target.tagName == 'LI' && !target.classList.contains('selected')) {
        target.parentNode.querySelectorAll('.tabs__item').forEach(cls => {
            cls.classList.contains('selected') && cls.classList.remove('selected');
            return;
        });
        target.classList.add('selected');
    }
}