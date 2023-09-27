import { useState } from 'react';

const ChangeColor = () => {
  const [str, setStr] = useState('검정색 글씨');
  const [style, setStyle] = useState({ color: 'black' });

  const handleColorRed = () => {
    setStr('빨간색 글씨');
    setStyle({ color: 'red' });
  };

  const handleColorBlue = () => {
    setStr('파란색 글씨');
    setStyle({ color: 'blue' });
  };
  return (
    <>
      <h1 style={style}>{str}</h1>
      <button onClick={handleColorRed}>빨간색</button>
      <button onClick={handleColorBlue}>파란색</button>
    </>
  );
};

export default ChangeColor;
