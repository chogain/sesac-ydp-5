import { useState } from 'react';
import Input from './Input';
import Result from './Result';
import Select from './Select';

function App() {
  // 1. 각각 상태를 만들어 관리
  // const [fruit, setFruit] = useState('apple');
  // const [backgroundColor, setBackgroundColor] = useState('black');
  // const [color, setColor] = useState('white');
  // const [content, setContent] = useState('내용');

  // 2. 하나의 객체 형태의 상태로 관리
  const [data, setData] = useState({
    fruit: 'apple',
    backgroundColor: 'black',
    color: 'white',
    content: 'test',
  });

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        {/* 1. 
        <Select
          setFruit={setFruit}
          setBackgroundColor={setBackgroundColor}
          setColor={setColor}
        /> */}
        {/* 2. */}
        <Select setData={setData} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        {/* 1. 
        <Input setContent={setContent} /> */}
        {/* 2. */}
        <Input setData={setData} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        {/* 1. 
        <Result
          fruit={fruit}
          backgroundColor={backgroundColor}
          color={color}
          content={content}
        /> */}
        {/* 2. */}
        <Result data={data} />
      </div>
    </>
  );
}

export default App;
