const express = require('express');
const controller = require('../controller/controller.js');
const router = express.Router();

router.get('/', controller.main);
router.post('/login', controller.login);
router.get('*', controller.render404);

module.exports = router;
