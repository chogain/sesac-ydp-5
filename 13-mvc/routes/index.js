// 이 모듈의 역할: 경로 선언과 관련된 내용 기술
const express = require('express');
const controller = require('../controller/Cmain.js');
const router = express.Router();

// 이 파일의 기본 경로: localhost:PORT/

// GET localhost:PORT/
router.get('/', controller.main);

// GET localhost:PORT/comments
router.get('/comments', controller.comments);

// GET localhost:PORT/comments/:id
router.get('/comment/:id', controller.comment);

// module.exports 구문을 통해 라우터를 내보내야
// 다른 모듈(파일)에서 router 객체를 사용할 수 있음
module.exports = router;
