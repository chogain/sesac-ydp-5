// const Visitor = require('../model/Visitor');
const { Visitor } = require('../models'); // ../models/index.js

exports.main = (req, res) => {
  res.render('index');
};

/* [before]
exports.getVisitors = (req, res) => {
  Visitor.getVisitors((result) => {
    console.log('controller >>', result);
    res.render('visitor', { data: result });
  });
};
*/

// [after] read all
exports.getVisitors = async (req, res) => {
  const result = await Visitor.findAll();
  console.log(result);
  res.render('visitor', { data: result });
};

/* [before]
exports.postVisitor = (req, res) => {
  console.log(req.body); // { name: xx, comment: yy }
  const { name, comment } = req.body;

  Visitor.postVisitor(req.body, (insertId) => {
    console.log('controller >> ', insertId);
    res.send({ id: insertId, name: name, comment: comment });
  });
};
*/

// [after] create
exports.postVisitor = async (req, res) => {
  const { name, comment } = req.body;
  const result = await Visitor.create({
    name,
    comment,
  });
  console.log(result); // create 메서드가 실행된 결과 (== insert 한 데이터 값)
  res.send(result);
};

/* [before]
exports.deleteVisitor = (req, res) => {
  console.log(req.body); // { id: xx }
  const { id } = req.body;

  Visitor.deleteVisitor(id, (result) => {
    console.log('controller >>', result); // true
    res.send(result); // res.send(true)
  });
};
*/

// [after] delete
exports.deleteVisitor = async (req, res) => {
  const { id } = req.body;
  const result = await Visitor.destroy({
    where: { id: id },
  });

  // 프론트에서 해당 응답값을 사용하지 않기 때문에 boolean 값 전달
  res.send(true);
};

/* [before]
exports.getVisitor = (req, res) => {
  console.log(req.params);
  const { id } = req.params;

  Visitor.getVisitor(id, (result) => {
    // result: 모델의 getVisitor cb의 인자(rows[0])
    console.log(result); // {}
    res.send(result);
  });
};
*/

// [after] read one
exports.getVisitor = async (req, res) => {
  const { id } = req.params;
  const result = await Visitor.findOne({
    where: { id: id },
  });
  console.log(result);
  res.send(result);
};

/* [before]
exports.updateVisitor = (req, res) => {
  console.log(req.body); // {id: x, name: x, comment: x}

  Visitor.updateVisitor(req.body, () => {
    res.send({ isUpdated: true });
  });
};
*/

// [after] update
exports.updateVisitor = async (req, res) => {
  const { id, name, comment } = req.body;
  await Visitor.update(
    { name, comment },
    {
      where: { id },
    }
  );

  res.send({ isUpdated: true });
};

exports.render404 = (req, res) => {
  res.render('404');
};
