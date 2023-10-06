import React, { useState, useCallback } from 'react';

// useCallback
// - 매변 함수를 생성하지 않고, 함수를 기억해 두었다가 필요할 때마다 함수를 재사용
export default function UseCallbackEx() {
  const [text, setText] = useState('');

  // [before]
  // text 상태 업데이트 -> 컴포넌트 리렌더링 -> 코드를 다시 실행
  // = onChangeText 함수도 다시 생성 (js func 는 object type이므로 주소 값이 변경됨)
  // => 불필요한 작업
  // const onChangeText = (e) => {
  //   setText(e.target.value);
  // };

  // [after]
  // useCallback 훅으로 함수를 기억
  // 컴포넌트가 리렌더링 되어도, 의존생 배열에 있는 값이 바뀌지 않는 한 기존 함수를 재사용
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <h1>useCallback ex</h1>
      <input type='text' onChange={onChangeText} />
      <div>작성한 값: {text || '없음'}</div>
    </div>
  );
}
