const Visitor = require('../model/Visitor.js');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  // Before
  // res.render('visitor', { data: Visitor.getVisitors() });

  // After
  Visitor.getVisitors((result) => {
    console.log('controller >> ', result);
    res.render('visitor', { data: result });
  });
};

exports.render404 = (req, res) => {
  res.render('404');
};
