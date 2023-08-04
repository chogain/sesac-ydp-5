$('.hamburgerIcon').on('click', () => {
  $('aside').toggleClass('d-none');
  $('main').toggleClass('backdrop');
  $('body').toggleClass('body-backdrop');
});

$('main').on('click', () => {
  if ($('main').hasClass('backdrop')) {
    $('aside').toggleClass('d-none');
    $('main').toggleClass('backdrop');
    $('body').toggleClass('body-backdrop');
  }
});
