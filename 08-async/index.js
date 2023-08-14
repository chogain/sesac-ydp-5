/*
console.log(1);
setTimeout(function () {
  console.group(2);
}, 2000);
console.log(3);
*/

/////////////////////////////////////////////
// ex 편의점에서 음료를 고민한 뒤 음료를 구매
/*
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink() {
  // 3초 기다린 후에 코드 실행 ( = 3초 고민)
  setTimeout(function () {
    console.log('고민 끝');
    product = '제로콜라';
    price = 2000;
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

let product;
let price;
goMart();
pickDrink();  
pay(product, price);

// goMart -> pay -> pickDrink 순서로 실행됨
// 실행결과
// 마트에 가서 어떤 음료를 살지 고민한다.
// 상품명: undefined, 가격: undefined
// 고민끝

// 이유: pay 함수는 setTimeout으로 인해 3초 뒤에 실행됨
// product와 price에 값이 할당되기 전 불려오게 되어 undefined
*/

/////////////////////////////////////////////
// 1. 콜백함수를 이용해 비동기 처리

function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink(callback) {
  // callback 매개변수: 콜백 함수를 의미
  // 3초 기다린 후에 코드 실행
  setTimeout(function () {
    console.log('고민 끝');
    product = '제로콜라';
    price = 2000;
    callback(product, price); // 매개변수로 넘긴 콜백 함수 실행
  }, 3000);
}

goMart();
pickDrink((product, price) => {
  console.log(`상품명: ${product}, 가격: ${price}`);
});
