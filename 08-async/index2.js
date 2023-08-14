// Promise (프로미스)
// - 비동기 함수를 동기처리하기 위해 만든 객체
// - 미래에 성공/실패에 대한 결과 값을 "약속" 한다는 의미
// - 성공, 실패를 분리해서 반환
//    - 성공, 실패에 대한 결과는 return, catch 메서드로 이어 받아서 처리 가능
// => 성공이든 실패든 무언가의 "최종 결과"
// resolved: 성공
// rejected: 실패

// 1. promise를 생성하는 코드
function promise1(flag) {
  return new Promise((resolve, reject) => {
    if (flag) {
      resolve(
        `현재 promise는 fulfilled(이행)된 상태입니다. then 메서드로 연결됩니다. 이 때 flag의 값은 ${flag}`
      );
    } else {
      reject(
        `현재 promise는 reject(거절)된 상태입니다. catch 메서드로 연결됩니다. 이 때 flag의 값은 ${flag}`
      );
    }
  });
}

// 2. promise를 사용(소비)하는 코드
/*
promise1(true)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

promise1(false)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

promise1(5 > 2)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

promise1(5 < 2)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
*/

/////////////////////////////////////////////
// 3. 프로미스 예제
/*
// index.js에서 "콜백함수"를 이용해 동기처리한 것을 "promise"를 이용해 동기 처리
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('고민 끝');
      product = '제로콜라';
      price = 2500;
      // resolve();

      if (price <= 2000) resolve();
      reject();
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

function noPay() {
  console.log('금액 부족');
}

let product;
let price;
goMart();
pickDrink().then(pay).catch(noPay);
// pay();
*/

/////////////////////////////////////////////
// 4. 프로미스 체이닝 (chaining)
// 함수를 이용해 (4 + 3) * 2 - 1 = 13 연산
// sub(mul(add(4, 3),2), 1): add -> mul -> sub

// case1. 콜백함수로 처리
/*
function add(n1, n2, cb) {
  setTimeout(() => {
    const result = n1 + n2;
    cb(result);
  }, 1000);
}

function mul(n, cb) {
  setTimeout(() => {
    const result = n * 2;
    cb(result);
  }, 700);
}

function sub(n, cb) {
  setTimeout(() => {
    const result = n - 1;
    cb(result);
  }, 500);
}

add(4, 3, (x) => {
  console.log('1: ', x);
  mul(x, (y) => {
    console.log('2: ', y);
    sub(y, (z) => {
      console.log('3: ', z);
    });
  });
});
*/

// case2. 프로미스 체이닝 적용
function add(n1, n2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = n * 2;
      // resolve(result);
      reject(new Error('의도적으로 발생시킨 에러'));
    }, 700);
  });
}

function sub(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = n - 1;
      resolve(result);
    }, 500);
  });
}

add(3, 4)
  .then((result) => {
    console.log('1: ', result); // 7
    return mul(result); // return mul(7)
  })
  .then((result) => {
    console.log('2: ', result); // 14
    return sub(result); // return sub(14)
  })
  .then((result) => console.log('3: ', result)) // 13
  .catch((err) => console.log(err));
