const express = require('express');
const app = express();
const PORT = 8000;

// multer 관련 설정
const multer = require('multer');
const path = require('path'); // 경로에 관한 내장 모듈
const upload = multer({
  dest: 'uploads/', // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
});
// multer 세부 설정
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  // done(null, xx) null은 error를 의미하는 매개변수
  // 에러가 없으므로 "null"이라고 전달하여 콜백함수 호출
  storage: multer.diskStorage({
    // done: callbackFnc
    destination(req, file, done) {
      done(null, 'uploads/'); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 "확장자" 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); // basename: 원본 파일에서 확장자를 제외한 파일명 추출
      // Date.now() 객체를 포함해 이름을 저장하는 이유
      // 1. 파일명 중복을 막기 위해
      // 2. 파일 이름만 보고 파일이 저장된 시점 유추 가능
    },
  }),
  // limits: 파일 제한 정보
  limits: { fieldSize: 5 * 1024 * 1024 }, // 5MB (서버의 부담을 줄이기 위함)
});

app.set('view engine', 'ejs');
app.set('/views', 'view');
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

// 1. single(): 하나의 파일을 업로드
// upload.single('userUploadFile'): 클라이언트의 요청이 들어오면
// multer 설정(upload 변수)에 따라 파일을 업로드 한 후, req.file 객체 생성
// single() 인자는 input 태그의 name 속성과 일치시켜야 함
// app.post('/upload', upload.single('userUploadFile'), (req, res) => {
app.post('/upload', uploadDetail.single('userUploadFile'), (req, res) => {
  // req.file: 파일 업로드 정보
  // req.body: 파일 외의 정보들
  console.log(req.file);
  console.log(req.body);
  res.send('파일 업로드 완료');

  // req.file 객체 자세히 보기
  // {
  //   fieldname: 'userUploadFile', // 폼에 정의한 name 값
  //   originalname: 'apple.png', // 원본 파일명
  //   encoding: '7bit', // 파일 인코딩 타입
  //   mimetype: 'image/png', // 파일 타입
  //   destination: 'uploads/', // 파일 저장 경로
  //   filename: '8b746447d3806fa2ecfd5947943dead3', // destination에 저장된 파일명
  //   path: 'uploads/8b746447d3806fa2ecfd5947943dead3', // 업로드된 파일 전체 경로
  //   size: 1069 // 파일 크기
  // }
});

// 2. array(): 여러 파일을 한 번에 업로드
// uploadDetail.array('userUploadFiles'): 클라이언트 요청이 들어오면
// multer 설정(uploadDetail 변수)에 따라 파일을 업로드한 후, req.files 객체 생성
app.post('/upload/array', uploadDetail.array('userUploadFiles'), (req, res) => {
  console.log(req.files); // [{파일1_정보}, {파일2_정보}, ... ] : 배열 형태로 각 파일 정보 출력
  console.log(req.body);
  res.send('하나의 input에 여러 개의 file 업로드 완료 v1');
});

// 2. fields(): 여러 파일을 한 번에 업로드
app.post(
  '/upload/fields',
  uploadDetail.fields([
    { name: 'userUploadFiles1' },
    { name: 'userUploadFiles2' },
  ]),
  (req, res) => {
    console.log(req.files); // { userUploadFiles1: [ {파일_정보} ], userUploadFiles2: [ {파일_정보} ]} : 객체 안에 배열 형태로 각 파일 정보 출력
    console.log(req.body);
    res.send('하나의 input에 여러 개의 file 업로드 완료 v2');
  }
);

// 동적 폼 전송
app.post(
  '/dynamicFile',
  uploadDetail.single('dynamicUserUploadFile'),
  (req, res) => {
    console.log(req.file);
    res.send(req.file);
  }
);

app.listen(PORT, () => {
  console.log(`${PORT} port is open`);
});
