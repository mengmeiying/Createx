const portfolioTabsNav = document.querySelector('.portfolio-tabs-nav');
const portfolioTabsItems = document.querySelectorAll('.portfolio-tabs__item');
const portfolioTabsBtns = document.querySelectorAll('.portfolio-tabs-nav__btn');

portfolioTabsNav.addEventListener('click', function(e) {
  const target = e.target;

  if (target.classList.contains('portfolio-tabs-nav__btn')) {
    const path = target.dataset.path;

    if (path === 'all') {
      portfolioTabsItems.forEach(el => {
        el.classList.remove('portfolio-tabs__item--hidden');
      })
    }
    else {
      portfolioTabsItems.forEach(el => {
        el.classList.add('portfolio-tabs__item--hidden');
      })

      document.querySelectorAll(`[data-target=${path}]`).forEach(el => {
        el.closest('.portfolio-tabs__item').classList.remove('portfolio-tabs__item--hidden');
      })
    }

    portfolioTabsBtns.forEach(el => {
      el.classList.remove('portfolio-tabs-nav__btn--active');
    })

    target.classList.add('portfolio-tabs-nav__btn--active');

  }
})
