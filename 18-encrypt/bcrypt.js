// bcrypt
// : 비밀번호 암호화하는 알고리즘 중 하나
// : 주로 강력한 보안 필요할 때 사용
// : blowfish 암호를 기반으로 설계된 단방향 암호화 함수
// (보안 강화하기 위해 해쉬화 하는 것으로 원본 데이터를 복원하는 기능은 없음)

const bcrypt = require('bcrypt');

const originalPw = '1234'; // 원본 비밀번호
const saltRounds = 10; // 솔트 라운드 수를 정의

// 1. 비밀번호 해싱 함수
function hashPw(pw) {
  return bcrypt.hashSync(pw, saltRounds);
}

// 2. 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하는 함수
function comparePw(pw, hashedPw) {
  return bcrypt.compareSync(pw, hashedPw);
}

// 사용 예제
// 원본 비밀번호를 해싱한 결과
const hashedPw = hashPw(originalPw);
console.log(`Hashed pw: ${hashedPw}`);

// 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인
const isMatch = comparePw(originalPw, hashedPw); // 같다면 true, 다르면 false
console.log(`isMatch: ${isMatch}`); // true

const isMatch2 = comparePw('hello world!', hashedPw); // 같다면 true, 다르면 false
console.log(`isMatch2: ${isMatch2}`); // false
