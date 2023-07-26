// 연산자

// 대입 연산자 (=)
// : 변수에 값을 "할당"할 때 사용하는 연산자

// 산술 연산자
// 사칙연산 : +, -, *, /
// 나머지 연산 : %
// 거듭제곱 연산 : **

let a = 5;
let b = 2;

console.log(a + b); // 7
console.log(a - b); // 3
console.log(a * b); // 10
console.log(a / b); // 2.5
console.log(a % b); // 1
console.log(a ** b); // 25

// 비교 연산자
// 동등 비교 (같음(동등): ==, === // 같지 않음(부등): !=, !==)
// ==, !=: "값"만 비교 => type 비교하지 않는 관대한 연산자
// ===, !==: "값"과 "type" 모두 비교 => 엄격한 연산자
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 != 2); // true
console.log(1 != 1); // false
console.log('1' == 1); // true
console.log('1' != 1); // false

console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 !== 2); // true
console.log(1 !== 1); // false
console.log('1' === 1); // false
console.log('1' !== 1); // true

// 크기 비교
// >, <, >=, <=
console.log(2 > 1); // true
console.log(2 >= 2); // true
console.log(2 < 1); // false
console.log(2 <= 2); // true

// 동등연산자 2개 (==) 는 예기치 못한 결과를 발생할수 있으므로 사용 자제
console.log(1 == '1'); // true
console.log('0' == false); // true
console.log('' == 0); // true
console.log(null == undefined); // true

// 논리 연산자
// !: not (참 -> 거짓, 거짓 -> 참)
// &&: and (여러 값 중 모두가 참 -> 참)
// ||: or (여러 값 중 하나라도 참 -> 참)
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true
console.log(!!false); // false

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

console.log(!(2 > 1)); // !true -> false
console.log(2 > 1 && -2 < 1); // true && true -> true
console.log((2 > 1 && -2 < 1) || 5 > 2); // (true && true) || true -> true || true -> true

// 문자열에서 + 연산: 문자열 더하기
console.log('안녕' + '하세요'); // 안녕하세요
console.log('12' + '34'); // 1234
// 더하기 이외의 연산은 숫자로 자동 형변환 되어 계산 -> 출력된 결과는 string 타입
console.log('5' - '2'); // '3'
console.log('5' * '2'); // '10'
console.log('5' / '2'); // '2.5'

// 증감 연산자
// ++ : 변수 값을 1 증가
// -- : 변수 값을 1 감소
let result1, result2;

let num = 10,
  num2 = 10;

// 후위연산자(postfix operator)
// : 변수를 먼저 대입한 뒤에 +1(-1) 연산을 수행
result1 = num++;
console.log(result1); // 10
console.log(num); // 11

// 전위연산자(prefix operator)
// : +1(-1) 연산을 먼저 수행하고 변수에 대입
result2 = ++num2;
console.log(result2); // 11
console.log(num2); // 11

// +=, -= 연산자를 더 자주 씀!
console.log((num += 1));
console.log((num2 -= 1));
