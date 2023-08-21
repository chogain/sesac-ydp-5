const express = require('express');
const app = express();
const PORT = 8000;

// TODO: multer 관련 설정
const multer = require('multer');
const path = require('path');
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(_req, _file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + ext);
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 },
});

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: static 미들웨어 설정
// 1. uploads/ 폴더 접근 가능하도록
app.use('/uploads', express.static(__dirname + '/uploads'));
// 2. static/ 폴더 접근 가능하도록
app.use('/static', express.static(__dirname + '/static'));

// TODO: 라우터 정의
// 1. GET /: index.ejs render
app.get('/', (req, res) => {
  res.render('index');
});
// 2. POST /result: result.ejs render
app.post('/result', uploadDetail.single('userUploadFile'), (req, res) => {
  res.render('result', { file: req.file, body: req.body });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
