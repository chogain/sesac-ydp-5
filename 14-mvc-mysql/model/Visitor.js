const mysql = require('mysql');

// db 연결 설정
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'sesac',
});

exports.getVisitors = (cb) => {
  // [before]
  //   return [
  //     { id: 1, name: '홍길동', comment: '내가 왔다.' },
  //     { id: 2, name: '이찬혁', comment: '으라차차' },
  //   ];

  // [after]
  conn.query('select * from visitor', (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('model >>', rows);
    cb(rows);
  });
};

exports.postVisitor = (data, cb) => {
  // 매개변수
  // data: 프론트엔드에서 유저가 입력한 값 (req.body)
  // callback: query 실행 후 호출할 함수
  const { name, comment } = data;
  conn.query(
    `insert into visitor values(null, "${name}", "${comment}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log('model >>', rows);
      cb(rows.insertId);
    }
  );
};

exports.deleteVisitor = (id, cb) => {
  console.log('model >>', id); // front에서 알려준 삭제할 데이터의 pk

  conn.query(`delete from visitor where id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('model >> ', rows);
    cb(true); // { id: id }로 쓸 수도 있음
  });
};

exports.getVisitor = (id, cb) => {
  conn.query(`SELECT * FROM visitor WHERE id = ${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log(rows); // [ {} ]
    cb(rows[0]);
  });
};

exports.updateVisitor = (updateData, cb) => {
  const { id, name, comment } = updateData;
  const sql = `UPDATE visitor SET name = "${name}", comment = "${comment}" WHERE id = ${id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log(rows);
    cb();
  });
};
