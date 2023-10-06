import React, { useState, useMemo } from 'react';

// - 메모이제이션으로 수행한 연산의 결곽 값을 기억함으로써 불필요한 연산 최소화
export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // 임의의 큰 연산을 하는 함수
  // 버튼을 누를 때만 실행되어야 하는데, input을 입력할 때도 연선이 이뤄짐
  // useMemo 렌더링 과정에서 특정 값을 기억해서 바뀔 때만 연산 되도록 최적화
  // [before]
  // const calc = () => {
  //   console.log('계산 중');
  //   for (let i = 0; i < 100000; i++) {}

  //   return count ** 2;
  // };

  // [after]
  const calc = useMemo(() => {
    console.log('계산 중');
    // for (let i = 0; i < 10000; i++) {}

    return count ** 2;
  }, [count]);

  return (
    <div>
      <h1>UseMemo ex</h1>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCount(() => count + 1)}>Plus</button>
      <p>count: {count}</p>

      {/* [before] */}
      {/* <p>calc: {calc()}</p> */}

      {/* [after] */}
      <p>calc: {calc}</p>
    </div>
  );
}
