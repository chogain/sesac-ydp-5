import React, { useRef } from 'react';

export default function RefSample1() {
  // 1. ref 객체 만들기
  const inputRef = useRef();

  const handleFocus = () => {
    console.log(inputRef.current);

    inputRef.current.focus();
  };

  return (
    <div>
      <p>함수형 컴포넌트 버튼 클릭 시 input에 focus 처리</p>
      {/* 2. 직접 접근하고 싶은 DOM 요소에 ref props 설정 */}
      <input type='text' ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}
