import { useState } from 'react';

const ChangeText = () => {
  const [text, setText] = useState('안녕하세요');
  const [btnText, setBtnText] = useState('사라져라');

  const handleText = () => {
    // if문
    // if (btnText === '사라져라') {
    //   setBtnText('나타나라');
    //   setText('');
    // } else {
    //   setBtnText('사라져라');
    //   setText('안녕하세요');
    // }

    // 삼항연산자
    setText((text) => (text === '' ? '안녕하세요' : ''));
    setBtnText((text) => (text === '나타나라' ? '사라져라' : '나타나라'));
  };

  return (
    <>
      <button onClick={handleText}>{btnText}</button>
      <h1>{text}</h1>
    </>
  );
};

export default ChangeText;
