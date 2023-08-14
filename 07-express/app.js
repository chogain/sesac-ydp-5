const express = require('express');
const app = express();
const PORT = 8080;

/* express 사용
// app.get(경로, 해당 경로로 들어왔을 때 실행할 콜백 함수)
// '/' : 루트 경로 -> 서버 주소:포트 번호/ (localhost:8080/)
app.get('/', function (req, res) {
  res.send('<h1>hello Express</h1>');
});

// '/sesac' 경로로 들어왔을 때 "새싹 영등포캠퍼스 5기 수업중" 메세지 보이기
app.get('/sesac', function (req, res) {
  // res.send(x) : x를 클라이언트에게 응답으로 보냄
  res.send('<h1>새싹 영등포캠퍼스 5기 수업중</h1>');
});

// 서버가 실행할 PORT 지정, 실행했을 때 콘솔 로그 찍음
app.listen(PORT, function () {
  console.log(`server listening on ${PORT} port`);
});
*/

/*
// ejs 템플릿 엔진 사용
app.set('view engine', 'ejs'); // express 템플릿 엔진 종류 등록
app.set('views', './views'); // 템플릿 엔진 파일을 저장할 위치 등록

// app.get(경로, 해당 경로로 들어왔을 때 실행할 콜백 함수)
// '/' : 루트 경로 -> 서버 주소:포트 번호/ (localhost:8080/)
app.get('/', function (req, res) {
  // res.render(ejs_filename): ejs file 이름을 찾아서 응답
  res.render('index');
});

// '/sesac' 경로로 들어왔을 때 "새싹 영등포캠퍼스 5기 수업중" 메세지 보이기
app.get('/sesac', function (req, res) {
  res.send('<h1>새싹 영등포캠퍼스 5기 수업중</h1>');
});

// 퀴즈
// 1. /login 경로로 요청이 들어오면 로그인 페이지(ejs)를 응답
app.get('/login', function (req, res) {
  res.render('login');
});

// 2. /register 경로로 요청이 들어오면 회원가입 페이지(ejs)를 응답
app.get('/register', function (req, res) {
  res.render('register');
});

// 서버가 실행할 PORT 지정, 실행했을 때 콘솔 로그 찍음
app.listen(PORT, function () {
  console.log(`server listening on ${PORT} port`);
});
*/

/*
// 데이터를 보내는 방법
app.set('view engine', 'ejs'); // express 템플릿 엔진 종류 등록
app.set('views', './views'); // 템플릿 엔진 파일을 저장할 위치 등록

// (임시) 데이터베이스에서 가져온 회원 정보(id, pw)
const idFromDB = 'nanana';
const pwFromDB = '134qwer';

// app.get(경로, 해당 경로로 들어왔을 때 실행할 콜백 함수)
app.get('/', function (req, res) {
  // res.render()의 두 번째 인자로 데이터 전송
  res.render('index', {
    userId: idFromDB,
    userPw: pwFromDB,
    btns: ['사과', '오렌지', '키위'],
    me: {
      name: 'ining',
      msg: "Hello, I'm ining!",
    },
  });
});

// '/sesac' 경로로 들어왔을 때 "새싹 영등포캠퍼스 5기 수업중" 메세지 보이기
app.get('/sesac', function (req, res) {
  res.send('<h1>새싹 영등포캠퍼스 5기 수업중</h1>');
});

// 퀴즈
// 1. /login 경로로 요청이 들어오면 로그인 페이지(ejs)를 응답
app.get('/login', function (req, res) {
  res.render('login');
});

// 2. /register 경로로 요청이 들어오면 회원가입 페이지(ejs)를 응답
app.get('/register', function (req, res) {
  res.render('register');
});

// 서버가 실행할 PORT 지정, 실행했을 때 콘솔 로그 찍음
app.listen(PORT, function () {
  console.log(`server listening on ${PORT} port`);
});
*/

// 미들웨어
app.set('view engine', 'ejs'); // express 템플릿 엔진 종류 등록
app.set('views', './views'); // 템플릿 엔진 파일을 저장할 위치 등록
// static 미들웨어 등록
app.use('/public', express.static(__dirname + '/static'));

// (임시) 데이터베이스에서 가져온 회원 정보(id, pw)
const idFromDB = 'nanana';
const pwFromDB = '134qwer';

// app.get(경로, 해당 경로로 들어왔을 때 실행할 콜백 함수)
app.get('/', function (req, res) {
  // res.render()의 두 번째 인자로 데이터 전송
  res.render('index', {
    userId: idFromDB,
    userPw: pwFromDB,
    btns: ['사과', '오렌지', '키위'],
    me: {
      name: 'ining',
      msg: "Hello, I'm ining!",
    },
  });
});

// '/sesac' 경로로 들어왔을 때 "새싹 영등포캠퍼스 5기 수업중" 메세지 보이기
app.get('/sesac', function (req, res) {
  res.send('<h1>새싹 영등포캠퍼스 5기 수업중</h1>');
});

// 퀴즈
// 1. /login 경로로 요청이 들어오면 로그인 페이지(ejs)를 응답
app.get('/login', function (req, res) {
  res.render('login');
});

// 2. /register 경로로 요청이 들어오면 회원가입 페이지(ejs)를 응답
app.get('/register', function (req, res) {
  res.render('register');
});

// 서버가 실행할 PORT 지정, 실행했을 때 콘솔 로그 찍음
app.listen(PORT, function () {
  console.log(`server listening on ${PORT} port`);
});
