const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'view');
// 미들웨어(middleware)
// : 요청(req)과 응답(res)의 중간에서 작업하는 코드
// app.use()

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

// 라우팅(Routing) - 주소 설정한다는 의미
// ex. GET '/' => index.ejs를 보여줌
app.get('/', (req, res) => {
  // res.render(ejs_경로. 데이터)
  // ejs_경로" views/ 폴더 내부 ejs 파일의 경로
  // 데이터: 뷰에 넣어줄 정보
  res.render('index');
});

// GET '/getForm' => 임의의 메세지 전송
// get 방식은 클라이언트에게 보낸 데이터가 req.query에 저장
/*
app.get('/getForm', (req, res) => {
  console.log(req.query);
  // res.send('GET 요청 성공');
  res.render('result', {
    title: 'GET',
    userInfo: req.query,
  });
});
*/

// get 실습
app.get('/getForm', (req, res) => {
  res.render('get-result', {
    title: 'GET',
    userInfo: req.query,
  });
});

// get 실습 1
app.get('/practice-get', (req, res) => {
  res.render('practice-post');
});

app.get('/practice-get-result', (req, res) => {
  res.render('practice-get-result', {
    userInfo: req.query,
  });
});

// GET 요청 조건문 사용
app.get('/get-result', (req, res) => {
  console.log(req.query);
  res.render('get-result', {
    userInfo: req.query,
  });
});

// POST '/getForm' => 임의의 메세지 전송
// post 방식은 클라이언트에게 보낸 데이터가 req.body에 저장
app.post('/postForm', (req, res) => {
  console.log(req.body);
  // res.send('POST 요청 성공');
  res.render('result', {
    title: 'POST',
    userInfo: req.body,
  });
});

// post 실습
app.get('/practice-post', (req, res) => {
  res.render('practice-post');
});
app.post('/practice-post-result', (req, res) => {
  console.log(req.body);
  res.render('practice-post-result', {
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`${PORT} is open`);
});
