// 반복문

// for문
for (let i = 0; i < 10; i++) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}

// i += 2 // i = i + 2
for (let i = 0; i < 10; i += 2) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}

// 1 ~ 5 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 5 ~ 1 출력
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// 1부터 n까지의 합 구하기
let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수

for (let i = 1; i <= n; i++) {
  // sum 변수에 값을 재할당 (이전 sum 변수의 값 + 현재 반복 변수 i의 값)
  sum = sum + i;
  console.log((i, sum));
}

// 배열, for문
const fruits = ['사과', '배', '포도', '망고'];
console.log(fruits.length); // 배열의 원소 개수 = 배열의 크기(길이)

for (let f = 0; f < fruits.length; f++) {
  console.log(fruits[f]);
}

// 1 ~ 10 중에서 짝수일 때의 합 구하기
let sum2 = 0; // 합을 의미하는 변수
// 1 ~ 20까지의 숫자 반복
// 현재 반복 숫자가 짝수라면 sum2에 더하기
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum2 += i;
    console.log((i, sum2));
  }
}

// 실습 0 ~ 100의 숫자 중에서 2 또는 5의 배수 총합 구하기
let total = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    total += i;
  } else if (i % 5 === 0) {
    total += i;
  }
}

console.log(total);

// 실습 10000 까지의 숫자 중에서 13의 배수이자 홀수를 찾기
// prompt() 이용
const num = Number(prompt('1 ~ 10000 사이의 숫자를 입력해 주세요'));
let totalNum = 0;

for (let i = 1; i <= num; i++) {
  if (i % 2 !== 0) {
    totalNum += i;
  } else if (i % 13 === 0) {
    totalNum += i;
  }
}
console.log(totalNum);

// 1 ~ 10000 사이의 모든 숫자
const numbers = [];

for (let i = 1; i <= 10000; i++) {
  if (i % 2 !== 0) {
    numbers.push(i);
  } else if (i % 13 === 0) {
    numbers.push(i);
  }
}
console.log(numbers);

// while문
// 무한루프 주의
let idx = 0;
while (idx < 10) {
  console.log('안녕', idx);
  idx += 1;
}

let idx2 = 0;
while (true) {
  // 의도적으로 무한루프 생성
  console.log('안녕2', idx2);
  idx2 += 1;

  if (idx2 === 10) {
    break;
  }
}

// continue
let sum3 = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    continue; // 이번 반복 회차는 스킵
  }

  sum3 += i;
  console.log(i, sum3);
}
console.log(sum3);

// 구구단 만들기 (2단 ~ 9단)
for (let i = 2; i <= 9; i++) {
  console.log(`---${i} 단---`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
