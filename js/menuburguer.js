const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('open');
  burger.classList.toggle('change');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.menu-container')) {
    menu.classList.remove('open');
    burger.classList.remove('change');
  }
});
