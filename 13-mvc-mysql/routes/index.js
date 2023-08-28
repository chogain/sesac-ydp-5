const express = require('express');
const controller = require('../controller/Cvisitor.js');
const router = express.Router();

router.get('/', controller.main);
router.get('/visitors', controller.getVisitors);
router.get('*', controller.render404);

module.exports = router;
