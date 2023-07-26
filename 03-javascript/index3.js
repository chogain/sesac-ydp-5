console.log('connected');

// 변수 선언 : 변수 정의
// 변수 할당 : = 연산자를 이용해 값을 넣음
// 초기화 : 변수에 처음 할당하는 순간

// var
// - 선언 단계와 초기화 할당 단계가 동시에 진행이 되며, 초기화에는 undefined 값이 들어간다.
// - 중복 선언이 가능하며, 예기치 못한 값을 반환할 수 있음
// - 선언 이전에 참조하면 언제나 undefined를 반환한다.

// let
// - let 키워드로는 변수 중복 선언이 불가능하지만, 재할당이 가능하다.

// const
// - 재선언이 불가능하고, 재할당이 불가능하다.
// - 초반에 선언을 할 때 반드시 **초기화**를 동시에 진행해야 한다.

// 변수 선언 키워드 1. var
var a; // 변수 선언
console.log(a); // undefined 출력
a = 2; // 변수 할당
console.log(a); // 변수 값 출력 (2)

var a2 = 22; // 변수 선언 & 할당

// var를 사용한 변수 할당의 문제점
// 번수를 선언하기 전에 값을 할당할 수 있음
// 장점처럼 보일 수 있으나, 유지 보수에 큰 문제를 줌
a3 = 222;
console.log(a3); // 222 출력

// 변수 선언 키워드 2. let
let b; // 변수 선언
console.log(b); // undefined 출력 -> 변수를 선언만 하고 값을 할당하지 않았기 때문
b = 4; // 변수 할당
console.log(b); // 변수 값 출력 (4)

let b2 = 44; // 변수 선언 & 할당
// let b2 = 444; -> error: let 키워드 중복 선언 불가능
b2 = 444; // 변수 값 재할당

// 변수 선언 키워드 3. const
// 변수 선언과 할당이 동시에 이루어져야 한다.
// 변하지 않는 값을 변수에 저장할 때 사용 (상수)
// const c; -> error: 변수를 선언만 했기 때문
const d = 8; // 변수 선언 & 할당
console.log(d); // 변수 값 출력 (8)

const e = 10;
// e = 12; -> error: const는 재선언, 재할당 불가

// 변수 이름 규칙 (-> 식별자 규칙)
// 식별자 : 이름을 붙일 때 사용하는 단어 (변수명, 함수명, 클래스명, ...)
// - 키워드(예약어) 사용 불가
//    - 키워드란? 특별한 역할을 이미 하고 있는 단어
//    - ex. let, var, const, void, return, for, while, class, if, else, ...
// - 숫자로 시작 불가
// - 특수문자 : _, $ 만 가능
// - 공백 문자(space bar) 사용 불가

// (관례) 식별자에 단어를 두 개 이상 작성하고 싶은 경우
// camelCase -> js 관례
// ex. redApple, isWater
// snake_case
// ex. red_apple, is_water

///////////////////////////////////////////////////////////////////
// 자료형 (data type)
// : 데이터(변수)의 종류가 무엇인가?
// - Primitive Type (원시 타입) : String, Number, Boolean, Undefined, Null
// - Object Type (객체 타입) : Primitive이 아닌 나머지

// 1. string (문자열)
// : 텍스트 정보, 따옴표로 감싸야 함
// : 숫자, 특수문자도 따옴표 안에 포함한다면 문자열
let text = '안녕하세요';
let text2 = 'hi';
let gender = '여자';
console.log(text);
console.log(text2);
console.log(text, text2);
console.log(text, text2, 'ㅎㅎ'); // ,가 띄어쓰기로 치환되어서 출력
console.log(text + ' 저는 ining 입니다. 저의 성별은 ' + gender + '입니다.');

// 템플릿 리터럴 (es6) 백틱(`)과 달러, 중괄호(${}) 조합으로 사용
// : 문자열 내에서 변수와, 상수를 간결히 표현
console.log(`${text} 저는 ining 입니다. 저의 성별은 ${gender}입니다.`);

// 2. number (숫자형)
// 정수, 실수
// 연산 가능 (+, -, *(곱하기), /(나누기))
let num = 100;
let num2 = 0.12;

console.log(num, num2);
console.log(num + num2);
console.log(num + 1);
console.log(num - 1);
console.log(num * 1);
console.log(num / 1);

// 3. boolean (불리언)
// true, false
let isWater = true;
let hasApple = false;
console.log(isWater, hasApple);

// 4. undefined
// 값도 없고, 타입도 지정되지 않은 상태
let x; // 변수 선언만 했을 때 초기 값으로 undefined 할당
console.log(x); // undefined

