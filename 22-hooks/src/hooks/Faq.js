import React from 'react';
import useToggle from './useToggle';

export default function Faq() {
  const [isFaqOpen, setIsFapOpen] = useToggle();

  return (
    <div>
      <h1>custom hook (useToggle) ex</h1>
      <div onClick={setIsFapOpen} style={{ cursor: 'pointer' }}>
        Q. 리액트에서 커스텀 훅을 만들 수 있나요?
      </div>
      {isFaqOpen && <div>A. 네, 가능합니다.</div>}
    </div>
  );
}
