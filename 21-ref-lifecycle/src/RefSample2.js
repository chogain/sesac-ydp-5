import React, { useRef, useState } from 'react';

export default function RefSample2() {
  const id = useRef(5);
  const [num, setNum] = useState(15);

  const plusIdRef = () => {
    id.current += 1;
    console.log(id.current);
  };

  const plusNumState = () => setNum(num + 1);

  return (
    <div>
      <p>함수형 컴포넌트에서 버튼 클릭 시 id 값을 1씩 증가</p>
      <h2>{id.current}</h2>
      <button onClick={plusIdRef}>Plus</button>

      <p>비교. state는 ref와 다르게 값이 변경되면 리렌더링 되는 것을 확인</p>
      <h2>{num}</h2>
      <button onClick={plusNumState}>Plus</button>
    </div>
  );
}
