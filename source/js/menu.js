var pageHeader = document.querySelector('.page-header');
var menuList = pageHeader.querySelector('.nav-main__list');
var menuToggle = pageHeader.querySelector('.nav-main__toggle');

pageHeader.classList.remove('page-header--menu-open');
menuList.classList.remove('nav-main__list--open');
menuList.classList.add('nav-main__list--close');
menuToggle.classList.remove('no-js');
menuToggle.classList.add('nav-main__toggle--close');

menuToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  menuToggle.classList.toggle('nav-main__toggle--close');
  menuToggle.classList.toggle('nav-main__toggle--open');

  menuList.classList.toggle('nav-main__list--close');
  menuList.classList.toggle('nav-main__list--open');

  pageHeader.classList.toggle('page-header--menu-open-js');
})
