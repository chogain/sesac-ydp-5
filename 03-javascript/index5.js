// 함수
// : 특정 작업을 수행하기 위해 독립적으로 설계된 코드의 집합

// 용어 정리
// - 함수 정의(선언) : 함수 "생성"
// - 함수 호출 : 함수 "사용"

// 함수를 선언하는 방법
// 1. 명시적 함수 선언
function helloWorld() {
  console.log('Hello, World');
  // return 키워드 생략 가능
} // 함수 선언
helloWorld(); // 함수 호출

function helloWorld2() {
  return 'Hello, World 2';
}
// return (반환값)
// : 함수 내부(body, block, scope) 코드의 "최종 결과값"
// 최종 결과값을 저장하고 보관하기 위한 키워드
// return 키워드를 만나면 함수 실행 중단 (return 다음에 코드가 더 있어도 의미 X)
console.log(helloWorld2());

// 2. 함수 표현식
// 함수를 변수에 저장하는 형태
const helloWorld3 = function () {
  console.log('Hello, World 3');
};
helloWorld3();

const helloWorld4 = function () {
  return 'Hello, World 4';
};

console.log(helloWorld4());

// 함수는 여러번 호출 가능
helloWorld();
helloWorld();
helloWorld();

// 매개변수가 있는 함수 작성
function hello1(text) {
  return text;
}
console.log(hello1('안녕'));

const apple = '사과는 맛있다';
console.log(hello1(apple));

const myNumber = 8;
console.log(hello1(myNumber));

// 매개변수가 2개인 함수 작성
function hello2(text, name) {
  return `${text}, ${name}`;
}
console.log(hello2('안녕', 'John'));
console.log(hello2('잘가', 'John'));

function hello3(text, name) {
  console.log(`${text}, ${name}`);
}
hello3('반가워', 'John');

// 3. 화살표 함수 (arrow function)
// 함수 선언을 더 간결하게 작성 가능
// body({}) 내부에 return 구문만 있을 때 return 생략 가능
// 코드가 길어진다면 return 명시해야 함
const mtFunc = (x) => x;
/*
두 함수는 동일한 기능을 함
function myFunc(x) {
  return x;
};
*/

const mySum = (num1, num2) => num1 + num2;
/*
function mySum(num1, num2) {
  return num1 + num2;
}
*/
console.log(mySum(5, 2));

const myMulti = (num1, num2) => {
  let result = num1 * num2;
  return result;
};
console.log(myMulti(3, 4));

// JavaScript 함수 실습(1)
function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(3, 7));
console.log(multiply(2, 2));

// JavaScript 함수 실습(2)
function square(num) {
  console.log(num ** 2);
}

square(4);
square(11);
square(5);

// 호이스팅 (hoisting)
// : "끌어올리다" 사전적 의미
// 함수에서는 "함수 선언문"이 호이스팅 대상이 됨
// : 코드가 실행되기 전에 함수/변수 선언을 최상단으로 끌어올리는 현상
// 참고) 변수에서는 "var"만 호이스팅의 대상 (let, const 호이스팅 대상 x)

myHello(); // 함수 "호출"을 "정의" 보다 먼저 함

function myHello() {
  console.log('hello');
}

// 함수 표현식
// - 호이스팅의 대상이 될 수 없음
// - 함수 선언부보다 호출부가 먼저 나올 수 없음
// myHello2(); // ReferenceError 발생
const myHello2 = function () {
  console.log('hello2');
};