// 5. null (빈 값)
// '값이 없음'을 의도적으로 명시
let temp = null;
console.log(temp);
temp = 'hi'; // 추후 할당 가능
console.log(temp);

// 6. array (배열)
// 배열의 이름 : fruits
// 배열의 원소(아이템) : 배열 안에 있는 데이터 하나하나
// 배열의 위치(index) : 0부터 시작
// 배열의 길이(크기) : 원소의 개수와 동일
const fruits = ['orange', 'pineapple', 'grape', 'apple'];
// 배열을 생성하는 방법 2
// const fruits2 = new Array('orange', 'pineapple', 'grape', 'apple');
console.log(fruits); // ['orange', 'pineapple', 'grape', 'apple']
console.log(fruits[0]); // fruits 배열에서 위치가 0인 원소 출력 -> orange 출력

// js에서는 배열 원소의 자료형이 달라도 됨
const data = [1, 'allie', false, null, undefined];
console.log(data);

// array 안에 array 들어갈 수 있음 (중첩 가능) -> 2차원 배열
const korean = [
  ['가', '나', '디'],
  ['라', '마', '바'],
  ['시', '아', '자'],
];
console.log(korean);
console.log(korean[0]); // [['가', '나', '디']] 출력
console.log(korean[1]);
console.log(korean[2]);

console.log(korean[0][2]); // '다' 출력

// 퀴즈 korean 배열에서 '가자' 글씨 출력하기
console.log(korean[0][0] + korean[2][2]);

// 퀴즈 3차원 배열에서 숫자 8 출력
const nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log(nums[1][0][1]);

// 7. object (배열)
// {
//   key: value;
// }
// 형태;

let cat = {
  name: '나비',
  age: 1,
  isCute: true,
  meow: function () {
    return '냐옹';
  },
};

console.log(cat); // object 자체를 출력

// object의 속성(key)에 접근하는 방법
// 1. 점 표기법 (객체.key)
console.log(cat.name);
console.log(cat.age);
console.log(cat.isCute);
console.log(cat.meow());
//2. 대괄호 표기법 (객체['key'])
console.log(cat['name']);
// 자주 사용하지 않지만 점 표기법을 사용하지 못하는 경우 사용
// key가 변수에 저장되어 있을 때 주로 사용
const tempVal = 'name';
console.log(cat[tempVal]); // -> cat['name'] -> cat.name 동일

// 자료형을 알려주는 typeof
console.log(typeof '문자'); // string
console.log(typeof 12345); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof null); // object -> js 공식적으로 인정한 언어 자체의 오류
console.log(typeof undefined); // object
console.log(typeof cat); // object

// 형변환
// 성적 평균 구하는 프로그램 만들기
// let mathScore = prompt('수학점수 입력');
// console.log(mathScore, typeof mathScore);

// let engScore = prompt('영어점수 입력');
// console.log(engScore, typeof engScore);

// let avg = Number(Number(mathScore) + Number(engScore)) / 2;

// console.log(`수학과 영어의 평균 점수는 ${avg}점 입니다.`);

// 1. 문자로 형변환

// 1-1. String()
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(String(str1), typeof String(str1)); // true string 출력
console.log(String(str2), typeof String(str2)); // 123 string 출력
console.log(String(str3), typeof String(str3)); // null string 출력

// 1-2. .toString()
console.log(str1.toString(), typeof str1.toString()); // true string 출력
console.log(str2.toString(), typeof str2.toString()); // 123 string 출력

// 2. 숫자로 형변환

// 2-1. Number()
let n1 = true;
let n2 = false;
let n3 = '123.9';

console.log(Number(n1), typeof n1); // 1 -> true는 숫자로 변환 시 1
console.log(Number(n2), typeof n2); // 0 -> false는 숫자로 변환시 0
console.log(Number(n3), typeof n3); // '123.9'

// 2-2. parseInt(변수명, 변환할) -> parseInt(변환할값) 가능
// 문자열의 인자를 두 번째 인수의 진수인 정수로 변환

console.log(parseInt(n3, 10)); // n3 값을 10진수의 정수(int)로 변환 -> 123
console.log(parseInt(n3)); // 위와 동일

// 2-3. parseFloat(변수명, 변환할진수) -> parseFloat(변환할값) 가능
console.log(parseFloat(n3)); // n3 값을 실수(float)로 변환 - 123.9
console.log(parseFloat(n3)); // 위와 동일

// +) null, undefined를 숫자로 바꾼다면?
console.log(Number(undefined), typeof Number(undefined));
console.log(Number(null), typeof Number(null));
