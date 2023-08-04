$('.hamburgerIcon').on('click', () => {
  $('aside').toggleClass('d-none');
  $('main').toggleClass('back-drop');
});

$('main').on('click', () => {
  if ($('main').hasClass('back-drop')) {
    $('aside').toggleClass('d-none');
    $('main').toggleClass('back-drop');
  }
});
