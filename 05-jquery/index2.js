// val() - value
function getValue() {
  // js
  //   const inputVal = document.querySelector('input').value;
  //   alert(inputVal);

  // jquery
  const value = $('input').val();
  alert(value);
}

function setValue() {
  // js
  //   document.querySelector('input').value = '하이하이~';

  // jquery
  $('input').val('안뇽안뇽~');
}

// css()
function changeCssJS() {
  const span = document.querySelector('span');
  span.style = 'font-size: 20px; color: red';
}
function changeCssJquery() {
  // case1
  //   $('span').css('font-size', '40px');
  //   $('span').css('color', 'blue');

  // case2. css 여러 속성 한번에 적용
  $('span').css({
    fontSize: '40px', // 모든 span에 대해 폰트 크기 변경
    color: 'blue', // 모든 span에 대해 폰트 색상 변경
  });
}
function getCssJquery() {
  console.log(document.querySelector('span').style.color); // js
  //   console.log($('span').css('color')); // jquery
}

// attr()
function changeAttrJS() {
  // 퀴즈: a 태그를 선택하고, href 속성 값을 naver 주소로 변경
  const a = document.querySelector('a');

  // a.setAttribute('href', 'https://www.naver.com');
  a.href = 'https://www.naver.com';
}
function changeAttrJquery() {
  $('a').attr('href', 'https://www.naver.com');
}

// text()
function changeTextJS() {
  // 퀴즈: p-text 클래스를 갖는 요소 선택하고, 요소의 텍스트를 임의의 값으로 변경
  document.querySelector('.p-text').innerText = 'js innerText 사용';
  // document.querySelector('.p-text').textContent = 'js innerText 사용';
  // document.querySelector('.p-text').innerHTML = 'js innerText 사용';
}
function changeTextJquery() {
  $('.p-text').text('jquery text() 사용');
}

// html()
function changeHtmlJS() {
  // 퀴즈: p-html 클래스 갖는 요소 선택하고, <h3>javascript</h3>로 변경
  document.querySelector('.p-html').innerHTML = `<h3>javascript</h3>`;
}
function changeHtmlJquery() {
  $('.p-html').html(`<h3>jquery</h3>`);
}

// 요소 추가하기
// append()
function appendJS() {
  // 1. color 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
  // 4. color 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/append
  const newLi = document.createElement('li');
  newLi.innerText = '마지막 자식으로 추가된 js';
  document.querySelector('.colors').append(newLi);
}

function appendJquery() {
  $('.colors').append('<li>마지막 자식으로 추가된 jquery</li>');
}

// prepend()
function prependJS() {
  // 1. color 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
  // 4. color 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
  const newLi = document.createElement('li');
  newLi.innerText = '첫 자식으로 추가된 js';
  document.querySelector('.colors').prepend(newLi);
}

function prependJquery() {
  $('.colors').prepend('<li>첫 자식으로 추가된 jquery</li>');
}

// before()
function beforeJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before
  const newLi = document.createElement('li');
  newLi.innerText = '이전 형제로 추가된 js';
  document.querySelector('.green').before(newLi);
}
function beforeJquery() {
  $('.green').before('<li>이전 형제로 추가된 jquery</li>');
}

// after()
function afterJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after
  const newLi = document.createElement('li');
  newLi.innerText = '다음 형제로 추가된 js';
  document.querySelector('.green').after(newLi);
}
function afterJquery() {
  $('.green').after('<li>다음 형제로 추가된 jquery</li>');
}

// 요소 제거하기
// remove()
function removeJS() {
  document.querySelector('#li2').remove();
}
function removeJquery() {
  $('#li2').remove();
}

// empty()
function emptyJS() {
  document.querySelector('.nums').innerHTML = '';
}
function emptyJquery() {
  $('.nums').empty();
}

// 요소 탐색하기
// 부모 찾기
function findParent() {
  console.log($('.child1').parent());
}

// 조상 찾기
function findParents() {
  console.log($('.child1').parents());
}

// 다음 형제 찾기
function findNext() {
  console.log($('.child2').next());
}

// 이전 형제 찾기
function findPrev() {
  console.log($('.child2').prev());
}

// 모든 자식 찾기
function findChildren() {
  console.log($('.parent').children());
}

// 클래스 조작하기
// addClass
function addClass() {
  $('#hi').addClass('add-class');
}

// removeClass
function removeClass() {
  $('#hi').removeClass('add-class');
}

// hasClass
function hasClass() {
  console.log($('#hi').hasClass('add-class'));
}

// toggleClass
function toggleClass() {
  $('#hi').toggleClass('color-blue');
}
