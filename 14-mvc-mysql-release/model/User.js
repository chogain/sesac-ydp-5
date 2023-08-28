// TODO: DB(mysql) 연결
// TODO: 모델 코드

const mysql = require('mysql');

const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'user',
  password: '1234',
  database: 'codingon',
});

exports.postSignup = (user, cd) => {
  conn.query(
    `INSERT INTO user VALUES (NULL, "${user.userid}", "${user.name}", "${user.pw}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      cd(rows);
    }
  );
};

exports.signin = (user, cb) => {
  conn.query(
    `SELECT * FROM user WHERE userid = "${user.userid}" AND pw = "${user.pw}"`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      cb(rows);
    }
  );
};

exports.profile = (user, cb) => {
  conn.query(`SELECT * FROM user WHERE userid = "${user}"`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(rows);
    cb(rows);
  });
};

exports.editProfile = (user, cd) => {
  conn.query(
    `UPDATE user SET userid = "${user.userid}",name = "${user.name}", pw = "${user.pw}"  WHERE userid = "${user.userid}"`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      cd(rows);
    }
  );
};

exports.deleteUser = (user, cd) => {
  conn.query(
    `DELETE FROM user WHERE userid = "${user.userid}"`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      cd(rows);
    }
  );
};
