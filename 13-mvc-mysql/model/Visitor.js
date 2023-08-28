// exports.getVisitors = () => {
//   return [
//     { id: 1, name: '홍길동', comment: '내가 왔다.' },
//     { id: 2, name: '이찬혁', comment: '으라차차' },
//   ];
// };

const mysql = require('mysql');

// db 연결 설정
const conn = mysql.createConnection({
  host: 'localhost', // db가 설치된 호스트 IP 주소
  user: 'user', // db 접속 유저 이름
  password: '1234', // db 접속 비밀번호
  database: 'sesac', // db 이름
  charset: 'utf8mb4',
});

exports.getVisitors = (cb) => {
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log(`Visitor.js`, rows);
    cb(rows);
  });
};

exports.postVisitor = (data, cb) => {
  // 매개변수
  // data: 프론트에서 유저가 입력한 값 (req.body)
  // cb: query 실행 후 호출할 함수
  const { name, comment } = data;

  conn.query(
    `INSERT INTO visitor VALUES (null, "${name}", "${comment}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log('model >>', rows);
    }
  );
};
