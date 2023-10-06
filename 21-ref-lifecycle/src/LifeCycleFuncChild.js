import React, { useEffect, useState } from 'react';

export default function LifeCycleFuncChild({ number }) {
  const [input, setInput] = useState('');

  // 의존성 배열 []은 Mount 시점에만 호출
  // useEffect(() => {
  //   console.log('컴포넌트 마운트');

  //   // Unmount 시점에 실행
  //   return () => {
  //     console.log('컴포넌트 언마운트');
  //   };
  // }, []);

  // 의존성 배열이 없다면 Mount 또는 Update 시점에 호출
  // useEffect(() => {
  //   console.log('컴포넌트 마운트 or 업데이트');
  // });

  // input 상태가 업데이트될 떄 실행
  useEffect(() => {
    console.log('마운트 or input 상태가 변경됨에 따라 컴포넌트 업데이트');
  }, [input]);

  return (
    <div style={{ background: 'gold' }}>
      자식 컴포넌트
      <div>현재 Number값은 {number} 입니다.</div>
      <input
        type='text'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
}
