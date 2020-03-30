
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




