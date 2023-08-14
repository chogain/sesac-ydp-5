// // math2 모듈 불러와 사용

// // math 모듈 불러오기
const math = require('./math2');

console.log(math); // { add: [Function: add], E: 2.718, PI: 3.141592 }
console.log(`math.add(1, 3) 결과값: ${math.add(1, 3)}`); // 4
console.log(`math.minus(7, 4) 결과값: ${math.minus(7, 4)}`);
console.log(`math.multiply(2, 2) 결과값: ${math.multiply(2, 2)}`);
console.log(`math.divide(4, 2) 결과값: ${math.divide(4, 2)}`);
console.log(math.E); // 2.718
console.log(math.PI); // 3.141592

// case 2. 불러오기
const { add, E, PI } = require('./math2');

console.log(add(1, 2));
console.log(E);
console.log(PI);
