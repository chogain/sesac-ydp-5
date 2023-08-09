// 여려개의 모듈 내보내기
const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const E = 2.718;
const PI = 3.141592;

// case 1. 객체로 묶어 여러개의 모듈을 내보내기
// module.exports = {
//   add: add,
//   E: E,
//   PI: PI,
// };

// obj에서 key와 value가 동일하다면 생략 가능
// module.exports = { add, minus, multiply, divide, E, PI };

// case 2. 하나씩 내보내기
// module.exports.add = add;
// module.exports.E = E;
// module.exports.PI = PI;

// case 2. 더 간단히
exports.add = add;
exports.E = E;
exports.PI = PI;
