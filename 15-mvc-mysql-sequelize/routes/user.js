const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.main);
router.get('/user/signup', controller.signup);
router.post('/user/signup', controller.postSignup);

router.get('/user/signin', controller.signin);
router.post('/user/signin', controller.postSignin);

router.post('/user/profile', controller.postProfile);
router.post('/user/profile/edit', controller.editProfile);
router.post('/user/profile/delete', controller.deleteProfile);

module.exports = router;
