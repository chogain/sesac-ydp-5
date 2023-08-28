// front js

const tbody = document.querySelector('.tbody');
const buttonGroup = document.querySelector('#button-group');

// 폼의 [등록] 버튼 클릭 시 테이블에 방믄 데이터 추가
// : 버튼 클릭 시 axios로 POST/visitor 요청 보내 db에 데이터 insert 하기
function createVisitor() {
  const form = document.forms['visitor'];

  axios({
    method: 'POST',
    url: '/visitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log('post/visitor 요청에 대한 응답', res.data);
    const { id, name, comment } = res.data;

    // 방금 추가한 방명록 정보 보이기
    const newVisitor = `
    <tr id="tr_${id}">
      <td>${id}</td>
      <td>${name}</td>
      <td>${comment}</td>
      <td><button type="button" onclick="editVisitor(${id});">수정</button></td>
      <td><button type="button" onclick="deleteVisitor(this, ${id});">삭제</button></td>
    </tr>`;

    tbody.insertAdjacentHTML('beforeend', newVisitor);
  });
}
