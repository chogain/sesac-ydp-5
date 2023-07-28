// pass by value
// : 원시 타입은 값(value)이 복사되어 전달
let num = 1;
let num2 = num;

console.log(num, num2); // 1 1
console.log(num === num2); // true

num = 5; // 1 -> 5
console.log(num, num2); // 5 1
console.log(num === num2); // false

// pass by reference
const array = [1, 2];

array.push(3); // 에러 발생하지 않음
// 데이터의 주소값을 저장하고 있기 때문에 arr라는 변수에는 데이터의 참조값을 가지고 있어 내부를 바꾸는 것이 가능
// arr -> address1 -> [1, 2] 와 같은 구조로 되어있기 때문에 요소를 추가해도 address1에는 변화가 없기 때문에 가능한 것

const obj = { one: 1, tho: 2 };
const obj2 = obj;

console.log(obj, obj2); // { one: 1, tho: 2 }
console.log(obj === obj2); // true
// obj와 obj2는 현재 같은 데이터를 가지고 있으며, 참조값(address, 주소)도 같다

obj.five = 5;
console.log(obj, obj2); // { one: 1, tho: 2, five: 5 }
console.log(obj === obj2); // true

/////
const obj3 = { one: 1, tho: 2 };
const obj4 = { one: 1, tho: 2 };

console.log(obj3, obj4);
console.log(obj3 === obj4); // false
// obj3와 obj4는 현재 같은 데이터를 가지고 있지만, 서로 다른 별도의 객체이기 때문
// 즉, 참조값(address, 주소)이 다르다.

/////
const arr = [1, 2];
const arr2 = arr;
// arr과 arr2 서로 같은 참조값을 가짐

console.log(arr, arr2);
console.log(arr === arr2); // true

arr.push(5);
console.log(arr, arr2);
console.log(arr === arr2); // true

const arr3 = [1, 2];
const arr4 = [1, 2];
console.log(arr3, arr4);
console.log(arr3 === arr4);

arr3.push(5);
console.log(arr3, arr4);
console.log(arr3 === arr4);
///////
// obj = { hi: 'hi' }; // obj가 const 로 선언되어 재할당 불가능
// 즉, obj가 참조하고 있는 주소를 바꿀 수 없음

///////
// 객체 리터럴 (object literal), 딕셔너리
// : key-value 쌍으로 이루어진 데이터 구조

// js에서 객체는 여러 의미
// typeof [] -> object, typeof {} -> object
// 이 때의 객체는 광범위한 의미의 "객체"
/////
console.clear();

// js 표준 내장 객체
// 1. Date 객체 : 시간, 날짜
let now = new Date();
console.log(now); // Fri Jul 28 2023 15:09:37 GMT+0900 (한국 표준시) 형태로 현재 시간이 출력

// 타임스탬프(timestamp)
// 1970년 1월 1일을 기준으로 흘러간 밀리초(ms)를 나타내는 정수
// new Date(timestamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970); // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시) 출력

let jan_02_1970 = new Date(24 * 3600 * 1000);
console.log(jan_02_1970); // Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시) 출력

// new Date(data_string)

let date1 = new Date('2023-07-17');
console.log(date1); // Mon Jul 17 2023 09:00:00 GMT+0900 (한국 표준시) 출력

let date2 = new Date('2023', '06', '17'); // MM(0(1월)~11(12월) 주의)
console.log(date2); // Mon Jul 17 2023 00:00:00 GMT+0900 (한국 표준시) 출력

// 관련 메서드
console.table(date1.getFullYear());
console.table(date1.getMonth()); // 0 ~ 11 주의
console.table(date1.getDate());
console.table(date1.getHours());
console.table(date1.getMinutes());
console.table(date1.getSeconds());
console.table(date1.getMilliseconds());
console.table(date1.getDay()); // 0(일) ~ 6(토)

// 퀴즈
// Date 객체를 이용해 오늘 요일을 얻고, (힌트 getDay())
// if or switch 구문을 이용해 평일 / 주말인지 콘솔창에 출력하는 코드 작성
let today = new Date().getDay();

today === 0 || today === 6 ? console.log('주말') : console.log('평일');

// 2. Math 객체
console.log(Math.min(100, -2, 0, 5));
console.log(Math.max(100, -2, 0, 5));
console.log(Math.round(5.868454)); // 반올림
console.log(Math.ceil(5.868454)); // 올림
console.log(Math.floor(5.868454)); // 버림
console.log(Math.random()); // 0 ~ 1 범위의 난수

// Math.random() 응용 예시
// 0 ~ 9
console.log(Math.floor(Math.random() * 10));

// 퀴즈
// 1 ~ 100
console.log(Math.floor(Math.random() * 100) + 1); //

// 20 ~ 22
console.log(Math.floor(Math.random() * 3 + 20)); //
