$('.hamburgerIcon').on('click', () => {
  $('aside').toggleClass('d-none');
  $('main').toggleClass('back-drop');
});

if (!$('aside').hasClass('d-none')) {
  console.log('sf');
}
