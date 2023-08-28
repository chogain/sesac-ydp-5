const Visitor = require('../model/Visitor.js');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  res.render('visitor', { data: Visitor.getVisitors() });
};

exports.render404 = (req, res) => {
  res.render('404');
};
