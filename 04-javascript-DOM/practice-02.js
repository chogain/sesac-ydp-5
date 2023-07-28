let ind = 0;

document.querySelector('#updateBtn').addEventListener('click', () => {
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDay() + 1;
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();

  const newTr = document.createElement('tr');
  const newIndex = document.createElement('td');
  const newAuthor = document.createElement('td');
  const newContent = document.createElement('td');
  const newWriteDay = document.createElement('td');

  newIndex.innerHTML = ind + 1;
  newAuthor.innerHTML = document.querySelector('#author').value;
  newContent.innerHTML = document.querySelector('#content').value;
  newWriteDay.innerHTML = `${year}-${month}-${day} ${hour} : ${minute}`;

  newTr.append(newIndex, newAuthor, newContent, newWriteDay);

  document.querySelector('table').append(newTr);

  document.querySelector('#author').value = '';
  document.querySelector('#content').value = '';
});
