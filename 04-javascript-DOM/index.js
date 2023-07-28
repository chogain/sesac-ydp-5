console.log(document.documentElement); // 모든 HTML 요소 출력
console.log(document.head); // head 태그 내부의 요소 출력
console.log(document.title); // title 태그 내부의 컨텐츠 출력 (제목)
console.log(document.body); // body 태그 내부의 요소 출력
console.log(document.URL); // URL 출력
// console.log(document.domain); // 지금은 사용하지 않는 것을 권장함 (취소선 생김)

// document 객체를 이용해 HTML 요소 선택
// 1. getElementById()
console.log(document.getElementById('green')); // green이라는 아이디를 가진 요소 선택
console.log(document.getElementById('red'));

// 2. getElementsByClassName()
// class 속성은 여러개에 부여할 수 있기 때문에 Element"s"
console.log(document.getElementsByClassName('pink')); // pink라는 클래스를 가진 모든 요소 선택
console.log(document.getElementsByClassName('pink')[1]);

// 3. getElementsByTagName()
console.log(document.getElementsByTagName('div')); // div 태그로 만들어진 모든 요소 선택

// 4. getElementsByName
console.log(document.getElementsByName('id')); // id라는 name 속성을 가진 모든 요소 선택

// 5. querySelector(css selector)
// : 처음 하나만 선택
console.log(document.querySelector('.pink')); // pink라는 클래스를 가진 첫 번째 요소 선택
console.log(document.querySelector('#red')); // red라는 id를 가진 첫 번째 요소 선택
console.log(document.querySelector('div')); // div 태그로 만들어진 첫 번째 요소 선택
console.log(document.querySelector('[name="id"]')); // id라는 name 속성을 가진 첫 번째 요소 선택

// 6. querySelectorAll(css selector)
// : 무조건 배열의 형태로 모든 요소를 선택
console.log(document.querySelectorAll('.pink')); // pink라는 클래스를 가진 모든 요소 선택
console.log(document.querySelectorAll('.pink')[0]); // 인덱스를 사용해 원하는 요소 하나를 특정해서 선택 가능
console.log(document.querySelectorAll('#red')); // red라는 id를 가진 모든 요소 선택

// 유사 배열 (HTML Collection, NodeList)
// [] 식으로 생긴 배열을 의미 (배열 X)
// index, length 속성은 가짐
// 배열과 달리 사용 가능한 메서드가 제한됨

// NodeList -> forEach() 반복문 사용 가능
document.querySelectorAll('.pink').forEach((elem) => console.log(elem));

// HTMLCollection -> forEach() 메서드 사용 X
// 반복을 해야하는 경우에는 Array 변경 (Array.from())

// document.getElementsByClassName('pink').forEach((elem) => console.log(elem));
// Uncaught TypeError: document.getElementsByClassName(...).forEach is not a function이라는 에러 발생

Array.from(document.getElementsByClassName('pink')).forEach((elem) =>
  console.log(elem)
);

// for of 반복문도 가능
const pinks = document.querySelectorAll('.pink');
for (let pink of pinks) {
  console.log(pink);
}
