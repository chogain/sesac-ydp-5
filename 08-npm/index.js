// http 모듈로 웹 서버 생성
// const http = require('http');
// const server = http.createServer();
// const PORT = 8000;

// // 서버 실행

// // 클라이언트가 localhost:PORT 요청을 보냈으나 서버가 응답하고 있는 내용이 없음 -> 무한 대기 상태
// server.listen(PORT, function () {
//   console.log(`server listening on ${PORT} port`);
// });
// // listen: PORT 번호를 바라보고 있다가 클라이언트가 진입하게 되면 콜백 함수 실행한다는 메서드
// // localhost: 자기 자신

// 10초 후 서버 종료
// setTimeout(function () {
//   console.log('10초가 지나 서버가 종료되었습니다.');
//   server.close(); // 서버 종료 메서드
// }, 10000);

// // http 모듈로 웹 서버 생성
// const http = require('http');
// const PORT = 8000;

// const server = http.createServer(function (request, response) {
//   response.writeHead(200); // 응답 헤더
//   // response.writeHead(200, {'content-type': 'text/html; charset=utf8'}); // 응답에 한글 작성 시 텍스트 깨짐현상 해결 방법
//   response.write('<h1>Hello Node.js</h1>'); // 응답 본문
//   response.end('<p>My first node server</p>'); // 응답 본문 작성 후에 응답 종료
// });

// // request 이벤트: 클라이언트 요청
// server.on('request', function (req, res) {
//   console.log('request 이벤트 발생');
// });

// // connection 이벤트: 클라이언트가 접속(클라이언트와 서버가 연결되었을 때) 발
// server.on('connection', function (req, res) {
//   console.log('connection 이벤트 발생');
// });

// // 서버 실행
// server.listen(PORT, function () {
//   console.log(`server listening on ${PORT} port`);
// });

// // http 모듈로 웹 서버 생성하여 html 파일 연결
// const http = require('http');
// const fs = require('fs'); // 파일 관련 내장 모듈
// const PORT = 8000;

// const server = http.createServer(function (request, response) {
//   // html 파일 물러오기
//   const data = fs.readFileSync('./index.html');
//   response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
//   response.write(data);
//   response.end();
// });

// // 서버 실행
// server.listen(PORT, function () {
//   console.log(`server listening on ${PORT} port`);
// });

// // http 모듈로 웹 서버 생성하여 html 파일 연결
// // try-catch 구문 사용하여 에러 처리
// const http = require('http');
// const fs = require('fs'); // 파일 관련 내장 모듈
// const PORT = 8000;

// const server = http.createServer(function (request, response) {
//   // html 파일 물러오기
//   try {
//     const data = fs.readFileSync('./index2.html');
//     response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
//     response.write(data);
//     response.end();
//   } catch (error) {
//     console.log(error);
//     console.log(error.name); // 에러의 이름
//     console.log(error.message); // 에러에 대한 설명
//     console.log('존재하지 않는 파일입니다. 다시 요청해주세요'); // 친절 ver
//     response.writeHead(404);
//     response.write(error.message);
//     response.end();
//   }
// });

// // 서버 실행
// server.listen(PORT, function () {
//   console.log(`server listening on ${PORT} port`);
// });

// http 모듈로 웹 서버 생성하여 html 파일 연결
// 404.html 페이지로 응답하기
const http = require('http');
const fs = require('fs'); // 파일 관련 내장 모듈
const PORT = 8000;

const server = http.createServer(function (request, response) {
  try {
    const data = fs.readFileSync('./index2.html');
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(data);
    response.end();
  } catch (error) {
    const data = fs.readFileSync('./404.html');
    console.log(error);
    response.writeHead(404, { 'content-type': 'text/html; charset=utf8' });
    response.write(data);
    response.end();
  }
});

// 서버 실행
server.listen(PORT, function () {
  console.log(`server listening on ${PORT} port`);
});
