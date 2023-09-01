const { User } = require('../models');

exports.main = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.postSignup = async (req, res) => {
  const { userid, pw, name } = req.body;
  const result = await User.create({
    userid,
    name,
    pw,
  });

  res.end();
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.postSignin = async (req, res) => {
  const { userid, pw } = req.body;
  const result = await User.findOne({
    where: { userid, pw },
  });
  console.log('result', result);
  if (result) {
    res.send(true);
  } else {
    res.send(false);
  }
};

exports.postProfile = async (req, res) => {
  const userid = req.body.userid;
  const result = await User.findOne({
    where: { userid },
  });

  res.render('profile', { data: result });
};

exports.editProfile = async (req, res) => {
  const { id, pw, name } = req.body;
  await User.update(
    { pw, name },
    {
      where: { id },
    }
  );

  res.send({ isUpdated: true });
};

exports.deleteProfile = async (req, res) => {
  const { id } = req.body;
  const result = await User.destroy({
    where: { id },
  });

  res.send(true);
};
