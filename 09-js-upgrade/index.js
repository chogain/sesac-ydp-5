// 구조 분해 할당
// 1. 배열 구조 분해 할당
// - 배열 구조 분해 할당시 "순서" 중요
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);

const [x, y, z, alpha] = arr2;
console.log(x, y, z, alpha);

// 변수의 값 스왑(swap)
let num1 = 1;
let num2 = 3;
console.log(`swap 전 > ${num1}, ${num2}`);

[num1, num2] = [num2, num1];
console.log(`swap 후 > ${num1}, ${num2}`);

// 배열에 요소를 추가하면서 구조 분해 할당
const lists = ['apple', 'grape'];
[f1, f2, f3 = 'orange'] = lists;
console.log(f1, f2, f3);

// -------------------------------------------

// 2. 객체 구조 분해 할당
// - 변수를 선언하는 순서는 중요하지 않음
// - 키 값과 변수명이 일치해야 함
const obj = {
  title: '엘리멘탈',
  content: '재미있다.',
  num: 5,
};

// 객체 구조 분해를 사용하지 않은 경우
console.log(obj.title, obj.content, obj.num);
console.log(obj['title'], obj['content'], obj['num']);

// 객체 구조 분해 사용
// const { num, title, content } = obj;
// console.log(title, content, num);

const { n1, t1, c1 } = obj;
console.log(n1, t1, c1); // key값과 변수명이 다르기 때문에 undefine

// 객체에 key를 추가하면서 객체 분해 할당
const { num, title, content, star = 1000 } = obj;
console.log(num, title, content, star);

// 콜론(;)을 이용하면 새 변수명으로 바꿔 저장할 수 있다.
const { title: t2, num: n2, content: c2 } = obj;
console.log(t2, c2, n2);

// 과제
function getInfo(lecture) {
  // TODO: 구조 분해 할당을 사용하여 값 추출
  const { name, part, leader } = lecture;

  // TODO: 출력 문장 생성
  const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`;

  return output;
}

const lectureInfo = {
  name: 'SESAC x CODINGOn',
  part: 'WEB',
  leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

console.clear();
// -------------------------------------------

// spread 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축 해제하는 역할
// == 객체의 값을 펼침(spread)

// spread in array
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b]; // [1, 2, 3, 4, 5]
console.log(spread);

// spread in string
const c = [...'HELLO']; //['H', 'E', 'L', 'L', 'O']
const d = 'HELLO'.split(''); //['H', 'E', 'L', 'L', 'O']
console.log(c);
console.log(d); // spread 연산자와 split() 메서드는 동일하게 기능

// spread in object
const chip = {
  base: 'chip',
  company: 'orion',
};

const potatoChip = {
  ...chip,
  // base: 'chip',
  // company: 'orion',
  flavor: 'potato',
};

const sweetPotatoChip = {
  ...chip,
  // base: 'chip',
  // company: 'orion',
  flavor: 'potato',
};

console.log(chip);
console.log(potatoChip);
console.log(sweetPotatoChip);

// 과제
const word1 = 'abc';
const word2 = 'xyz';

const newarr = [...word1, ...word2];
console.log(newarr);

// rest 파라미터
// 1. 함수에서 rest를 사용할 때
const values = [10, 20, 30];

function get(a, ...rest) {
  console.log('a >> ', a);
  console.log('rest >> ', rest);
}

get(...values);

// 2. 객체에서 rest
const icecream = {
  company: 'orion',
  flavor: 'strawberry',
  price: 1000,
};

const { flavor, ...rest } = icecream;
console.log(flavor); // strawberry
console.log(rest); // { company: 'orion', price: 1000 }

// 3. 배열에서 rest
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = numbers;
console.log(one1); // 1
console.log(two1); // 2
console.log(rest2); // [ 3, 4, 5, 6, 7, 8 ]
