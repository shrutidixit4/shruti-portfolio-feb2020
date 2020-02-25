$(() => {








// Pages - Navigation Menu Hamburger

$(document).on('click', '#menu-hamburger', (event) => {
  console.log('Hamburger is working!');
  $('.menu').addClass('menu-open');
});

$(document).on('click', '#menu-close', (event) => {
  console.log('Hamburger is working!');
  $('.menu').removeClass('menu-open');
});






















});
