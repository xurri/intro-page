const menuOpen = document.getElementById('open-icon'); 
const menuClose = document.getElementById('close-icon');
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('navbar');
const menuContainer = document.getElementById('navlinks');
const featuresBtn = document.getElementById('features');
const companyBtn = document.getElementById('company');
const featuresList = document.getElementById('features-list');
const companyList = document.getElementById('company-list');
const fArrowDown = document.getElementById('f-arrow-down');
const fArrowUp = document.getElementById('f-arrow-up');
const cArrowDown = document.getElementById('c-arrow-down');
const cArrowUp = document.getElementById('c-arrow-up');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('openMenu');
  menuContainer.classList.toggle('vissible');
  menuOpen.classList.toggle('hide');
  menuClose.classList.toggle('hide');
  featuresList.classList.remove('open');
  companyList.classList.remove('open');
  fArrowUp.classList.add((fArrowUp.classList.contains('hide')? 'd2500': 'hide'));
  fArrowDown.classList.remove((fArrowDown.classList.contains('hide')? 'hide':'d2500'));
  cArrowUp.classList.add((cArrowUp.classList.contains('hide')? 'd2500': 'hide'));
  cArrowDown.classList.remove((cArrowDown.classList.contains('hide')? 'hide':'d2500'));
});

featuresBtn.addEventListener('click', () => {
  featuresList.classList.toggle('open');
  fArrowDown.classList.toggle('hide');
  fArrowUp.classList.toggle('hide');
});

companyBtn.addEventListener('click', () => {
  companyList.classList.toggle('open');
  cArrowDown.classList.toggle('hide');
  cArrowUp.classList.toggle('hide');
});
