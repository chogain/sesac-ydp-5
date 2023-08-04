$('.hamburgerIcon').on('click', () => {
  // $('aside').toggleClass('d-none');
  $('header').append(sidebar);
  $('main').toggleClass('backdrop');
  $('body').toggleClass('body-scrollDisable');

  if (!$('main').hasClass('backdrop')) {
    $('aside').remove();
  }
});

$('main').on('click', () => {
  if ($('main').hasClass('backdrop')) {
    // $('aside').toggleClass('d-none');
    $('aside').remove();
    $('main').toggleClass('backdrop');
    $('body').toggleClass('body-scrollDisable');
  }
});

const sidebar = `<aside
class="accordion accordion-flush sidebar float-start w-25 h-100"
>
<div class="accordion-item">
  <a href="#" class="sidebar-a"> BEST </a>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="flush-headingTwo">
    <a
      class="accordion-button collapsed"
      data-bs-toggle="collapse"
      data-bs-target="#flush-collapseTwo"
      aria-expanded="false"
      aria-controls="flush-collapseTwo"
    >
      RING
    </a>
  </h2>
  <ul
    id="flush-collapseTwo"
    class="accordion-collapse collapse"
    aria-labelledby="flush-headingTwo"
    data-bs-parent="#accordionFlushExample"
  >
    <li class="accordion-body"><a href="#">All</a></li>
    <li class="accordion-body"><a href="#">SILVER</a></li>
    <li class="accordion-body"><a href="#">GOLD & SILVER</a></li>
  </ul>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="flush-headingThree">
    <a
      class="accordion-button collapsed"
      data-bs-toggle="collapse"
      data-bs-target="#flush-collapseThree"
      aria-expanded="false"
      aria-controls="flush-collapseThree"
    >
      NECKLACE
    </a>
  </h2>
  <ul
    id="flush-collapseThree"
    class="accordion-collapse collapse"
    aria-labelledby="flush-headingThree"
    data-bs-parent="#accordionFlushExample"
  >
    <li class="accordion-body"><a href="#">All</a></li>
    <li class="accordion-body"><a href="#">SILVER</a></li>
    <li class="accordion-body"><a href="#">BEADS</a></li>
  </ul>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="flush-headingFour">
    <a
      class="accordion-button collapsed"
      data-bs-toggle="collapse"
      data-bs-target="#flush-collapseFour"
      aria-expanded="false"
      aria-controls="flush-collapseFour"
    >
      BRACELET, BANGLE
    </a>
  </h2>
  <ul
    id="flush-collapseFour"
    class="accordion-collapse collapse"
    aria-labelledby="flush-headingFour"
    data-bs-parent="#accordionFlushExample"
  >
    <li class="accordion-body"><a href="#">All</a></li>
    <li class="accordion-body"><a href="#">BRACELET</a></li>
    <li class="accordion-body"><a href="#">BANGLE</a></li>
  </ul>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="flush-headingFive">
    <a
      class="accordion-button collapsed"
      data-bs-toggle="collapse"
      data-bs-target="#flush-collapseFive"
      aria-expanded="false"
      aria-controls="flush-collapseFive"
    >
      ETC, OBJECT
    </a>
  </h2>
  <ul
    id="flush-collapseFive"
    class="accordion-collapse collapse"
    aria-labelledby="flush-headingFive"
    data-bs-parent="#accordionFlushExample"
  >
    <li class="accordion-body"><a href="#">All</a></li>
  </ul>
</div>
</aside>`;
