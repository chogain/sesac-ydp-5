const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// indexRouter에서는 localhost:PORT/ 기본 경로
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// localhost:PORT로 express 앱이 실행
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
