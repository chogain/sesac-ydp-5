import React, { useState, useRef } from 'react';

export default function Practice() {
  const [inputs, setInputs] = useState({
    author: '',
    title: '',
    search: '',
  });
  const { author, title, search } = inputs;
  const [comment, setComment] = useState([]);
  const [result, setResult] = useState([]);
  const [searchType, setSearchType] = useState('author');
  const authorRef = useRef();
  const titleRef = useRef();
  const searchRef = useRef();

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const addComment = () => {
    if (author.trim().length === 0) {
      authorRef.current.focus();

      return;
    } else if (title.trim().length === 0) {
      titleRef.current.focus();

      return;
    }
    const newComment = {
      author,
      title,
    };

    setComment([...comment, newComment]);
    setInputs({
      ...inputs,
      author: '',
      title: '',
    });
  };

  const searchComment = () => {
    if (search.trim().length === 0) {
      searchRef.current.focus();

      return;
    }
    let searchResult = comment.filter((item) => {
      if (!item[searchType].includes(search)) {
        return null;
      }

      return item;
    });

    setResult(searchResult);
    setInputs({
      ...inputs,
      search: '',
    });
  };

  const selectSearchType = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor='wirter2'>작성자:</label>
        <input
          id='wirter2'
          type='text'
          name='author'
          value={author}
          ref={authorRef}
          onChange={onChange}
        />
        <label htmlFor='title2'>제목:</label>
        <input
          id='title2'
          type='text'
          name='title'
          value={title}
          ref={titleRef}
          onChange={onChange}
        />
        <button type='button' onClick={addComment}>
          작성
        </button>
      </form>

      <form>
        <select name='type' onChange={selectSearchType}>
          <option value='author'>작성자</option>
          <option value='title'>제목</option>
        </select>

        <input
          type='text'
          name='search'
          placeholder='검색어'
          value={search}
          onChange={onChange}
          ref={searchRef}
        />
        <button type='button' onClick={searchComment}>
          검색
        </button>
      </form>

      <h3>전체 댓글 목록</h3>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.author}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>댓글 검색 결과</h3>
      {result.length > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {result.map((value, idx) => {
                return (
                  <tr key={idx + 1}>
                    <td>{idx + 1}</td>
                    <td>{value.title}</td>
                    <td>{value.author}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h5>검색 결과가 없습니다.</h5>
      )}
    </div>
  );
}
