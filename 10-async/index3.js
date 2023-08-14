/*
async function f1() {
  return 1;
}

async function f2() {
  return Promise.resolve(1);
}

console.group('1 >> ', f1()); // f1 함수는 async 키워드가 붙어있으므로 프로미스를 반환 => promise { 1 }
f1().then((result) => console.log('2 >> ', result)); // 1
console.log('3 >> ', f2()); // Promise { <pending> }
f2().then((result) => console.log('4 >> ', result)); // 1
*/

//////////////////////////////////////////////
// async - await
// async: 함수 앞에 붙이는 키워드
// - 함수만 보고도 비동기 함수임을 유추하고자 함
// - 프로미스 반환

// await: 기다리다
// - 성공/실패로 프로미스 객체의 실행이 완료되기를 기다림
// - await 뒤에는 프로미스가 옴
// - **async 키워드를 사용한 함수 안에서만 await 키워드 사용 가능

// async/await 함께 사용
function fetchFruits() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fruits = ['사과', '레몬', '수박 '];
      resolve(fruits);
      // reject(new Error('알 수 없는 에러 발생, 아이템을 가져올 수 없음'));
    }, 1000);
  });
}

// 1) promise then() 메서드 사용
/*
fetchFruits()
  .then((f) => console.log(f))
  .catch((err) => console.log(err));
*/

// async-await 키워드 사용
// 에러 처리는 try-catch 구문 사용
/*
async function printItems() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
  } catch (err) {
    console.log(err);
  }
}
printItems();
*/

///////////////////////////////////////////////
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('고민 끝');
      product = '제로콜라';
      price = 2500;
      resolve();
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function exec() {
  goMart();
  await pickDrink();
  pay();
}

let product;
let price;
exec();
