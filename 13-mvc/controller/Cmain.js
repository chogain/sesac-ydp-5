const Comment = require('../model/Comment.js');

exports.main = (req, res) => {
  res.render('index');
};

exports.comments = (req, res) => {
  res.render('comments', { comments: Comment.commentInfos() });
};

exports.comment = (req, res) => {
  const commentId = Number(req.params.id);
  const comments = Comment.commentInfos(); // 댓글 목록 배열

  if (comments[commentId - 1]) {
    res.render('comment', { comment: comments[commentId - 1] });
  } else res.render('404'); // 예외처리
};
