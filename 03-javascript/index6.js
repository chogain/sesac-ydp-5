// 조건문

// if문
if (5 > 3) {
  console.log('참');
}

let number = Number(prompt('숫자를 입력해주세요.'));
// 1. prompt() 로 사용자로부터 값을 입력받고(문자열)
// 2. Number() 문자열을 숫자형으로 변환
// 아래와 동일한 코드
// let number2 = prompt('숫자를 입력해주세요.');
// number2 = Number(number2);

if (number > 10) {
  console.log('입력한 수는 10보다 큽니다.');
} else {
  console.log('입력한 수는 10보다 작거나 같습니다.');
}

if (number > 10) {
  console.log('입력한 수는 10보다 큽니다.');
} else if (number === 10) {
  console.log('입력한 수는 10입니다.');
} else {
  console.log('입력한 수는 10보다 작습니다.');
}

// 학점 계산기
if (number > 100 || number < 0) {
  console.log('입력값이 잘못되었습니다. 숫자의 범위는 0 ~ 100');
} else if (number >= 90) {
  console.log('A');
} else if (number >= 80) {
  console.log('B');
} else if (number >= 70) {
  console.log('C');
} else if (number >= 60) {
  console.log('D');
} else {
  console.log('F');
}

// if문 실습
let age = Number(prompt('나이를 입력해주세요.'));

if (age >= 20) {
  console.log('성인입니다.');
} else if (age >= 17) {
  console.log('고등학생입니다.');
} else if (age >= 14) {
  console.log('중학생입니다.');
} else if (age >= 8) {
  console.log('초등학생입니다.');
} else if (age >= 0) {
  console.log('유아입니다.');
}

// 중첩 if뮨
let userId = 'user01';
let userPw = '1234';

// id, pw 검사하는 함수
function loginUser() {
  let inputId = prompt('아이디 입력');
  let inputPw = prompt('비밀번호 입력');

  // 1. userId와 inputId가 같다면
  // 1-1. userPw와 inputPw를 비교
  // 2. inputId에 빈값이 입력 되었다면
  // 2-1. '아이디 입력 안함' 문구 반환
  // 3. 두 경우가 아니라면 (inputId가 틀렸을 떄)
  // 3-1. '아이디 틀립' 문구 반환

  if (userId === inputId) {
    if (userPw === inputPw) {
      return '로그인 성공';
    } else {
      return '비밀번호 오류, 로그인 실패';
    }
  } else if (inputId === '') {
    return '아이디가 입력되지 않음';
  } else {
    return '아이디 오류, 로그인 실패';
  }
}

const result = loginUser(); // loginUser 함수의 리턴값(반환값)을 result 변수에 저장
alert(result);

// switch문
// 하나 이상의 case문으로 구성
// default가 필수는 아니지만, 쓰길 권장
// 여러개의 case문을 묶을 수 있음
// break : 조건을 빠져나갈 때 사용하는 키워드
let a = 7;
switch (a) {
  case 3: // if (a === 3)
    console.log('a가 3입니다.');
    break;
  case 4:
    console.log('a가 4입니다.');
    break;
  case 5:
  case 6:
  case 7:
    console.log('a가 5, 6, 7 중에 하나 입니다.');
    break;

  default:
    console.log('a의 값을 모르겠습니다.');
    break;
}

// switch로 학점계산기
let score = Number(prompt('점수를 입력해주세요.') / 10);

switch (score) {
  case 10:
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
  case 6:
    console.log('D');
    break;
  default:
    console.log('F');
    break;
}

// 삼항 연산자
let num = 5;

if (num % 2 === 1) {
  console.log('홀수');
} else {
  console.log('짝수');
}

num % 2 === 1 ? console.log('홀수') : console.log('짝수');

// 삼항 연산자 실습
let now = new Date().getHours();

now < 12
  ? console.log('지금은 오전입니다.')
  : console.log('지금은 오후입니다.');
