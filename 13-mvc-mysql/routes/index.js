const express = require('express');
const controller = require('../controller/Cvisitor.js');
const router = express.Router();

router.get('/', controller.main);
router.get('/visitors', controller.getVisitors);
router.post('/visitor', controller.postVisitor);
router.get('*', controller.render404);

module.exports = router;
