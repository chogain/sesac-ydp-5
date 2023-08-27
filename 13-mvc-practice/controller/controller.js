const Users = require('../model/Users.js');

exports.main = (req, res) => {
  res.render('index');
};

exports.login = (req, res) => {
  for (let user of Users) {
    if (req.body.id === user.userId && req.body.pw === user.userPw) {
      return res.json({ isLogin: true, user: user.userName });
    }
  }
  return res.json({ isLogin: false });
};

exports.render404 = (req, res) => {
  res.render('404');
};
