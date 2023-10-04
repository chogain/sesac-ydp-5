import React, { useState, useRef } from 'react';

export default function Practice() {
  const [result, setResult] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [inputAuthor, setInputAuthor] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const inputAuthorRef = useRef();
  const inputTitleRef = useRef();

  const addResult = () => {
    if (inputAuthor.trim().length === 0) {
      inputAuthorRef.current.focus();

      return;
    } else if (inputTitle.trim().length === 0) {
      inputTitleRef.current.focus();

      return;
    }

    const newResult = result.concat({
      id: result.length + 1,
      title: inputTitle,
      author: inputAuthor,
    });

    setResult(newResult);
    setInputAuthor('');
    setInputTitle('');
  };

  return (
    <div>
      <fieldset>
        <span>작성자 : </span>
        <input
          type='text'
          placeholder='작성자'
          value={inputAuthor}
          ref={inputAuthorRef}
          onChange={(e) => setInputAuthor(e.target.value)}
        />
        <span>제목 : </span>
        <input
          type='text'
          placeholder='제목'
          value={inputTitle}
          ref={inputTitleRef}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button onClick={addResult}>작성</button>
      </fieldset>

      <form>
        <select>
          <option value='author'>작성자</option>
          <option value='title'>제목</option>
        </select>
        <input
          type='text'
          placeholder='검색어'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button>검색</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {result.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.author}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
