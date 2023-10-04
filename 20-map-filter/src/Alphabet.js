import React, { useState } from 'react';

export default function Alphabet() {
  const [alphabetStr, setAlphabetStr] = useState([
    'b',
    'a',
    'n',
    'a',
    'n',
    'a',
  ]);
  const [alphabet, setAlphabet] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);
  const [inputAlpha, setInputAlpha] = useState('');

  const addAlpha = () => {
    if (!inputAlpha) {
      alert('알파벳을 입력해주세요!');
      return;
    }
    if (inputAlpha.trim().length === 0) {
      alert('띄어쓰기는 입력되지 않습니다. 알파벳을 입력해주세요!');
      return;
    }

    const newAlpha = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });

    setInputAlpha('');
    setAlphabet(newAlpha);
  };

  // 엔터키 이벤트 e.code or e.keyCode 사용
  const handleKeyDown = (e) => {
    // bug fix: IME 문제 해결
    if (e.nativeEnter.isComposing) {
      return;
    }

    if (e.code === 'Enter') {
      addAlpha();
    }

    // if (e.keyCode === 13) {
    //   addAlpha();
    // }
  };

  const deleteAlpha = (targetId) => {
    const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);

    setAlphabet(newAlpha);
  };

  return (
    <div>
      <p>1. 문자열의 배열 map</p>
      <ol>
        {alphabetStr.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ol>
      <br />
      <p>
        2. 객체 map, alphabet 객체에 데이터 추가 / 특정 데이터 filter하여 삭제
      </p>
      <input
        type='text'
        placeholder='알파벳 입력'
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={addAlpha}>ADD</button>
      <ol>
        {alphabet.map((value) => (
          <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
            {value.alpha}
          </li>
        ))}
      </ol>
    </div>
  );
}
